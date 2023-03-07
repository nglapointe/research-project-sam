<template>
	<header>
		<h1>{{ title }}</h1>
		<a href="/">Home</a>
		<a href="/friends">Friends</a>
	</header>
</template>

<script>
export default {
	name: 'AppHeader',
	props: {
		title: String,
	},
	computed: {
		// homePage() {
		// 	if (this.$route.path === '/') {
		// 		return true;
		// 	} else {
		// 		return false;
		// 	}
		// },
	},
};
</script>
