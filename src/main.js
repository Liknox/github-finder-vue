import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
// import {createStore} from "vuex"

import "./assets/scss/main.scss"

createApp(App).use(router).mount("#app")
