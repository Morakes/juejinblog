import { IRouter } from '@/typings/router';
export const route:IRouter = {
    path:'/home',
    name:'/home',
    meta:{
        label:'主页',
        sort:1,
        showRouterView:true
    },
    component:()=>import('@/views/home/index.vue'),
    children:[
        {
            path:'/home/article',
            name:'home/article',
            meta:{label:'详情页',showRouterView:false},
            component:()=>import('@/views/home/article-detail/index.vue'),
        }
    ]
}