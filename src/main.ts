import { createPinia } from 'pinia'
import { createApp } from "vue";
import App from "./App.vue";

import "./samples/node-api";
import "./style.css";
import "animate.css";


createApp(App,)
	.use(createPinia())
	.mount("#app")
	.$nextTick(() => {
		postMessage({ payload: "removeLoading" }, "*");
	});
