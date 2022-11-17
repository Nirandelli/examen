import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue3 } from 'bootstrap-vue-3'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import BootstrapIcon from '@dvuckovic/vue3-bootstrap-icons';
import PerfectScrollbar from 'vue3-perfect-scrollbar'
import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css'

import './assets/style.css'

const app = createApp(App)

app.use(router)
app.use(BootstrapVue3).use(BootstrapIcon).use(PerfectScrollbar)

app.mount('#app')
