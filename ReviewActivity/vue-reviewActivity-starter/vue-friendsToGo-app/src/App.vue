<template>
	<!--Call the Header Component. Send the title here-->

	<div class="container">
		<router-view :generateUser="getUser"></router-view>
	</div>
</template>

<script>
/*
	TODO:
	Do what is needed to import the Header Component onto the browser. The header should display on both
	"Home" and "Friend" page.
*/

import Header from './components/Header.vue';

export default {
	name: 'App',
	components: { Header },
};
</script>

<style>
/* TODO: Import the main styles.css file. */
</style>
