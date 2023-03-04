<template>
	<div class="user-container">
		<img
			:class="`${friend.gender}`"
			v-bind:src="`${friend.photo}`"
			:alt="`${friend.firstName} ${friend.lastName}`"
		/>
		<h4>{{ friend.firstName }} {{ friend.lastName }}</h4>
		<br /><br />

		<div class="user-info">
			<table>
				<tr>
					<th>Location:</th>
					<td>{{ friend.country }}</td>
				</tr>
				<tr>
					<th>Age:</th>
					<td>{{ friend.age }}</td>
				</tr>
				<tr>
					<th>Email:</th>
					<td>{{ friend.email }}</td>
				</tr>
				<tr>
					<th>Phone:</th>
					<td>{{ friend.phone }}</td>
				</tr>
			</table>
		</div>

		<br />
		<form @submit="onSubmit">
			<input type="hidden" :value="friend.id" />
			<Button text="Remove Friend" bcolor="black" color="red" type="submit" />
		</form>
	</div>
</template>

<script>
import Button from '../components/Button.vue';

export default {
	name: 'FriendCard',
	props: {
		friend: Object,
	},
	components: {
		Button,
	},
};
</script>
