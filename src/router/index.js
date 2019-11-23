import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import AddMare from '@/components/AddMare'
import ViewMare from '@/components/ViewMare'
import EditMare from '@/components/EditMare'
import AddHealthRecord from '@/components/AddHealthRecord'
import ViewHealthRecord from '@/components/ViewHealthRecord'
import EditHealthRecord from '@/components/EditHealthRecord'
import ViewHealthRecord2 from '@/components/ViewHealthRecord2'
import EditHealthRecord2 from '@/components/EditHealthRecord2'
import Login from '@/components/Login'
import Register from '@/components/Register'
import ResetPassword from '@/components/ResetPassword'
import firebase from 'firebase'

Vue.use(Router)

let router = new Router({
  routes: [{
      path: '/',
      name: 'dashboard',
      component: Dashboard,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        requiresGuest: true
      }
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      meta: {
        requiresGuest: true
      }
    },
    {
      path: '/reset',
      name: 'reset',
      component: ResetPassword,
      meta: {
        requiresGuest: true
      }
    },
    {
      path: '/add',
      name: 'add-mare',
      component: AddMare,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/edit/:mare_id',
      name: 'edit-mare',
      component: EditMare,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/:mare_id',
      name: 'view-mare',
      component: ViewMare,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/:mare_id',
      name: 'view-health-record',
      component: ViewHealthRecord,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/edit/:health_id',
      name: 'edit-health-record',
      component: EditHealthRecord,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/:mare_id',
      name: 'view-health-record2',
      component: ViewHealthRecord2,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/edit/:health_id2',
      name: 'edit-health-record2',
      component: EditHealthRecord2,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/:mare_id',
      name: 'add-health-record',
      component: AddHealthRecord,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

// Nav Guards

router.beforeEach((to, from, next) => {
  // Check for requiredAuth guard
  if (to.matched.some(record => record.meta.requiresAuth)) {
    //Check if NOT logged in
    if (!firebase.auth().currentUser) {
      //Go to login
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      })
    } else {
      //Proceed to route
      next()
    }
  } else if (record => record.meta.requiresGuest) {
    //Check if logged in
    if (firebase.auth().currentUser) {
      //Go to login
      next({
        path: '/',
        query: {
          redirect: to.fullPath
        }
      })
    } else {
      //Proceed to route
      next()
    }
  } else {
    //Proceed to route
    next()
  }
})

export default router
