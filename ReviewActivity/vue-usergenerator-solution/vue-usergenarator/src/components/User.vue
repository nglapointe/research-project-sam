<template>
	<div class="user-container">
		<img
			:class="`${user.gender}`"
			v-bind:src="`${user.picture.large}`"
			:alt="`${user.name.first} ${user.name.last}`"
		/>
		<h4>{{ user.name.first }}, {{ user.name.last }}</h4>
		<br /><br />

		<div class="user-info">
			<table>
				<tr>
					<th>Location:</th>
					<td>{{ user.location.state }}, {{ user.location.country }}</td>
				</tr>
				<br />
				<tr>
					<th>Age:</th>
					<td>{{ user.dob.age }}</td>
				</tr>
			</table>
		</div>

		<br />
		<form @submit="onSubmit">
			<input type="hidden" :value="user.id.name" />
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

			const friend = {
				firstName: this.user.name.first,
				lastName: this.user.name.last,
				gender: this.user.gender,
				country: this.user.location.country,
				email: this.user.email,
				age: this.user.dob.age,
				phone: this.user.phone,
				photo: this.user.picture.large,
			};

			this.$emit('add-friend', friend);
		},
	},
};
</script>
