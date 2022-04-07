import {createWebHistory, createRouter} from 'vue-router'

import home from '@/views/home.vue'
import stock from '@/views/stock.vue'
import log from '@/views/log.vue'


const history = createWebHistory();

export default createRouter({
    history,
    routes: [
        {
            path:"/home",
            name:"home",
            component:home
        },
        {
            path:"/stock",
            name:"stock",
            component:stock
        },
        {
            path:"/",
            name:"log",
            component:log
        },


       


    ]



})