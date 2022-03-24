import {createWebHistory, createRouter} from 'vue-router'

import home from '@/views/home.vue'
import stock from '@/views/stock.vue'

const history = createWebHistory();

export default createRouter({
    history,
    routes: [
        {
            path:"/",
            name:"stock",
            component:stock
        },
        {
            path:"/home",
            name:"home",
            component:home
        }
    ]



})