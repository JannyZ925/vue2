// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
import About from "@/pages/About";
import Home from "@/pages/Home";
import News from "@/pages/News";
import Messages from "@/pages/Messages";
import Detail from "@/pages/Detail";


// 所有路由守卫执行顺序：全局前置路由守卫--独享路由守卫--组件内路由守卫beforeRouteEnter--全局后置路由守卫--组件内路由守卫beforeRouteLeave
const router = new VueRouter({
    routes: [
        {
            path: '/about',
            component: About,
            beforeEnter: (to, from, next) => {
                console.log('独享路由守卫')
                next()
            }
        },
        {
            path: '/home',
            component: Home,
            children: [
                {
                    name: 'news',
                    path: 'news',
                    component: News
                },
                {
                    name: 'messages',
                    path: 'messages',
                    component: Messages,
                    children: [
                        {
                            name: 'detail',
                            path: 'detail/:id/:context',
                            component: Detail,
                            props($route) {
                                return {
                                    id: $route.params.id,
                                    context: $route.params.context
                                }
                            }
                        }
                    ]
                }
            ]
        }
    ]
})

router.beforeEach((to, from, next)=>{
    console.log('全局前置路由守卫')
    next()
})

router.afterEach((to, from) => {
    console.log('全局后置路由守卫')
})
export default router

