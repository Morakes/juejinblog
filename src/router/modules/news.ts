import { IRouter } from '@/typings/router';
export const route:IRouter = {
    path:'/news',
    name:'/news',
    meta:{
        label:'资讯',
        sort:3,
        showRouterView:true
    },
    component:()=>import('@/views/news/index.vue'),
    children:[
        {
            path:'/news/article',
            name:'news/article',
            meta:{label:'详情页',showRouterView:false},
            component:()=>import('@/views/news/article-details/index.vue'),
        }
    ]
}