import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import CV from '@/components/CV'
import Projects from '@/components/Projects'
import Pubs from '@/components/Pubs'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/cv',
      name: 'CV',
      component: CV
    },
    {
      path: '/projects',
      name: 'Projects',
      component: Projects
    },
    {
      path: '/pubs',
      name: 'Pubs',
      component: Pubs
    },
  ]
})
