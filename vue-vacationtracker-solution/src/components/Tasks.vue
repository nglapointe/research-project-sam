<template>
	<div v-if="tasks.length > 0" class="list">
		<div :key="task.id" v-for="task in tasks">
			<Task
				@toggle-reminder="$emit('toggle-reminder', task.id)"
				@delete-task="$emit('delete-task', task.id)"
				:task="task"
			/>
		</div>
	</div>

	<div v-else class="list">
		<h2 class="error">You have no existing trip booked!</h2>
	</div>
</template>

<script>
import Task from './Task';

export default {
	name: 'Tasks',
	props: {
		tasks: Array,
	},
	components: {
		Task,
	},
	emits: ['delete-task', 'toggle-reminder'],
};
</script>
