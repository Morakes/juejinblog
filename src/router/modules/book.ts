import { IRouter } from '@/typings/router';
export const route:IRouter = {
    path:'/books',
    name:'/books',
    meta:{
        label:'黄金屋',
        sort:4
    },
    component:()=>import('@/views/books/index.vue')
}