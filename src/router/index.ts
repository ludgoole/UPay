import { createRouter, createWebHashHistory } from 'vue-router'
import { Toast } from 'vant'
import { useLocalStore } from '@/stores/local'
import routes from '~pages'

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  const { token, userInfo } = useLocalStore()
  const user = (userInfo || {}) as { role: string }
  const roles = to.meta?.roles as string[]
  const isLoginPage = to.path === '/login' || to.path === '/sign'
  const hasToken = !!token
  const needRoles = !!roles
  const hasRole = roles && roles.includes(user.role)
  const RouterView = document.querySelector('.RouterView')

  RouterView && RouterView.scrollTo(0, 0)

  if (!isLoginPage && !hasToken) {
    Toast({ message: 'NO LOGIN' })
    next('/login')
  }
  else if (!isLoginPage && hasToken && needRoles && !hasRole) {
    Toast({ message: 'NO PERMISSION' })
    next('/404')
  }
  else {
    next()
  }
})
