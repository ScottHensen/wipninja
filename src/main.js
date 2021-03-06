import Vue from 'vue'
import VueRouter       from 'vue-router'
import { firebaseApp } from './firebaseApp'

Vue.use(VueRouter)

import App       from './components/App.vue'
import store     from './store'
import Dashboard from './components/Dashboard.vue'
import Signin    from './components/Signin.vue'
import Signup    from './components/Signup.vue'
import Board     from './components/Board.vue'

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/dashboard',     component: Dashboard },
    { path: '/signin',        component: Signin    },
    { path: '/signup',        component: Signup    },
    { path: '/board/:id',     component: Board     }
  ]
})

firebaseApp.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch('signIn', user)
    router.push('/dashboard')
  }
  else {
    router.replace('/signin')
  }
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
