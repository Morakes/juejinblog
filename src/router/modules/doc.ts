import { IRouter } from '@/typings/router'
export const route: IRouter = {
  path: '/doc',
  name: '/doc',
  meta: {
    label: '文档',
    sort: 5
  },
  component: () => import('@/views/doc/index.vue')
}
