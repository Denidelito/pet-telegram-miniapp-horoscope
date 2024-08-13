import { createApp } from 'vue'
import '../style/style.css'
import App from '../App.vue'
import { VueTelegramPlugin } from 'vue-tg'
import router from '../router'
import { createPinia } from 'pinia';


// Register SVG icons
import 'virtual:svg-icons-register'


const app = createApp(App);
const pinia = createPinia();

app.use(router)
    .use(pinia)
    .use(VueTelegramPlugin);
app.mount('#app');
