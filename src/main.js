import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'

import HomeComp from './components/HomeComp.vue'
import RegComp from './components/RegComp.vue'
import ChatComp from './components/ChatComp.vue'
import FoundComp from './components/FoundComp.vue'


const routes =[
    {
        path: '/',
        name: 'Home',
        component: HomeComp
    },
    {
        path: '/chat',
        name: 'Chat',
        component: ChatComp
    },
    {
        path: '/register',
        name: 'Register',
        component: RegComp
    },
    {
        path: '/:pathMatch(.*)*',
        component: FoundComp
    }
];

const router = createRouter(
    {
        history: createWebHistory(),
        routes
    }
)

const app = createApp(App)
app.use(router)
app.mount('#app')


// createApp(App).mount('#app')