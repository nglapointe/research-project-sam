<template>
	<div class="container">
		<Header
			@toggle-add-trip="toggleAddTrip"
			title="Vacation Tracker"
			:showAddTrip="showAddTrip"
		/>
		<router-view :showAddTrip="showAddTrip"></router-view>
		<Footer />
	</div>
</template>

<script>
import Header from './components/Header';
import Footer from './components/Footer';

export default {
	name: 'App',
	components: { Header, Footer },
	data() {
		return {
			showAddTrip: false,
		};
	},
	methods: {
		toggleAddTrip() {
			this.showAddTrip = !this.showAddTrip;
		},
	},
};
</script>

<style>
@import 'styles.css';
</style>
