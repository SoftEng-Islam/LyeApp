import { createPinia } from 'pinia'
import { createApp } from "vue";
import App from "./App.vue";

import "./samples/node-api";
import "./style.css";
import "animate.css";


import PerfectScrollbar from "vue3-perfect-scrollbar";
import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css';

createApp(App,)
	.use(createPinia())
	.use(PerfectScrollbar,{
		watchOptions: true,
		options: {

			suppressScrollX: false
		}
	})
	.mount("#app")
	.$nextTick(() => {
		postMessage({ payload: "removeLoading" }, "*");
	});
