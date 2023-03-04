<template>
	<div class="users-container">
		<div :key="friend.id" v-for="friend in friends">
			<Friend :friend="friend" />
		</div>
	</div>
</template>

<script>
import Friend from './Friend.vue';

export default {
	name: 'FriendsComp',
	props: {
		friends: Array,
	},
	components: {
		Friend,
	},
	methods: {
		handleAddFriend(newFriend) {
			this.$emit('add-friend', newFriend);
		},
	},
};
</script>
