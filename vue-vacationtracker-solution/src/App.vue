<template>
	<div class="container">
		<Header
			@toggle-add-task="toggleAddTask"
			title="Vacation Tracker"
			:showAddTask="showAddTask"
		/>
		<router-view :showAddTask="showAddTask"></router-view>
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
			showAddTask: false,
		};
	},
	methods: {
		toggleAddTask() {
			this.showAddTask = !this.showAddTask;
		},
	},
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');

* {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}

body {
	font-family: 'Poppins', sans-serif;
	background-color: whitesmoke;
}

.container {
	max-width: 650px;
	margin: 30px auto;
	overflow: auto;
	min-height: 900px;
	border: 1px solid steelblue;
	padding: 30px;
	border-radius: 5px;
	background-color: white;
	box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.5);
}

.inner-container {
	display: flex;
	flex-wrap: nowrap;
}

.btn {
	display: inline-block;
	background: #000;
	color: #fff;
	border: none;
	padding: 10px 20px;
	margin: 5px;
	border-radius: 5px;
	cursor: pointer;
	text-decoration: none;
	font-size: 15px;
	font-family: inherit;
}

.btn:focus {
	outline: none;
}

.btn:active {
	transform: scale(0.98);
}

.btn-block {
	display: block;
	width: 100%;
}
</style>
