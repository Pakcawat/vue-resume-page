import { createRouter, createWebHashHistory } from 'vue-router'
import About from '../views/About.vue'
import Education from '../views/Education.vue'
import Skills from '../views/Skills.vue'
import Hobbies from '../views/Hobbies.vue'
import Work_Experience from '../views/Work_Experience.vue'
//url
const router = createRouter({
	history: createWebHashHistory(),
	routes: [

		{
			path: '/:pathMatch(.*)',
			component: About
		},
		{
			path: '/',
			name: 'About',
			component: About,
		},
		{
			path: '/education',
			name: 'Education',
			component: Education,
		}, 
		{
			path: '/skills',
			name: 'Skills',
			component: Skills,
		},
		{
			path: '/work_experience',
			name: 'Work_Experience',
			component: Work_Experience,
		},
		{
			path: '/hobbies',
			name: 'Hobbies',
			component: Hobbies,
		},
	],
})


export default router