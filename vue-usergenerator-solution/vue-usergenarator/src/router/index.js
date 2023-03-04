import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home';
import Friend from '../views/ViewFriends';

const routes = [
	{
		path: '/',
		name: 'HomeView',
		component: Home,
	},
	{
		path: '/friends',
		name: 'FriendView',
		component: Friend,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
