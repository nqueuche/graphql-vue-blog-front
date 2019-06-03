import Vue from 'vue'
import Router from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import '../custom.scss'

import AllPosts from '../components/AllPosts'
import SinglePost from '../components/SinglePost'
import TagPosts from '../components/TagPosts'
import AuthorPosts from '../components/AuthorPosts'
import HomePage from '../components/HomePage'

Vue.use(BootstrapVue)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/all',
      name: 'AllPosts',
      component: AllPosts
    },
    {
      path: '/:slug',
      name: 'SinglePost',
      component: SinglePost,
      props: true
  },
  {
    path: '/tag/:slug',
    name: 'TagPosts',
    component: TagPosts,
    props: true
  },
  {
    path: '/author/:slug',
    name: 'AuthorPosts',
    component: AuthorPosts,
    props: true
  }
  ],
  mode: 'history'
})