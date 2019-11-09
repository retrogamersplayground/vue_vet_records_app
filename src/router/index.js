import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import AddMare from '@/components/AddMare'
import ViewMare from '@/components/ViewMare'
import EditMare from '@/components/EditMare'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/add',
      name: 'add-mare',
      component: AddMare
    },
    {
      path: '/edit/:mare_id',
      name: 'edit-mare',
      component: EditMare
    },
    {
      path: '/:mare_id',
      name: 'view-mare',
      component: ViewMare
    }
  ]
})
