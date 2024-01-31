import {createRouter, createWebHashHistory} from "vue-router"
import About from "../pages/about.vue"
import Home from "../pages/home.vue"

const router = createRouter({
       routes:[
              {
                     name:"关于",
                     path:"/about",
                     component:About
              },
              {
                     name:"首页",
                     path:"/",
                     component:Home
              },
              // 重定向示例
              {
                     path: '/home',
                     redirect: '/',
              },
       ],
       history:createWebHashHistory()
})

export default router