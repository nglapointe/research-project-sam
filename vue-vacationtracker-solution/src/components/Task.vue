<template>
	<div
		@dblclick="$emit('toggle-reminder', task.id)"
		:class="[task.reminder ? 'bookedFlight' : '', 'trip']"
	>
		<h2>
			{{ task.name }}
			<i @click="$emit('delete-task')" class="fas fa-times delete-btn"></i>
		</h2>
		<p>
			<i class="fas fa-map-marker-alt"></i
			><span class="spacing">{{ task.location }}</span>
		</p>
		<p>
			<i class="far fa-calendar-alt"></i
			><span class="spacing">{{ task.day }}</span>
		</p>

		<p class="why-text">{{ task.why }}</p>
	</div>
</template>

<script>
export default {
	name: 'Task',
	props: {
		task: Object,
	},
};
</script>
