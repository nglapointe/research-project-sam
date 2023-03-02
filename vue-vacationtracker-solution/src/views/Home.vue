<template>
	<AddTask v-if="showAddTask" @add-task="addTask" />
	<NextTrip v-else :task="nextTrip" />

	<Tasks
		@toggle-bookedFlight="toggleReminder"
		@delete-task="deleteTask"
		:tasks="task"
	/>
</template>

<script>
import Tasks from '../components/Tasks';
import AddTask from '../components/AddTask';
import NextTrip from '../components/NextTrip.vue';
import moment from 'moment';

export default {
	name: 'Home',
	props: {
		showAddTask: Boolean,
	},
	components: {
		Tasks,
		AddTask,
		NextTrip,
	},
	data() {
		return {
			task: [],
			nextTrip: Object,
		};
	},
	methods: {
		async addTask(newTask) {
			const res = await fetch('http://localhost:5000/tasks', {
				method: 'POST',
				headers: {
					'Content-type': 'application/json',
				},
				body: JSON.stringify(newTask),
			});

			const data = await res.json();

			this.task = [...this.task, data];
			this.task.sort((a, b) => new Date(a.day) - new Date(b.day));
		},
		async deleteTask(id) {
			if (confirm('Are you sure?')) {
				const res = await fetch(`http://localhost:5000/tasks/${id}`, {
					method: 'DELETE',
				});

				res.status === 200
					? (this.task = this.task.filter((task) => task.id !== id))
					: alert('Error deleting tasl');
			}
		},
		async toggleReminder(id) {
			const taskToToggle = await this.fetchTask(id);
			const updTask = {
				...taskToToggle,
				bookedFlight: !taskToToggle.bookedFlight,
			};

			const res = await fetch(`http://localhost:5000/tasks/${id}`, {
				method: 'PUT',
				headers: {
					'Content-type': 'application/json',
				},
				body: JSON.stringify(updTask),
			});

			const data = await res.json();

			this.task = this.task.map((task) =>
				task.id === id ? { ...task, bookedFlight: data.bookedFlight } : task
			);
		},
		async fetchTasks() {
			const res = await fetch('http://localhost:5000/tasks');
			const data = await res.json();

			// sort tasks by due date in ascending order
			data.sort((a, b) => new Date(a.day) - new Date(b.day));

			// set the next trip
			const currentDate = new Date();
			const closestTask = data.find((task) => new Date(task.day) > currentDate);
			this.nextTrip = closestTask;

			return data;
		},
		async fetchTask(id) {
			const res = await fetch(`http://localhost:5000/tasks/${id}`);
			const data = await res.json();

			return data;
		},
		async deleteExpiredTasks() {
			const now = new Date();
			now.setHours(0, 0, 0, 0); // Set the time component to 00:00:00:000
			const expiredTasks = this.task.filter((task) => {
				const tripDate = new Date(task.day);
				tripDate.setHours(0, 0, 0, 0); // Set the time component to 00:00:00:000
				return tripDate <= now;
			});
			for (const task of expiredTasks) {
				const res = await fetch(`http://localhost:5000/tasks/${task.id}`, {
					method: 'DELETE',
				});
				if (res.status === 200) {
					this.task = this.task.filter((t) => t.id !== task.id);
				} else {
					console.log(`Error deleting task with id ${task.id}`);
				}
			}
		},
	},
	async created() {
		this.task = await this.fetchTasks();

		setInterval(() => {
			this.deleteExpiredTasks();
		}, 1000);
	},
};
</script>

<style scoped>
.right {
	flex-basis: 40%; /* set width of each element */
	height: 900px;
}

.left {
	flex-basis: 60%;
	height: 900px;
	padding-left: 5%;
}
</style>
