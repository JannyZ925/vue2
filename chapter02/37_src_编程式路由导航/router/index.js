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
                            component: Detail,

                            // props的第一种写法，值为对象，该对象中的所有key-value都会以props的形式传递给Detail组件
                            // props: {id: '004', context: 'message4'}

                            // props的第二种写法，值为布尔值，若布尔值为真，就会把该路由组件收到的所有params参数，以props的形式传递给Detail组件
                            // props: true

                            // props的第三种写法，值为函数
                            props($route){
                                return{
                                    id: $route.params.id,
                                    context: $route.params.context
                                }
                            }
                            /*// 解构赋值写法
                            props({params}){
                                return{
                                    id: params.id,
                                    context: params.context
                                }
                            }*/
                            /*// 解构赋值连续写法
                            props({params:{id,context}}){
                                return{
                                    id,
                                    context
                                }
                            }*/
                        }
                    ]
                }
            ]
        }
    ]
})

