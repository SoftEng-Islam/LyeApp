import { createApp } from "vue";

import "./index.css";
import "./style.css";
import App from "./App.vue";
import "./samples/node-api";
import "animate.css";

createApp(App,)
	.mount("#app")
	.$nextTick(() => {
		postMessage({ payload: "removeLoading" }, "*");
	});
