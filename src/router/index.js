import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'

//url
const router = createRouter({
	history: createWebHashHistory(),
	routes: [

		{
			path: '/about',
			component: About
		},
		{
			path: '/',
			name: 'Home',
			component: Home,
		},
	],
})


export default router