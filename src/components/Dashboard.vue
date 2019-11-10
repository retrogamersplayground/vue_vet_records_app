<template>
    <div id="dashboard">
       <h3>Dashboard</h3> 
        <ul class="collection with-header">
            <li class="collection-header">
                <h4>Mares</h4>
            </li>
            <li v-for="mare in mares" v-bind:key="mare.id" class="collection-item">
                
                <h5>Mare ID#: {{mare.mare_id}} <span>Mare Name: {{mare.name}}</span></h5>
                
               <router-link class="secondary-content" v-bind:to="{name:'view-health-record2', params: {mare_id: mare.mare_id}}">
                   <i class="fa fa-h-square"></i>
               </router-link>

                <router-link class="secondary-content" v-bind:to="{name:'view-health-record', params: {mare_id: mare.mare_id}}">
                   <i class="fa fa-eyedropper"></i>
               </router-link>

               <router-link class="secondary-content" v-bind:to="{name:'add-health-record', params: {mare_id: mare.mare_id}}">
                   <i class="fa fa-medkit"></i>
               </router-link>

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
            mares: [],
            horse_health: [],
            horse_health2: []
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
        }),
        db.collection('horse_health').orderBy('name').get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
                
                const data = {
                    'id': doc.id,
                    'mare_id': doc.data().mare_id,
                    'name': doc.data().name
                }
                this.horse_health.push(data)
            })
        }),
        db.collection('horse_health2').orderBy('name').get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
                
                const data = {
                    'id': doc.id,
                    'mare_id': doc.data().mare_id,
                    'name': doc.data().name
                }
                this.horse_health2.push(data)
            })
        })
    }        
    
}
</script>

<style>
span {
    margin-left: 50px;
}
.fa-eye {
    color:#2196F3;
    font-size: 24px;
    margin-right: 20px;
}
.fa-medkit {
    color: rgb(235, 63, 47);
    font-size: 24px;
    margin-right: 20px;
}
.fa-eyedropper {
    font-size: 24px;
    margin-right: 20px;
}
.fa-h-square{
    font-size: 24px;
    margin-right: 20px;
}

</style>