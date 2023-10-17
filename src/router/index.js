import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'

//url
const router = createRouter({
	history: createWebHistory(),
	routes: [

		{
			path: '/about',
			component: About
		},
		{
			path: '/:pathMatch(.*)',
			component: Home
		}, 
		{
			path: '/',
			name: 'Home',
			component: Home,
		},
	],
})


export default router