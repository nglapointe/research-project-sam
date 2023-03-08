<template>
	<div>
		<div class="input-container">
			<div class="get-user-input">
				<!--Do what is needed to bind the input value-->
				<input type="number" max="15" min="0" />
				<Button @click="getUsers" text="Find new friends!" color="green" />
			</div>
		</div>
		<br />

		<!--Do what is needed to display the correct message, video for reference-->
		<div>
			<p class="count"><strong></strong> potential friends!</p>

			<p class="error"></p>

			<p class="count">Enter a number of friends to want to fecth!</p>
		</div>

		<div class="display-users-container">
			<!--Add the Users Component here, should pass in a users array and has event to add a friend-->
		</div>
	</div>
</template>

<script>
/* Import the Users and Button Componetn */

export default {
	/*
		TODO:
		Add the nessacary object options to finish this component properties.
		This will tie in when creating the methods below.
	*/
	methods: {
		async getUsers() {
			/*
				TODO: (Will need during Step 2)
				You need to complete the getUsers() method. When this method is called, it should
				return 10 unique users. Since we are using the random user API, there is no unique
				for the generated user. We are going to use their profile picture has their id.

				You should only add a new user to the lists of users if it doesn't already exist in the
				current lists of users or inside the friends json. Use a for loop or while loop.

				Here is the https request needed to fetch the users: 'https://randomuser.me/api'

				VALIDATION:
				Make sure that you are only able to fetch 1 - 15 users. Display erros message like the
				video. You will need to create a errorMsg propertie inside the props object.
			*/
		},
		async addFriend(newFriend) {
			/*
				TODO:
				You need to complete the addFriend(newFriend) method. Do what is needed to add the new friend
				pass in, and insert it to the db.json file.

				Make sure that when adding a new user, the user added was removed from the fetched user list 
				displayed on the browser. Cannot had the same user twice.
			*/
		},
		async getFriendsProfilePic() {
			/*
				TODO:
				This method is pretty straight forward. the getFriendsProfilePic() will retrieve all current friends
				from the db and create a array of profilePics. This will be used to clean the users list later on.
			*/
		},
	},
	async created() {
		/*
			TODO:
			When the page loads the profilePics array should be set with the current friends profilePics.
			Use the specific method for this. DONT CODE THIS INSIDE OF HERE!
		*/
	},
};
</script>
