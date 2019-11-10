<template>
    <div id="edit-mare">
       <h3>Edit Mare</h3>
       <div class="row">
        <form @submit.prevent="updateMare" class="col s12">
            <div class="row">
                <div class="input-field col s12">
                    <input disabled type="text" v-model="mare_id" required> 
                </div>
            </div>
            <div class="row">
                <div class="input-field col s12">
                    <input type="text" v-model="name" placeholder="Mare Name" required>   
                </div>
            </div>
            <div class="row">
                <div class="input-field col s12">
                    <input type="text" v-model="color" placeholder="Color" required> 
                </div>
            </div>
            <div class="row">
                <div class="input-field col s12">
                    <input type="text" v-model="age" placeholder="Age" required>
                </div>
            </div>
            <div class="row">
                <div class="input-field col s12">
                    <input type="text" v-model="description" placeholder="Description" required>
                </div>
            </div>
            <div class="row">
                <div class="input-field col s12">
                    <input type="text" v-model="owner" placeholder="Owner" required>
                </div>
            </div>
            <div class="row">
                <div class="input-field col s12">
                    <input type="text" v-model="agent" placeholder="Agent" required>
                </div>
            </div>
            <div class="row">
                <div class="input-field col s12">
                    <input type="text" v-model="agent_phone" placeholder="Agent's Phone Number" required>
                </div>
            </div>
            <div class="row">
                <div class="input-field col s12">
                    <input type="text" v-model="address" placeholder="Address" required>
                </div>
            </div>
            <div class="row">
                <div class="input-field col s12">
                    <input type="text" v-model="home_phone" placeholder="Home Phone" required>
                </div>
            </div>
            <div class="row">
                <div class="input-field col s12">
                    <input type="text" v-model="work_phone" placeholder="Work Phone" required>
                </div>
            </div>
            <div class="row">
                <div class="input-field col s12">
                    <input type="text" v-model="fax" placeholder="Fax" required>
                </div>
            </div>
            <div class="row">
                <div class="input-field col s12">
                    <input type="text" v-model="cell" placeholder="Cell" required>
                </div>
            </div>
            <div class="row">
                <div class="input-field col s12">
                    <input type="email" v-model="email" placeholder="Email" required>
                </div>
            </div>
            <div class="row">
                <div class="input-field col s12">
                    <input type="text" v-model="insured" placeholder="Insured(True/False)" required>
                </div>
            </div>
            <div class="row">
                <div class="input-field col s12">
                    <input type="text" v-model="tentative_foal_date" placeholder="Tentative Foaling Date" required>
                </div>
            </div>
            <div class="row">
                <div class="input-field col s12">
                    <input type="text" v-model="in_foal_to" placeholder="In Foal To" required>
                </div>
            </div>
            <div class="row">
                <div class="input-field col s12">
                    <input type="text" v-model="stallion" placeholder="Stallion" required>
                </div>
            </div>
            <div class="row">
                <div class="input-field col s12">
                    <input type="text" v-model="stallion_contact" placeholder="Stallion Contact Name" required>
                </div>
            </div>
            <div class="row">
                <div class="input-field col s12">
                    <input type="text" v-model="stallion_phone" placeholder="Stallion Phone Number" required>
                </div>
            </div>
            <div class="row">
                <div class="input-field col s12">
                    <input type="text" v-model="comments" placeholder="Comments(Previous Repro Problems,Previous Health Problems)" required>
                </div>
            </div>
            <div class="row">
                <div class="input-field col s12">
                    <input type="text" v-model="uterine_cysts" placeholder="Uterine Cysts" required>
                </div>
            </div>

            
            <button type="submit" class="btn-floating btn-large green"><i class="fa fa-check"></i></button>
            
        </form>
        </div> 
        <div class="fixed-action-btn">
            <router-link to="/" class="btn-floating btn-large grey"><i class="fa fa-arrow-left"></i></router-link>
        </div>
    </div>
</template>

<script>
import db from './firebaseInit'
export default {
    name: 'edit-mare',
    data () {
        return {
            mare_id: null,
            name: null,
            color: null,
            age: null,
            description: null,
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
            uterine_cysts: null
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
        updateMare () {
            db.collection('mares').where('mare_id', '==', this.$route.params.mare_id).get()
            .then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    doc.ref.update({
                        mare_id: this.mare_id,
                        name: this.name,
                        color: this.color,
                        age: this.age,
                        description: this.description,
                        owner: this.owner,
                        agent: this.agent,
                        agent_phone: this.agent_phone,
                        address: this.address,
                        home_phone: this.home_phone,
                        work_phone: this.work_phone,
                        fax: this.fax,
                        cell: this.cell,
                        email: this.email,
                        insured: this.insured,
                        tentative_foal_date: this.tentative_foal_date,
                        in_foal_to: this.in_foal_to,
                        stallion: this.stallion,
                        stallion_contact: this.stallion_contact,
                        stallion_phone: this.stallion_phone,
                        comments: this.comments,
                        uterine_cysts: this.uterine_cysts
                    })
                    .then(() => {
                        this.$router.push({name: 'view-mare', params: {mare_id: this.mare_id}})    
                    })
                })
            })
        }
    }
}
</script>