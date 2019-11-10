import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import AddMare from '@/components/AddMare'
import ViewMare from '@/components/ViewMare'
import EditMare from '@/components/EditMare'
import AddHealthRecord from '@/components/AddHealthRecord'
import ViewHealthRecord from '@/components/ViewHealthRecord'
import ViewHealthRecord2 from '@/components/ViewHealthRecord2'


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
    },
    {
    path: '/:mare_id',
      name: 'view-health-record',
      component: ViewHealthRecord
    },
    {
      path: '/:mare_id',
        name: 'view-health-record2',
        component: ViewHealthRecord2
      },
    {
      path: '/:mare_id',
      name: 'add-health-record',
      component: AddHealthRecord
    }
    
  ]
})
