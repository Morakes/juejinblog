import type { App } from 'vue'
declare interface Http {
  get(url: string, params: unknow):Promise<ResultType>
  post(url: string, params: unknow):Promise<ResultType>
  put(url: string, params: unknow, content?: Array<string>): Promise<ResultType>
  upload(url: string, params: unknow):Promise<ResultType>
  delete(url: string):Promise<ResultType>
  download(url: string): void
  install(app: App): void
}
