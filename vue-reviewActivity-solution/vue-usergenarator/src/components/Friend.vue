<template>
	<div class="friend-container">
		<i @click="$emit('delete-friend')" class="fas fa-times"></i>
		<img
			:class="`${friend.gender}`"
			v-bind:src="`${friend.photo}`"
			:alt="`${friend.firstName} ${friend.lastName}`"
		/>
		<h4>{{ friend.firstName }} {{ friend.lastName }}</h4>
		<br /><br />

		<div class="friend-info">
			<table>
				<tr>
					<th>Country:</th>
					<td>{{ friend.country }}</td>
				</tr>
				<tr>
					<th>Age:</th>
					<td>{{ friend.age }}</td>
				</tr>
				<br />
				<tr>
					<th>Email:</th>
					<td>{{ friend.email }}</td>
				</tr>
				<br />
				<tr>
					<th>Phone:</th>
					<td>{{ friend.phone }}</td>
				</tr>
			</table>
		</div>

		<br /><br /><br />
	</div>
</template>

<script>
export default {
	name: 'FriendCard',
	props: {
		friend: Object,
	},
};
</script>
