import { Http } from '@/typings/utils/http'
import axios from 'axios'

import NProgress from 'nprogress'
import qs from 'qs'

// 设置请求头和请求路径
axios.defaults.baseURL = '/api'
axios.defaults.timeout = 10000
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'
axios.interceptors.request.use(
  (config) => {
    const token = window.sessionStorage.getItem('token')
    if (token) {
      config.headers.token = token
    }
    return config
  },
  (error) => {
    return error
  }
)
// 响应拦截
axios.interceptors.response.use((res) => {
  if (res.data.code === 111) {
    // token过期操作
  }
  return res
})
const uploadRequest = axios.create({
  baseURL: '/api',
  timeout: 10000,
  headers: { 'Content-Type': 'multipart/form-data' }
})
// 设置下载请求拦截
uploadRequest.interceptors.request.use(
  (config: any) => {
    const token = window.sessionStorage.getItem('token')
    if (token) {
      config.headers.token = token
    }
    return config
  },
  (error) => {
    return error
  }
)

const http: Http = {
  get(url, params) {
    return new Promise((resolve, reject) => {
      NProgress.start()
      axios
        .get(url, { params: params })
        .then((res) => {
          NProgress.done()
          resolve(res.data)
        })
        .catch((err) => {
          NProgress.done()
          reject(err.data)
        })
    })
  },
  post(url, params) {
    return new Promise((resolve, reject) => {
      NProgress.start()
      axios
        .post(url, JSON.stringify(params))
        .then((res) => {
          NProgress.done()
          resolve(res.data)
        })
        .catch((err) => {
          NProgress.done()
          reject(err.data)
        })
    })
  },
  put(url, params, content = ['json', 'json']) {
    //json格式json传参类型
    return new Promise((resolve, reject) => {
      NProgress.start()
      axios
        .put(url, content[0] == 'json' ? JSON.stringify(params) : qs.stringify(params), {
          headers: {
            'Content-Type': content[1] == 'json' ? 'application/json' : 'application/x-www-form-urlencoded'
          }
        })
        .then((res) => {
          NProgress.done()
          resolve(res.data)
        })
        .catch((err) => {
          NProgress.done()
          reject(err.data)
        })
    })
  },
  upload(url, file) {
    return new Promise((resolve, reject) => {
      NProgress.start()
      uploadRequest
        .post(url, file)
        .then((res) => {
          NProgress.done()
          resolve(res.data)
        })
        .catch((err) => {
          NProgress.done()
          reject(err.data)
        })
    })
  },
  delete(url) {
    return new Promise((resolve, reject) => {
      NProgress.start()
      axios
        .delete(url)
        .then((res) => {
          NProgress.done()
          resolve(res.data)
        })
        .catch((err) => {
          NProgress.done()
          reject(err.data)
        })
    })
  },
  download(url) {
    const iframe = document.createElement('iframe')
    iframe.style.display = 'none'
    iframe.src = url
    iframe.onload = function () {
      document.body.removeChild(iframe)
    }
    document.body.appendChild(iframe)
  },
  install(app) {
    app.config.globalProperties['http'] = this
  }
}
export default http
