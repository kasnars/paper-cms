import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'
import { getUserLoginStatus, getNowUserPermission } from '@/tools/localDataTools'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    name:'login',
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '้้ขๅ่กจ', icon: 'dashboard',requireLogin:true },
        hidden: true,
    },
    {
      path: '/:id',
      name: 'dashboardDetail',
      component: () => import('@/views/dashboard/detail'),
      hidden: true,
      meta: { title: '้้ข่ฏฆๆ', icon: 'form',requireLogin:true }
    }
  ]
  },

  {
    path: '/userManage',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'userManage',
        component: () => import('@/views/userManage/index'),
        meta: { title: '็จๆท็ฎก็', icon: 'form',requireLogin:true },
        hidden: getUserLoginStatus() && getNowUserPermission(1)
      },
      {
        path: 'me',
        name: 'me',
        component: () => import('@/views/userManage/me'),
        hidden: true,
        meta: { title: 'ไธชไบบ่ตๆ', icon: 'form',requireLogin:true }
      }
    ]
  },

  {
    path: '/subjectManage',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'subjectManage',
        component: () => import('@/views/subjectManage/index'),
        meta: { title: '่ฏพ็จ็ฎก็', icon: 'form',requireLogin:true }
      }
    ]
  },

  {
    path: '/chaptersManage',
    component: Layout,
    // name: 'chaptersManage',
    // component: () => import('@/views/chaptersManage/index'),
    // meta: { title: '็ซ?่็ฎก็', icon: 'form', requireLogin: true }
    children: [
      {
        path: ':name',
        name: 'chaptersManage',
        component: () => import('@/views/chaptersManage/index'),
        meta: { title: '็ซ?่็ฎก็', icon: 'form', requireLogin: true },
        hidden: true,
      }
    ]
  },

  {
    path: '/knowledgeManage',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'knowledgeManage',
        component: () => import('@/views/knowledgeManage/index'),
        meta: { title: '็ฅ่ฏ็น็ฎก็', icon: 'form', requireLogin: true }
      }
    ]
  },

  {
    path: '/questionManage',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'questionManage',
        component: () => import('@/views/questionManage/index'),
        meta: { title: '้ขๅบ็ฎก็', icon: 'form',requireLogin:true },
        // hidden: getNowUserPermission(3)
      },
      {
        path: 'detail/:id',
        name: 'questionManageDetail',
        component: () => import('@/views/questionManage/detail'),
        hidden: true,
        meta: { title: '้ข็ฎ่ฏฆๆ', icon: 'form',requireLogin:true }
      }
    ]
  },

  {
    path: '/paper',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'paper',
        component: () => import('@/views/paper/index'),
        meta: { title: '่ฏๅทๅนณๅฐ', icon: 'form',requireLogin:true }
      }
    ]
  },

  {
    path: '/paper',
    component: Layout,
    children: [
      {
        path: 'index1',
        name: 'paper',
        component: () => import('@/views/paper/index'),
        meta: { title: 'ๆ็ปฉ็ฎก็', icon: 'form', requireLogin: true }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}
router.beforeEach((to,from,next) => {
  if(to.meta.requireLogin){
    if(getUserLoginStatus()){
      next()
    } else {
      next({name:'login'})
    }
  } else{
    next()
  }
})

export default router
