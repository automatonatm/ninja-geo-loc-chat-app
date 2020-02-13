import Vue from 'vue'
import Router from 'vue-router'
import GMap from '../components/home/GMap'
import Signin from "../components/auth/Signin";
import Login from "../components/auth/Login";

Vue.use(Router)

export default new Router({
  routes: [
   /* {
      path: '/',
      name: 'Home',
      component: Home
    },*/

    {
      path: '/',
      name: 'GMap',
      component: GMap
    },

    {
      path: '/signup',
      name: 'Signin',
      component: Signin
    },

    {
      path: '/login',
      name: 'login',
      component: Login
    },

  ],
  mode: 'history'
})
