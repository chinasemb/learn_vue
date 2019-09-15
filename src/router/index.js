import Vue from 'vue'
import Router from 'vue-router'
import routes from './router'
import { setTitle } from '@/lib/util'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes
})

const HAS_LOGINED = true

router.beforeEach(
  // 注册一个全局的前置守卫
  (to, from, next) => {
    to.meta && setTitle(to.meta.title)
    if (to.name !== 'login') {
      if (HAS_LOGINED) next()
      else next({ name: 'login' })
    } else {
      if (HAS_LOGINED) {
        next({ name: 'home' })
      } else next()
    }
  }
)

router.afterEach((to,from)=> {
  // loading = false
})

export default router
