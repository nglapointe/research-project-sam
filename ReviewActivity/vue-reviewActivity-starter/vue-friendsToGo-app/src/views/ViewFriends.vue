<template>
	<!--Do what is needed to display to correct message-->
	<p class="no-count">You currently have no friends!</p>
	<p class="count">
		You have <strong></strong> friends! You have access to their contact
		information, start convertions!
	</p>

	<!--Add the Friends Component-->
</template>

<script>
/* TODO: Import the Friends Component */

export default {
	/*
		TODO:
		Add the nessacary object options to finish the component properties.
		This will tie in when creating the methods below.
	*/
	methods: {
		async getFriends() {
			/*
				TODO:
				Do what is needed to fetch all the friends inside the db.json file using the getFriends().
				The results should be placed inside an firends array. You will need this to send it over to the Friends
				Component to display each friend.

				Hint: Use fetch()
			*/
		},
		async deleteFriend(id, firstName, lastName) {
			/*
				TODO:
				This will be called when the user wants to delete a friend from the friends list. Handle
				the events to actully activate the deleteFriend(id). There much have a confirmation alert
				that shows up when trying to delete. Make sure it displayed like the video.

				Hint: You can use an if statement to check the user response from the alert() or confirm()
			*/
		},
	},
	async created() {
		/*
			TODO:
			When the page renders, all the friends should be displayed. Use the getFriends() to do this
			DO NOT CODE THIS HERE.
		*/
	},
};
</script>
