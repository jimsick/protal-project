// 引用 vue 没什么要说的
import Vue from 'vue'
// 入口文件为 src/App.vue 文件 所以要引用
import App from './App.vue'
// 引用路由配置文件
import routes from './config/routes'
// 引用API文件
import api from './config/api'
// 引用路由
import VueRouter from 'vue-router'
// 引入公共样式方法
// import '@/assets/css/reset.css'
// 光引用不成，还得使用
Vue.use(VueRouter)

// 6.将API方法绑定到全局
Vue.prototype.$api = api
// 使用配置文件规则
const router = new VueRouter({
    routes
})
// 将API方法绑定到全局
Vue.prototype.$api = api

// 引用ElementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

// 引入本地存储
import store from 'store'
Vue.prototype.$store = store

new Vue({
    router,
    el: '#app',
    render: (h) => h(App)
})
