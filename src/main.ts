import { createApp }   from 'vue'
import { createPinia } from 'pinia'
import VCalendar       from 'v-calendar'
import 'v-calendar/style.css'
import App             from './App.vue'
import router          from './router/index'
import './style.css'

const pinia = createPinia()
const app   = createApp(App)

app.use(pinia)
   .use(router)
   .use(VCalendar, {})
   .mount('#app')
//createApp(App).mount('#app')
 