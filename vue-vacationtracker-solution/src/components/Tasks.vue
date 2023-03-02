<template>
	<div v-if="tasks.length > 0">
		<div :key="task.id" v-for="task in tasks">
			<Task
				@toggle-reminder="$emit('toggle-reminder', task.id)"
				@delete-task="$emit('delete-task', task.id)"
				:task="task"
			/>
		</div>
	</div>
	<h2 v-else>You have no existing trip booked!</h2>
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

<style scoped>
h2 {
	padding-left: 15%;
	padding-top: 5%;
	color: red;
}
</style>
