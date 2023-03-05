<template>
	<p v-if="count <= 0" class="no-count">You currently have no friends!</p>
	<p class="count" v-else>
		You have <strong>{{ count }}</strong> friends! You have access to their
		contact information, start convertions!
	</p>

	<Friends :friends="friends" @delete-friend="deleteFriend" />
</template>

<script>
import Friends from '../components/Friends.vue';

export default {
	name: 'FriendView',
	components: {
		Friends,
	},
	data() {
		return {
			friends: [],
			count: 0,
		};
	},
	methods: {
		async getFriends() {
			//Using the random user api to fecth random user to display
			//Because of this, async must be placed
			this.friends = [];

			const res = await fetch('http://localhost:5000/friends');
			const data = await res.json();

			this.count = data.length;

			this.friends = data;
		},
		async deleteFriend(id) {
			if (confirm('Are you sure?')) {
				const res = await fetch(`http://localhost:5000/friends/${id}`, {
					method: 'DELETE',
				});

				if (res.status === 200) {
					this.friends = this.friends.filter((friend) => friend.id !== id);

					await this.getFriends();
				} else {
					alert('Error deleting task');
				}
			}
		},
	},
	async created() {
		await this.getFriends();
	},
};
</script>
