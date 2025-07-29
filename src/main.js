import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import VueAxios from "vue-axios"
import axios from "axios"
import { createRouter, createWebHashHistory } from "vue-router"
import App from './App.vue'

import Demo1 from "./components/MyDemo1.vue"
import Demo2 from "./components/MyDemo2.vue"
import User from "./components/UserName.vue"
import Home from "./components/HomePage.vue"

const app = createApp(App)
const routes = [
	{ path: "/", component: Home},
	{ path: "/user/:username/:id", component: User},
	{ path: "/demo1", component: Demo1 },
	{ path: "/demo2", component: Demo2 }
]
const router = createRouter({
	history: createWebHashHistory(),
	routes,
})
app.use(router)
app.use(ElementPlus,VueAxios,axios)
app.mount('#app')
