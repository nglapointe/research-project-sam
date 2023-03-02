<template>
	<div
		@dblclick="$emit('toggle-reminder', task.id)"
		:class="[task.reminder ? 'reminder' : '', 'task']"
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

<style scoped>
.delete-btn {
	color: red;
	float: right;
}
.task {
	background-color: white;
	margin: 5px;
	padding: 10px 20px;
	cursor: pointer;
	height: 145px;

	background-image: url('../../images/plane-image.jfif');
	background-repeat: no-repeat;
	background-size: cover;
}
.task.reminder {
	border-left: 5px solid green;
}
.task h3 {
	display: flex;
	align-items: center;
	justify-content: space-between;
}

h2 {
	padding-bottom: 2%;
	color: rgb(246, 237, 158);
}

.spacing {
	padding-left: 2.5%;
}

.why-text {
	padding-top: 1%;
	font-weight: 800;
	width: 95%;
}
</style>
