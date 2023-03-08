<template>
	<div class="user-container">
		<img :class="``" v-bind:src="``" :alt="``" />
		<h4><!--User Full Name--></h4>
		<br /><br />

		<div class="user-info">
			<table>
				<tr>
					<th>Location:</th>
					<td><!--User state and country--></td>
				</tr>
				<br />
				<tr>
					<th>Age:</th>
					<td><!--User's age--></td>
				</tr>
			</table>
		</div>

		<br />

		<!--Make sure the form has an event that calls the onSumit(e) method-->
		<form>
			<!--Use this to identify which user it is-->
			<input type="hidden" />
			<Button text="Add Friend" bcolor="black" color="black" type="submit" />
		</form>
	</div>
</template>

<script>
import Button from '../components/Button.vue';

export default {
	name: 'UserCard',
	props: {
		user: Object,
	},
	components: {
		Button,
	},
	methods: {
		getUser() {
			this.$emit('get-user');
		},
		onSubmit(e) {
			e.preventDefault();

			/*
				TODO:
				Create a new friend object and emit that object through a custom event to the 
				parent component.
			*/
		},
	},
};
</script>
