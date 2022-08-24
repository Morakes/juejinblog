import type { Component } from 'vue'

declare interface IRouter {
  path: string
  name: string
  meta: {
    icon?: string
    cache?: Boolean
    label?: string
    sort?: number
    [ket: string]: any
  }
  children?: Array<IRouter>
  component: Component
  [ket: string]: any
}
