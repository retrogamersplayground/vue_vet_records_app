<template>
    <div id="dashboard">
       <h3>Dashboard</h3> 
        <ul class="collection with-header">
            <li class="collection-header">
                <h4>Mares</h4>
            </li>
            <li v-for="mare in mares" v-bind:key="mare.id" class="collection-item">
                
                {{mare.mare_id}}:{{mare.name}}
               <router-link class="secondary-content" v-bind:to="{name:'view-mare', params: {mare_id: mare.mare_id}}">
                   <i class="fa fa-eye"></i>
               </router-link>
            </li>
            
        </ul>
       <div class="fixed-action-btn">
           <router-link to="/add" class="btn-floating btn-large blue">
            <i class="fa fa-plus"></i>
           </router-link>
       </div>
    </div>
</template>

<script>

import db from './firebaseInit'
export default {
    name: 'dashboard',
    data () {
        return {
            mares: []
        }
    },
    created () {
        db.collection('mares').orderBy('name').get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
                
                const data = {
                    'id': doc.id,
                    'mare_id': doc.data().mare_id,
                    'name': doc.data().name
                }
                this.mares.push(data)
            })
        })
    }
}
</script>