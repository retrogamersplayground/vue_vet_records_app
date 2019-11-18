<template>
    <div id="original-view-health-record2">
        
        
        <ul class="collection with-header">
            <li class="collection-header">
                <h3>Additional Health Records</h3>
            </li>
            <li v-for="horse_health2 in horse_health2" v-bind:key="horse_health2.id" class="collection-item">
                <ul>
                    <li class="collection-item">Mare ID#: {{mare_id}}</li>
                    <li class="collection-item">Date: {{hr2_date}}</li>
                    <li class="collection-item">Left Ovary: {{l_ovary}}</li>
                    <li class="collection-item">Right Ovary: {{r_ovary}}</li>
                    <li class="collection-item">Uterine Edema: {{uterine_edema}}</li>
                    <li class="collection-item">Uterin Fluid: {{uterine_fluid}}</li>
                    <li class="collection-item">UT/CT Tone: {{ut_ct_tone}}</li>
                    <li class="collection-item">Teasing: {{teasing}}</li>
                    <li class="collection-item">Bred/Treatment: {{bred_treatments}}</li>
                    <li class="collection-item">Initials: {{initials}}</li>
                </ul>
            </li>
        </ul>
        <button @click="deleteHealthRecord2" class="btn-floating btn-large red"><i class="fa fa-times"></i></button>
        <div class="fixed-action-btn">
            <router-link to="/" class="btn-floating btn-large grey"><i class="fa fa-arrow-left"></i></router-link>
       </div>
    </div>
</template>

<script>
import db from './firebaseInit'
export default {
    name: 'original-view-health-record2',
    data () {
        return {
            horse_health2: [],
            mare_id: null,
            name: null,
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
        db.collection('horse_health2').where('mare_id', '==', to.params.mare_id).get()
        .then(querySnapshot => {
            querySnapshot.forEach(doc => {
                next(vm => {
                    vm.mare_id = doc.data().mare_id
                    vm.name = doc.data().name
                    vm.hr2_date = doc.data().hr2_date
                    vm.l_ovary = doc.data().l_ovary
                    vm.r_ovary = doc.data().r_ovary
                    vm.uterine_edema = doc.data().uterine_edema
                    vm.uterine_fluid = doc.data().uterine_fluid
                    vm.ut_ct_tone = doc.data().ut_ct_tone
                    vm.teasing = doc.data().teasing
                    vm.bred_treatments = doc.data().bred_treatments
                    vm.initials = doc.data().initials
                    
                })
            })
        })
    },
    watch: {
        '$route': 'fetchData'
    },
    methods: {
        fetchData () {
            db.collection('horse_health2').where('mare_id', '==', this.$route.params.mare_id).get()
            .then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    this.mare_id = doc.data().mare_id
                    this.name = doc.data().name
                    this.hr2_date = doc.data().hr2_date
                    this.l_ovary = doc.data().l_ovary
                    this.r_ovary = doc.data().r_ovary
                    this.uterine_edema = doc.data().uterine_edema
                    this.uterine_fluid = doc.data().uterine_fluid
                    this.ut_ct_tone = doc.data().ut_ct_tone
                    this.teasing = doc.data().teasing
                    this.bred_treatments = doc.data().bred_treatments
                    this.initials = doc.data().initials
                })
                this.horse_health2.push(data)
            })
        },
        deleteHealthRecord2 () {
            if(confirm('Are you sure?')) {
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