import { IRouter } from '@/typings/router'
export const route: IRouter = {
  path: '/boiling',
  name: '/boiling',
  meta: {
    label: '沸点',
    sort: 2
  },
  component: () => import('@/views/boiling/index.vue')
}
