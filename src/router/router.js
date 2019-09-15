import Home from '../views/Home.vue'
/* route 代表当前的路由对象 */
export default [{
  path: '/',
  alias: '/home_page',
  name: 'home',
  component: Home,
  props: route => ({
    food: route.query.food
  })
},
{
  path: '/login',
  name: 'login',
  component: () => import('@/views/Login.vue')
},
{
  path: '/about',
  name: 'about',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  props: {
    food: 'banana'
  }
},
{
  path: '/argu/:name',
  name: 'argu',
  component: () => import('@/views/Argu.vue'),
  props: true
},
{
  path: '/parent',
  name: 'parent',
  component: () => import('@/views/Parent.vue'),
  children: [
    {
      path: 'child',
      component: () => import('@/views/Child.vue')
    }
  ]
},
{
  path: '/named_view',
  name: 'named_view',
  components: {
    default: () => import('@/views/Child.vue'),
    email: () => import('@/views/Email.vue'),
    tel: () => import('@/views/Tel.vue')
  }
},
{
  path: '/main',
  redirect: '/'
},
{
  path: '*',
  component: () => import('@/views/404_error.vue')
}
]
