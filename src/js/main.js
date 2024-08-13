import { createApp } from 'vue'
import '../style/style.css'
import App from '../App.vue'
import router from '../router'

// Register SVG icons
import 'virtual:svg-icons-register'

const app = createApp(App)
app.use(router);
app.mount('#app');
