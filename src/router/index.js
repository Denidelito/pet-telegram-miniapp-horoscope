import { createMemoryHistory, createRouter } from "vue-router";

// Pages
import Home from "../views/HomeView.vue";
import HoroscopeDetail from "../views/HoroscopeDetail.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: Home
    },
    {
        path: '/horoscope/:sign',
        name: 'HoroscopeDetail',
        component: HoroscopeDetail,
        props: true,
    },
]

export default createRouter({
    history: createMemoryHistory(),
    routes
});