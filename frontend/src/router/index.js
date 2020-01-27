import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

//Study.vue 라우터 설정. 신동혜
import Study from '../views/Study.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'home',
		component: Home
	},
	{
		path: '/about',
		name: 'about',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
	},
	
	//Study.vue 라우터 설정. 신동혜
	//향후 개발 시에는 주제영역 별 라우터 폴더 및 라운팅 파일 관리가 필요.
	{
		path: '/study',
		name: '/study',
		component: Study
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
