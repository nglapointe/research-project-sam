<template>
	<header>
		<h1>{{ title }}</h1>
		<Button
			v-show="homePage"
			@btn-click="$emit('toggle-add-trip')"
			:text="showAddTrip ? 'Close' : 'Add Trip'"
			:color="showAddTrip ? 'red' : 'green'"
		/>
	</header>
</template>

<script>
import Button from './Button.vue';

export default {
	name: 'Header',
	props: {
		title: String,
		showAddTrip: Boolean,
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
