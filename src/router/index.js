import {createWebHashHistory, createRouter} from "vue-router"
import Home from "@/pages/Home.vue"
import NotFound from "@/pages/404.vue"
import Find from "@/pages/Find.vue"

const routes = [
	{
		path: "/",
		name: "Home",
		component: Find,
	},
	{
		path: "/find",
		name: "find",
		component: Home,
	},
	{
		path: "/:pathMatch(.*)*",
		name: "notFound",
		component: NotFound,
	},
]

const router = createRouter({
	history: createWebHashHistory(),
	routes,
})

export default router
