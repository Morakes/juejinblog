import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router/index'
import { store } from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import locale from 'element-plus/lib/locale/lang/zh-cn'
import 'font-awesome/css/font-awesome.min.css'
const app = createApp(App)
app.use(router).use(ElementPlus, { locale }).use(store).mount('#app')
