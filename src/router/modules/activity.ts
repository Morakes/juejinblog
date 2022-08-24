import { IRouter } from '@/typings/router'
export const route: IRouter = {
  path: '/activity',
  name: '/activity',
  meta: {
    label: '活动中心',
    sort: 4
  },
  component: () => import('@/views/activity/index.vue')
}
