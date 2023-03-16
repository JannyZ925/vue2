// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
import About from "@/pages/About";
import Home from "@/pages/Home";
import News from "@/pages/News";
import Messages from "@/pages/Messages";
import Detail from "@/pages/Detail";

const router = new VueRouter({
    routes: [
        {
            path: '/about',
            component: About,
            meta: {title: '关于'}
        },
        {
            path: '/home',
            component: Home,
            meta: {title: '主页'},
            children: [
                {
                    name: 'news',
                    path: 'news',
                    component: News,
                    // isAuth设置是否需要权限判断
                    meta: {isAuth: true, title: '新闻'}
                },
                {
                    name: 'messages',
                    path: 'messages',
                    component: Messages,
                    // isAuth设置是否需要权限判断
                    meta: {isAuth: true, title: '消息'},
                    children: [
                        {
                            name: 'detail',
                            path: 'detail/:id/:context',
                            component: Detail,
                            meta: {title: '详情'},
                            props($route){
                                return{
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


// 全局前置路由守卫---初始化的时候 及 每次路由切换之前被调用
router.beforeEach((to, from, next)=>{
    console.log('前置路由守卫',to,from,next)
    if(to.meta.isAuth){
        if(localStorage.getItem('school') === 'atguigu2'){
            next()
        }else alert('您无权查看')
    }else {
        next()
    }
})


// 全局后置路由守卫---初始化的时候 及 每次路由切换之后被调用
router.afterEach((to, from)=>{
    console.log('后置路由守卫',to,from)
    document.title = to.meta.title || 'chapter02'
})
export default router

