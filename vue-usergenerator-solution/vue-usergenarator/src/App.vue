<template>
	<Header title="FriendsToGo" />
	<div class="container">
		<router-view :generateUser="getUser"></router-view>
	</div>
</template>

<script>
import Header from './components/Header.vue';

export default {
	name: 'App',
	components: { Header },
};
</script>

<style>
@import './styles.css';
</style>
