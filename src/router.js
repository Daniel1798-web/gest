import {createWebHistoy, createRouter} from 'vue-router'

import home from '@/views/home.vue'

const history = createWebHistoy();

export default createRouter({
    history,
    routes: [
        {
            path:"/",
            name:"home",
            component:home
        }
    ]



})