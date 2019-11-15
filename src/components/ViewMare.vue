<template>
    <div id="view-mare">
        <ul class="collection with-header">
            <li class="collection-header">
                Mare Name: <h4>{{name}}</h4>
            </li>
            <li class="collection-item">Mare ID#: {{mare_id}}</li>
            <li class="collection-item">Color: {{color}}</li>
            <li class="collection-item">Age: {{age}}</li>
            <li class="collection-item">Description: {{description}}</li>
            <li class="collection-item">Arrival: {{arrival}}</li>
            <li class="collection-item">Depart: {{depart}}</li>
            <li class="collection-item">Owner: {{owner}}</li>
            <li class="collection-item">Agent: {{agent}}</li>
            <li class="collection-item">Agent's Phone Number: {{agent_phone}}</li>
            <li class="collection-item">Address: {{address}}</li>
            <li class="collection-item">Home Phone: {{home_phone}}</li>
            <li class="collection-item">Work Phone: {{work_phone}}</li>
            <li class="collection-item">Fax: {{fax}}</li>
            <li class="collection-item">Cell: {{cell}}</li>
            <li class="collection-item">Email: {{email}}</li>
            <li class="collection-item">Insured: {{insured}}</li>
            <li class="collection-item">Tentative Foaling Date: {{tentative_foal_date}}</li>
            <li class="collection-item">In Foal To: {{in_foal_to}}</li>
            <li class="collection-item">Stallion: {{stallion}}</li>
            <li class="collection-item">Stallion Contact Name: {{stallion_contact}}</li>
            <li class="collection-item">Stallion Phone Number: {{stallion_phone}}</li>
            <li class="collection-item">Comments(Previous Repro Problems, Previous Health Problems): {{comments}}</li>
            <li class="collection-item">Uterine Cysts: {{uterine_cysts}}</li>
            

        </ul>
        
        <button @click="deleteMare" class="btn-floating btn-large red"><i class="fa fa-times"></i></button>
        
        <div class="fixed-action-btn">
            <router-link to="/" class="btn-floating btn-large grey"><i class="fa fa-arrow-left"></i></router-link>
           
            <router-link v-bind:to="{name: 'edit-mare', params: {mare_id: mare_id}}" class="btn-floating btn-large red">
            <i class="fa fa-pencil"></i>
            </router-link>
       </div>
    </div>
</template>

<script>
import db from './firebaseInit'
export default {
    name: 'view-mare',
    data () {
        return {
            mare_id: null,
            name: null,
            color: null,
            age: null,
            description: null,
            arrival: null,
            depart: null,
            owner: null,
            agent: null,
            agent_phone: null,
            address: null,
            home_phone: null,
            work_phone: null,
            fax: null,
            cell: null,
            email: null,
            insured: null,
            tentative_foal_date: null,
            in_foal_to: null,
            stallion: null,
            stallion_contact: null,
            stallion_phone: null,
            comments: null,
            uterine_cysts: null,
        }
    },
    beforeRouteEnter(to, from, next) {
        db.collection('mares').where('mare_id', '==', to.params.mare_id).get()
        .then(querySnapshot => {
            querySnapshot.forEach(doc => {
                next(vm => {
                    vm.mare_id = doc.data().mare_id
                    vm.name = doc.data().name
                    vm.color = doc.data().color
                    vm.age = doc.data().age
                    vm.description = doc.data().description
                    vm.arrival = doc.data().arrival
                    vm.depart = doc.data().depart
                    vm.owner = doc.data().owner
                    vm.agent = doc.data().agent
                    vm.agent_phone = doc.data().agent_phone
                    vm.address = doc.data().address
                    vm.home_phone = doc.data().home_phone
                    vm.work_phone = doc.data().work_phone
                    vm.fax = doc.data().fax
                    vm.cell = doc.data().cell
                    vm.email = doc.data().email
                    vm.insured = doc.data().insured
                    vm.tentative_foal_date = doc.data().tentative_foal_date
                    vm.in_foal_to = doc.data().in_foal_to
                    vm.stallion = doc.data().stallion
                    vm.stallion_contact = doc.data().stallion_contact
                    vm.stallion_phone = doc.data().stallion_phone
                    vm.comments = doc.data().comments
                    vm.uterine_cysts = doc.data().uterine_cysts
                })
            })
        })
    },
    watch: {
        '$route': 'fetchData'
    },
    methods: {
        fetchData () {
            db.collection('mares').where('mare_id', '==', this.$route.params.mare_id).get()
            .then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    this.mare_id = doc.data().mare_id
                    this.name = doc.data().name
                    this.color = doc.data().color
                    this.age = doc.data().age
                    this.description = doc.data().description
                    this.arrival = doc.data().arrival
                    this.depart = doc.data().depart
                    this.owner = doc.data().owner
                    this.agent = doc.data().agent
                    this.agent_phone = doc.data().agent_phone
                    this.address = doc.data().address
                    this.home_phone = doc.data().home_phone
                    this.work_phone = doc.data().work_phone
                    this.fax = doc.data().fax
                    this.cell = doc.data().cell
                    this.email = doc.data().email
                    this.insured = doc.data().insured
                    this.tentative_foal_date = doc.data().tentative_foal_date
                    this.in_foal_to = doc.data().in_foal_to
                    this.stallion = doc.data().stallion
                    this.stallion_contact = doc.data().stallion_contact
                    this.stallion_phone = doc.data().stallion_phone
                    this.comments = doc.data().comments
                    this.uterine_cysts = doc.data().uterine_cysts
                })
            })
        },
        deleteMare () {
            if(confirm('Are you sure?')) {
                db.collection('mares').where('mare_id', '==', this.$route.params.mare_id).get()
                .then(querySnapshot => {
                    querySnapshot.forEach(doc => {
                        doc.ref.delete()
                        this.$router.push('/')
                    })
                }),
                db.collection('horse_health').where('mare_id', '==', this.$route.params.mare_id).get()
                .then(querySnapshot => {
                    querySnapshot.forEach(doc => {
                        doc.ref.delete()
                        this.$router.push('/')
                    })
                }),
                db.collection('horse_health2').where('mare_id', '==', this.$route.params.mare_id).get()
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