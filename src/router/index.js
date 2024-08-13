import { createMemoryHistory, createRouter } from "vue-router";

// Pages
import Home from "../views/HomeView.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: Home
    }
]

export default createRouter({
    history: createMemoryHistory(),
    routes
});