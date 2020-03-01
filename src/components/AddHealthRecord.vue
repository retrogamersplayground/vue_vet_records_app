<template>
  <div id="add-health-record">
    <ul class="collection with-header">
      <li class="collection-header">
        <h2>Add Health Record</h2>
      </li>
      <li>
        <div class="row">
          <form @submit.prevent="addHealthRecord" class="col s12">
            <div class="row">
              <label for="mare_id">Mare ID#</label>
              <div class="input-field col s12">
                <input disabled type="text" v-model="mare_id" id="mare_id" required />
              </div>
            </div>
            <div class="row">
              <label for="name">Mare Name</label>
              <div class="input-field col s12">
                <input disabled type="text" v-model="name" id="name" required />
              </div>
            </div>
            <div class="row">
              <label for="health_id">Health ID</label>
              <div class="input-field col s12">
                <input disabled type="text" v-model="health_id" id="health_id" required />
              </div>
            </div>
            <div class="row">
              <label for="hr_date">Date</label>
              <div class="input-field col s12">
                <input type="date" v-model="hr_date" id="hr_date" required />
              </div>
            </div>
            <div class="row">
              <label for="deworm">Deworm</label>
              <div class="input-field col s12">
                <input type="text" v-model="deworm" id="deworm" />
              </div>
            </div>
            <div class="row">
              <label for="vaccination">Vaccination</label>
              <div class="input-field col s12">
                <input type="text" v-model="vaccination" id="vaccination" />
              </div>
            </div>
            <div class="row">
              <label for="hr_comments">Comments</label>
              <div class="input-field col s12">
                <input type="text" v-model="hr_comments" id="hr_comments" />
              </div>
            </div>
            <button type="submit" class="btn-floating btn-large green">
              <i class="fa fa-check"></i>
            </button>
          </form>
        </div>
      </li>
      <li>
        <div class="row">
          <form @submit.prevent="addHealthRecord2" class="col s12">
            <div class="row">
              <label for="mare_id">Mare ID#</label>
              <div class="input-field col s12">
                <input disabled type="text" v-model="mare_id" id="mare_id" required />
              </div>
            </div>
            <div class="row">
              <label for="name">Mare Name</label>
              <div class="input-field col s12">
                <input disabled type="text" v-model="name" id="name" required />
              </div>
            </div>
            <div class="row">
              <label for="health_id2">Health ID</label>
              <div class="input-field col s12">
                <input disabled type="text" v-model="health_id2" id="health_id2" />
              </div>
            </div>
            <div class="row">
              <label for="hr2_date">Date</label>
              <div class="input-field col s12">
                <input type="date" v-model="hr2_date" id="hr2_date" />
              </div>
            </div>
            <div class="row">
              <label for="l_ovary">Left Ovary</label>
              <div class="input-field col s12">
                <input type="text" v-model="l_ovary" id="l_ovary" />
              </div>
            </div>
            <div class="row">
              <label for="r_ovary">Right Ovary</label>
              <div class="input-field col s12">
                <input type="text" v-model="r_ovary" id="r_ovary" />
              </div>
            </div>
            <div class="row">
              <label for="uterine_edema">Uterine Edema</label>
              <div class="input-field col s12">
                <input type="text" v-model="uterine_edema" id="uterine_edema" />
              </div>
            </div>
            <div class="row">
              <label for="uterine_fluid">Uterine Fluid</label>
              <div class="input-field col s12">
                <input type="text" v-model="uterine_fluid" id="uterine_fluid" />
              </div>
            </div>
            <div class="row">
              <label for="ut_cx_tone">UT/CX Tone</label>
              <div class="input-field col s12">
                <input type="text" v-model="ut_cx_tone" id="ut_cx_tone" />
              </div>
            </div>
            <div class="row">
              <label for="teasing">Teasing</label>
              <div class="input-field col s12">
                <input type="text" v-model="teasing" id="teasing" />
              </div>
            </div>
            <div class="row">
              <label for="bred_treatments">Bred/Treatments</label>
              <div class="input-field col s12">
                <input type="text" v-model="bred_treatments" id="bred_treatments" />
              </div>
            </div>
            <div class="row">
              <label for="initilas">Initials</label>
              <div class="input-field col s12">
                <input type="text" v-model="initials" id="initials" />
              </div>
            </div>
            <button type="submit" class="btn-floating btn-large green">
              <i class="fa fa-check"></i>
            </button>
          </form>
        </div>
      </li>
    </ul>
    <div class="fixed-action-btn">
      <router-link to="/" class="btn-floating btn-large grey">
        <i class="fa fa-arrow-left"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
import db from './firebaseInit'
export default {
  name: 'add-health-record',
  data() {
    return {
      user_id: this.$route.params.user_id,
      health_id: 'health_id _' + Math.round(new Date().getTime() / 1000),
      health_id2: 'health_id2' + Math.round(new Date().getTime() / 1000),
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
      ut_cx_tone: null,
      teasing: null,
      bred_treatments: null,
      initials: null
    }
  },
  beforeRouteEnter(to, from, next) {
    db.collection('mares')
      .where('mare_id', '==', to.params.mare_id)
      .get()
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
    $route: 'fetchData'
  },
  methods: {
    fetchData() {
      db.collection('mares')
        .where('mare_id', '==', this.$route.params.mare_id)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            this.mare_id = doc.data().mare_id
            this.name = doc.data().name
          })
        })
    },
    addHealthRecord() {
      db.collection('horse_health')
        .add({
          user_id: this.user_id,
          mare_id: this.mare_id,
          health_id: this.health_id,
          name: this.name,
          hr_date: this.hr_date,
          deworm: this.deworm,
          vaccination: this.vaccination,
          hr_comments: this.hr_comments
        })
        .then(docRef => this.$router.push('/'))
        .catch(error => console.log(err))
    },
    addHealthRecord2() {
      db.collection('horse_health2')
        .add({
          user_id: this.user_id,
          mare_id: this.mare_id,
          health_id2: this.health_id2,
          name: this.name,
          hr2_date: this.hr2_date,
          l_ovary: this.l_ovary,
          r_ovary: this.r_ovary,
          uterine_edema: this.uterine_edema,
          uterine_fluid: this.uterine_fluid,
          ut_cx_tone: this.ut_cx_tone,
          teasing: this.teasing,
          bred_treatments: this.bred_treatments,
          initials: this.initials
        })
        .then(docRef => this.$router.push('/'))
        .catch(error => console.log(err));
    }
  }
}
</script>