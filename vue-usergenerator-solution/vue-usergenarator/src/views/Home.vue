<template>
	<div>
		<div class="input-container">
			<div class="get-user-input">
				<input type="number" max="15" min="0" v-model="num" />
				<Button @click="getUsers" text="Find new friends!" color="green" />
			</div>
		</div>
		<br />

		<p class="count">
			<strong>{{ count }}</strong> potential friends!
		</p>

		<div class="display-users-container">
			<Users :users="users" @add-friend="addFriend" />
		</div>
	</div>
</template>

<script>
import Users from '../components/Users.vue';
import Button from '../components/Button.vue';

export default {
	name: 'HomeView',
	components: {
		Users,
		Button,
	},
	data() {
		return {
			users: [],
			profilePics: [],
			count: 0,
		};
	},
	methods: {
		async getUsers() {
			this.users = [];
			this.getFriendsProfilePic();

			//Loop until 10 users with unique profilePics are set
			for (let i = 0; i < this.num; i++) {
				const res = await fetch('https://randomuser.me/api');
				const { results } = await res.json();

				//Only add the user if their profile picture is not in the profilePics array
				if (!this.profilePics.some((pic) => pic === results[0].picture.large)) {
					this.users.push(results[0]);
				} else {
					i--;
				}
			}

			// Set the count property to the length of the users array
			this.count = this.users.length;
		},
		async addFriend(newFriend) {
			await fetch('http://localhost:5000/friends', {
				method: 'POST',
				headers: {
					'Content-type': 'application/json',
				},
				body: JSON.stringify(newFriend),
			});

			//Remove the user from the user list
			const addedUser = this.users.findIndex(
				(user) => user.picture.large === newFriend.photo
			);

			if (addedUser !== -1) {
				this.users.splice(addedUser, 1);
			}

			this.count = this.users.length;
		},
		async getFriendsProfilePic() {
			const res = await fetch('http://localhost:5000/friends');
			const data = await res.json();

			this.profilePics = data.map((friend) => friend.photo);
		},
	},
	async created() {
		this.getFriendsProfilePic();
	},
};
</script>
