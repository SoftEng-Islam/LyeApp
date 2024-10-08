import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "./App.vue";

import "./style.css";
import "animate.css";

import {PerfectScrollbar, PerfectScrollbarPlugin} from "vue3-perfect-scrollbar";
import "../node_modules/vue3-perfect-scrollbar/dist/style.css";

import VueTippy from "vue-tippy";
import "tippy.js/dist/tippy.css"; // optional for styling

createApp(App)
	.use(createPinia())
	.use(VueTippy, {
		directive: "tippy", // => v-tippy
		component: "tippy", // => <tippy/>
		componentSingleton: "tippy-singleton", // => <tippy-singleton/>,
		defaultProps: {
			placement: "auto-end",
			allowHTML: true
		} // => Global default options * see all props
	})
	.use(PerfectScrollbarPlugin)
	.mount("#app")
	.$nextTick(() => {
		postMessage({ payload: "removeLoading" }, "*");
	});
