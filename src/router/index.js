import { createRouter, createWebHistory } from 'vue-router'
import AllPage from '../views/AllPage.vue'

//url
const router = createRouter({
	history: createWebHistory(),
	routes: [

		{
			path: '/vue-resume-page/',
			component: AllPage
		}
	],
})


export default router