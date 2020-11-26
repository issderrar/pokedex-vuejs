import { createRouter, createWebHashHistory } from 'vue-router'

import TeamView from "@/components/views/TeamView";
import HomeView from "@/components/views/HomeView";

const routes = [
    { path: '/', component: HomeView },
    { path: '/team-creation', component: TeamView },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
    linkActiveClass: 'underline font-bold'
})

export default router
