import { createApp } from "vue";
 import "bootstrap/dist/css/bootstrap.min.css";
 import "@fortawesome/fontawesome-free/css/all.min.css";
import './assets/main.css'

import App from './App.vue'

createApp(App).mount('#app')
import router from "./router";
createApp(App).use(router).mount("#app")