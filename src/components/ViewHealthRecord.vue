<template>
    <div id="view-health-record">
        
        
        <ul class="collection with-header">
            <li class="collection-header">
                Mare Names: <h4>{{name}}</h4>
            </li>
            <li v-for="mare in mares" v-bind:key="mare.id">
                <h5>Mare ID#: {{mare_id}}</h5>
                <h5>Date: {{hr_date}}</h5>
                <h5>Deworm: {{deworm}}</h5>
                <h5>Vaccination: {{vaccination}}</h5>
                <h5>Comments: {{hr_comments}}</h5>
            </li>
        </ul>
        <button @click="deleteHealthRecord" class="btn-floating btn-large red"><i class="fa fa-times"></i></button>
        <div class="fixed-action-btn">
            <router-link to="/" class="btn-floating btn-large grey"><i class="fa fa-arrow-left"></i></router-link>
       </div>
    </div>
</template>

<script>
import db from './firebaseInit'
export default {
    name: 'view-health-record',
    data () {
        return {
            mare_id: null,
            name: null,
            hr_date: null,
            deworm: null,
            vaccination: null,
            hr_comments: null
        }
    },
    beforeRouteEnter(to, from, next) {
        db.collection('horse_health').where('mare_id', '==', to.params.mare_id).get()
        .then(querySnapshot => {
            querySnapshot.forEach(doc => {
                next(vm => {
                    vm.mare_id = doc.data().mare_id
                    vm.name = doc.data().name
                    vm.hr_date = doc.data().hr_date
                    vm.deworm = doc.data().deworm
                    vm.vaccination = doc.data().vaccination
                    vm.hr_comments = doc.data().hr_comments
                })
            })
        })
    },
    watch: {
        '$route': 'fetchData'
    },
    methods: {
        fetchData () {
            db.collection('horse_health').where('mare_id', '==', this.$route.params.mare_id).get()
            .then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    this.mare_id = doc.data().mare_id
                    this.name = doc.data().name
                    this.hr_date = doc.data().hr_date
                    this.deworm = doc.data().deworm
                    this.vaccination = doc.data().vaccination
                    this.hr_comments = doc.data().hr_comments
                })
            })
        },
        deleteHealthRecord () {
            if(confirm('Are you sure?')) {
                db.collection('horse_health').where('mare_id', '==', this.$route.params.mare_id).get()
                .then(querySnapshot => {
                    querySnapshot.forEach(doc => {
                        doc.ref.delete()
                        this.$router.push('/')
                    })
                })
            }
        }
    }
}
</script>