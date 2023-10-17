import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

//url
const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/vue-resume-page/',
			component: Home
		},
		{
			path: '/vue-resume-page/about',
			component: () => import('../views/About.vue')
		},
	],
})

export default router