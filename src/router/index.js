import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV)
// in development env not use Lazy Loading,because Lazy Loading too many pages will cause webpack hot update too slow.so only in production use Lazy Loading

/* layout */
import Layout from '../views/layout/Layout'

import User from '@/views/user/index'

Vue.use(Router)

/**
* icon : the icon show in the sidebar
* hidden : if `hidden:true` will not show in the sidebar
* redirect : if `redirect:noredirect` will not redirct in the levelbar
* noDropdown : if `noDropdown:true` will not has submenu in the sidebar
* meta : `{ role: ['admin'] }`  will control the page role
**/
export const constantRouterMap = [
  { path: '/login', component: _import('login/index'), hidden: true },
  { path: '/404', component: _import('404'), hidden: true },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: 'Dashboard',
    hidden: true,
    children: [{ path: 'dashboard', component: _import('dashboard/index') }]
  },
  {
    path: '/user',
    component: Layout,
    redirect: '/user/index',
    icon: 'zujian',
    noDropdown: true,
    children: [
      { path: 'index', name: '用户管理', icon: 'zonghe', component: User }
    ]
  },
  {
    path: '/label',
    component: Layout,
    redirect: 'noredirect',
    icon: 'zujian',
    noDropdown: true,
    children: [
      { path: 'index', name: '标签管理', icon: 'zonghe', component: _import('label/index') }
    ]
  },
  {
    path: '/role',
    component: Layout,
    redirect: 'noredirect',
    icon: 'zujian',
    noDropdown: true,
    children: [
      { path: 'index', name: '角色管理', icon: 'zonghe', component: _import('role/index') }
    ]
  },
  {
    path: '/menu',
    component: Layout,
    redirect: 'noredirect',
    icon: 'zujian',
    noDropdown: true,
    children: [
      { path: 'index', name: '菜单管理', icon: 'zonghe', component: _import('menu/index') }
    ]
  },
  {
    path: '/action',
    component: Layout,
    redirect: 'noredirect',
    icon: 'zujian',
    noDropdown: true,
    children: [
      { path: 'index', name: '功能管理', icon: 'zonghe', component: _import('action/index') }
    ]
  },
  {
    path: '/question',
    component: Layout,
    redirect: 'noredirect',
    icon: 'zujian',
    noDropdown: true,
    children: [
      { path: 'index', name: '题目管理', icon: 'zonghe', component: _import('question/index') }
    ]
  },
  {
    path: '/exam',
    component: Layout,
    redirect: 'noredirect',
    icon: 'zujian',
    noDropdown: true,
    children: [
      { path: 'index', name: '考试管理', icon: 'zonghe', component: _import('exam/index') }
    ]
  },
  {
    path: '/paper',
    component: Layout,
    redirect: 'noredirect',
    icon: 'zujian',
    noDropdown: true,
    children: [
      { path: 'index', name: '试卷管理', icon: 'zonghe', component: _import('paper/index') }
    ]
  },
  {
    path: '/record',
    component: Layout,
    redirect: 'noredirect',
    icon: 'zujian',
    noDropdown: true,
    children: [
      { path: 'index', name: '答题记录', icon: 'zonghe', component: _import('record/index') }
    ]
  },
  {
    path: '/group',
    component: Layout,
    redirect: 'noredirect',
    icon: 'zujian',
    noDropdown: true,
    children: [
      { path: 'index', name: '群组管理', icon: 'zonghe', component: _import('group/index') }
    ]
  },
  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

