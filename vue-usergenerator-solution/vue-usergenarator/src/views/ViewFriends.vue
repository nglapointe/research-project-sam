<template>
	<p class="count" v-if="count > 0">
		You have <strong>{{ count }}</strong> friends! You have access to their
		contact information, start convertions!
	</p>
	<p v-else class="no-count">You currently have no friends!</p>

	<Friends :friends="friends" />
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

			return data;
		},
	},
	async created() {
		this.friends = await this.getFriends();
	},
};
</script>
