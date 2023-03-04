<template>
	<div>
		<p class="count">
			Found <strong>{{ count }}</strong> potential friends!
		</p>
		<button @click="getUsers">Get Users</button>
		<Users :users="users" @add-friend="addFriend" />
	</div>
</template>

<script>
import Users from '../components/Users.vue';

export default {
	name: 'HomeView',
	components: {
		Users,
	},
	data() {
		return {
			users: [],
			count: 0,
		};
	},
	methods: {
		async getUsers() {
			//Using the random user api to fecth random user to display
			//Because of this, async must be placed
			this.users = [];

			const res = await fetch('https://randomuser.me/api?results=10');
			const { results } = await res.json();

			this.users.push(...results);

			//Using the array (json) that is returned, displau random information for fetched user
			this.count = this.users.length;
		},
		async addFriend(newFriend) {
			const res = await fetch('http://localhost:5000/friends', {
				method: 'POST',
				headers: {
					'Content-type': 'application/json',
				},
				body: JSON.stringify(newFriend),
			});

			const data = await res.json();

			//Add the friends to the list
			this.friends = [...this.friends, data];
		},
	},
	async created() {
		this.getUsers();
	},
};
</script>
