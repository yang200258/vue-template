import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './staticRoute'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    base: '/admin/',
    routes
})

// 路由跳转前验证
// router.beforeEach((to, from, next) => {
//     console.log(to, from, next)
//     next()
// })

export default router