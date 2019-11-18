<template>
    <div id="add-health-record">
        <h2>Add Health Record</h2>
        <ul class="collection with-header">
            <li class="collection-header">
                <h4>{{name}}</h4> <h6>Mare ID#: {{mare_id}}</h6>
            </li>
            
            <li>
                <div class="row">
                    <form @submit.prevent="addHealthRecord" class="col s12">
                        <div class="row">
                            <div class="input-field col s12">
                                <input disabled type="hidden" v-model="mare_id" required> 
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col s12">
                                <input disabled type="hidden" v-model="name" placeholder="Mare Name" required>   
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col s12">
                                <input type="text" v-model="health_id">
                                <label>Health ID</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col s12">
                                <input type="text" v-model="hr_date" required>
                                <label>Date</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col s12">
                                <input type="text" v-model="deworm">
                                <label>Deworm</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col s12">
                                <input type="text" v-model="vaccination">
                                <label>Vaccination</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col s12">
                                <input type="text" v-model="hr_comments">
                                <label>Comments</label>
                            </div>
                        </div>
                        <button type="submit" class="btn-floating btn-large green">
                        <i class="fa fa-check"></i></button>
                    </form>
                </div>
            </li>
                 <li>
                <div class="row">
                    <form @submit.prevent="addHealthRecord2" class="col s12">
                        <div class="row">
                            <div class="input-field col s12">
                                <input disabled type="text" v-model="mare_id" required> 
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col s12">
                                <input disabled type="text" v-model="name" placeholder="Mare Name" required>   
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col s12">
                                <input type="text" v-model="health_id2">
                                <label>Health ID</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col s12">
                                <input type="text" v-model="hr2_date">
                                <label>Date</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col s12">
                                <input type="text" v-model="l_ovary">
                                <label>Left Ovary</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col s12">
                                <input type="text" v-model="r_ovary">
                                <label>Right Ovary</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col s12">
                                <input type="text" v-model="uterine_edema">
                                <label>Uterine Edema</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col s12">
                                <input type="text" v-model="uterine_fluid">
                                <label>Uterine Fluid</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col s12">
                                <input type="text" v-model="ut_ct_tone">
                                <label>UT/CT Tone</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col s12">
                                <input type="text" v-model="teasing">
                                <label>Teasing</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col s12">
                                <input type="text" v-model="bred_treatments">
                                <label>Bred/Treatments</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col s12">
                                <input type="text" v-model="initials">
                                <label>Initials</label>
                            </div>
                        </div>
                    
                        <button type="submit" class="btn-floating btn-large green">
                        <i class="fa fa-check"></i></button>
                    </form>
                </div>
            </li>
        </ul>
        
        
        <div class="fixed-action-btn">
            <router-link to="/" class="btn-floating btn-large grey"><i class="fa fa-arrow-left"></i></router-link>
        </div>
    </div>
</template>

<script>
import db from './firebaseInit'
export default {
    name: 'add-health-record',
    data () {
        return {
            health_id: null,
            health_id2: null,
            mare_id: null,
            name: null,
            hr_date: null,
            deworm: null,
            vaccination: null,
            hr_comments: null,
            hr2_date: null,
            l_ovary: null,
            r_ovary: null,
            uterine_edema: null,
            uterine_fluid: null,
            ut_ct_tone: null,
            teasing: null,
            bred_treatments: null,
            initials: null
        }
    },
    beforeRouteEnter(to, from, next) {
        db.collection('mares').where('mare_id', '==', to.params.mare_id).get()
        .then(querySnapshot => {
            querySnapshot.forEach(doc => {
                next(vm => {
                    vm.mare_id = doc.data().mare_id
                    vm.name = doc.data().name 
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
                })
            })
        },
        addHealthRecord () {
            db.collection('horse_health').add({
                mare_id: this.mare_id,
                health_id: this.health_id,
                name: this.name,
                hr_date: this.hr_date,
                deworm: this.deworm,
                vaccination: this.vaccination,
                hr_comments: this.hr_comments
            })
            .then(docRef => this.$router.push('/')
            )
            .catch(error => console.log(err))
        },
        addHealthRecord2 () {
            db.collection('horse_health2').add({
                mare_id: this.mare_id,
                health_id2: this.health_id2,
                name: this.name,
                hr2_date: this.hr2_date,
                l_ovary: this.l_ovary,
                r_ovary: this.r_ovary,
                uterine_edema: this.uterine_edema,
                uterine_fluid: this.uterine_fluid,
                ut_ct_tone: this.ut_ct_tone,
                teasing: this.teasing,
                bred_treatments: this.bred_treatments,
                initials: this.initials
            })
            .then(docRef => this.$router.push('/')
            )
            .catch(error => console.log(err))
        }        
    }
}
</script>