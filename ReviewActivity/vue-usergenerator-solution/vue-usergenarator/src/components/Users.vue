<template>
	<div class="users-container">
		<div :key="user.id" v-for="user in users">
			<User :user="user" @add-friend="handleAddFriend" />
		</div>
	</div>
</template>

<script>
import User from './User.vue';

export default {
	name: 'UsersComp',
	props: {
		users: Array,
	},
	components: {
		User,
	},
	methods: {
		handleAddFriend(newFriend) {
			this.$emit('add-friend', newFriend);
		},
	},
};
</script>
