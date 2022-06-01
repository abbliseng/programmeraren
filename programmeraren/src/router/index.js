import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import store from '../store/index.js'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/projects',
    name: 'projects',
    component: () => import('../views/ProjectsView.vue')
  },
  {
    path: '/course_material',
    name: 'course_material',
    component: () => import('../views/CourseMaterialView.vue')
  },
  {
    path: '/account',
    name: 'account',
    component: () => import('../views/AccountView.vue'),
    meta: {
      authRequired: true,
    }
  },
  {
    path: '/signin',
    name: 'signin',
    component: () => import('../views/SignInView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  // Handle auth
  console.log("Router:",store.getters.getCurrentUser)
  if (to.matched.some(record => record.meta.authRequired)) {
    if (store.state.currentUser) {
      next()
    } else {
      next({
        name: "signin"
      });
    }
  } else {
    next()
  }
  store.commit("setCurrentPage", to.name)
  // Redirects from the homepage
  if (to.name == "home") next({name: 'projects'})
  else next()


})

export default router
