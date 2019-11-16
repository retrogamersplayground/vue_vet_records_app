
<template>
    <div id="health_record">
        
        <ul class="collection with-header">
            <li class="collection-header">
                <h3>Health Records</h3>
            </li>
            <li v-for="horse_health in horse_health" v-bind:key="horse_health.id" class="collection-item">
                
                <h5>Mare ID#: {{horse_health.mare_id}}</h5>
                <h5>Mare Name: {{horse_health.name}}</h5>
                <ul>
                    <li>Mare ID#: {{horse_health.mare_id}}</li>
                    <li>Date: {{horse_health.hr_date}}</li>
                    <li>Deworm: {{horse_health.deworm}}</li>
                    <li>Vaccination: {{horse_health.vaccination}}</li>
                    <li>Comments: {{horse_health.hr_comments}}</li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>

import db from './firebaseInit'
export default {
    name: 'view-health-record',
    data () {
        return {
            horse_health: []
        }
    },
    created () {
        
        db.collection('horse_health').where('mare_id', '==', to.params.mare_id).orderBy('mare_id').get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
                
                const data = {
                    'id': doc.id,
                    'mare_id': doc.data().mare_id,
                    'name': doc.data().name,
                    'hr_date': doc.data().hr_date,
                    'deworm': doc.data().deworm,
                    'vaccination': doc.data().vaccination,
                    'hr_comments': doc.data().hr_comments

                }
                this.horse_health.push(data)
            })
        })
    },
    methods: {
      
    }       
    
}
</script>