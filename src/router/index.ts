import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const moduleRouter = Object.values(import.meta.globEager('./modules/*.ts'))
const routerArray: Array<RouteRecordRaw> = []
for (const item in moduleRouter) {
  routerArray.push(moduleRouter[item].route)
}

export const router =createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: '/',
      redirect: '/home',
      component: () => import('@/views/layout/index.vue'),
      children: [...routerArray]
    }
  ]
  // scrollBehavior (to, from, savedPosition) {
  //     if (savedPosition) { // 页面回退至上次访问的位置
  //       return savedPosition
  //     } else { // 页面刷新，滚动条置顶
  //       return {
  //         top: 0,
  //         behavior:'auto'
  //       }
  //     }
  // }
})

// router.beforeEach((to, from) => {

// })
router.afterEach(() => {
  window.scrollTo({
    top: 0,
    behavior: 'auto'
  })
})
