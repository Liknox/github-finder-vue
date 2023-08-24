import { createWebHashHistory, createRouter } from "vue-router"
import NotFound from "@/pages/404.vue"
import Find from "@/pages/Find.vue"

const routes = [
	{
		path: "/",
		name: "Home",
		component: Find,
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
