<template>
	<header>
		<h1>{{ title }}</h1>
		<Button
			v-show="homePage"
			@btn-click="$emit('toggle-add-task')"
			:text="showAddTask ? 'Close' : 'Add Trip'"
			:color="showAddTask ? 'red' : 'green'"
		/>
	</header>
</template>

<script>
import Button from './Button.vue';

export default {
	name: 'Header',
	props: {
		title: String,
		showAddTask: Boolean,
	},
	components: {
		Button,
	},
	computed: {
		homePage() {
			if (this.$route.path === '/') {
				return true;
			} else {
				return false;
			}
		},
	},
};
</script>
