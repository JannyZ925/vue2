// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
import About from "@/pages/About";
import Home from "@/pages/Home";
import News from "@/pages/News";
import Messages from "@/pages/Messages";
import Detail from "@/pages/Detail";

export default new VueRouter({
    routes: [
        {
            path: '/about',
            component: About
        },
        {
            path: '/home',
            component: Home,
            children: [
                {
                    path: 'news',
                    component: News
                },
                {
                    path: 'messages',
                    component: Messages,
                    children: [
                        {
                            name: 'detail',
                            path: 'detail/:id/:context',
                            component: Detail
                        }
                    ]
                }
            ]
        }
    ]
})

