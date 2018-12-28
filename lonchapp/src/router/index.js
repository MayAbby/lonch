import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '../components/HomePage'
import Header from  '../components/header/header';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path:'header',
      name:'header',
      component: Header
    }
  ]
})
