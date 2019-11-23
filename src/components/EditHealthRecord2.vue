<template>
  <div id="edit-mare">
    <h3>Edit Additional Health Record</h3>
    <div class="row">
      <form @submit.prevent="updateHealthRecord2" class="col s12">
        <div class="row">
          <label for="mare_id">Mare ID#</label>
          <div class="input-field col s12">
            <input disabled type="text" v-model="mare_id" id="mare_id" required />
          </div>
        </div>
        <div class="row">
          <label for="name">Mare Name</label>
          <div class="input-field col s12">
            <input type="text" v-model="name" id="name" required />
          </div>
        </div>
        <div class="row">
          <label for="health_id2">Health Record ID#</label>
          <div class="input-field col s12">
            <input type="text" v-model="health_id2" id="health_id2" />
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
          <label for="ut_ct_tone">UT/CT Tone</label>
          <div class="input-field col s12">
            <input type="text" v-model="ut_ct_tone" id="ut_ct_tone" />
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
          <label for="initials">Initials</label>
          <div class="input-field col s12">
            <input type="text" v-model="initials" id="initials" />
          </div>
        </div>
        <button type="submit" class="btn-floating btn-large green">
          <i class="fa fa-check"></i>
        </button>
        <button @click="deleteHealthRecord2" class="btn-floating btn-large red">
          <i class="fa fa-times"></i>
        </button>
      </form>
    </div>
    <div class="fixed-action-btn">
      <router-link to="/" class="btn-floating btn-large grey">
        <i class="fa fa-arrow-left"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
import db from "./firebaseInit";
export default {
  name: "edit-health-record2",
  data() {
    return {
      mare_id: null,
      name: null,
      health_id2: null,
      hr2_date: null,
      l_ovary: null,
      r_ovary: null,
      uterine_edema: null,
      uterine_fluid: null,
      ut_ct_tone: null,
      teasing: null,
      bred_treatments: null,
      initials: null
    };
  },
  beforeRouteEnter(to, from, next) {
    db.collection("horse_health2")
      .where("health_id2", "==", to.params.health_id2)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          next(vm => {
            vm.mare_id = doc.data().mare_id;
            vm.name = doc.data().name;
            vm.health_id2 = doc.data().health_id2;
            vm.hr2_date = doc.data().hr2_date;
            vm.l_ovary = doc.data().l_ovary;
            vm.r_ovary = doc.data().r_ovary;
            vm.uterine_edema = doc.data().uterine_edema;
            vm.uterine_fluid = doc.data().uterine_fluid;
            vm.ut_ct_tone = doc.data().ut_ct_tone;
            vm.teasing = doc.data().teasing;
            vm.bred_treatments = doc.data().bred_treatments;
            vm.initials = doc.data().initials;
          });
        });
      });
  },
  watch: {
    $route: "fetchData"
  },
  methods: {
    fetchData() {
      db.collection("horse_health2")
        .where("health_id2", "==", this.$route.params.health_id2)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            this.mare_id = doc.data().mare_id;
            this.name = doc.data().name;
            this.health_id2 = doc.data().health_id2;
            this.hr2_date = doc.data().hr2_date;
            this.l_ovary = doc.data().l_ovary;
            this.r_ovary = doc.data().r_ovary;
            this.uterine_edema = doc.data().uterine_edema;
            this.uterine_fluid = doc.data().uterine_fluid;
            this.ut_ct_tone = doc.data().ut_ct_tone;
            this.teasing = doc.data().teasing;
            this.bred_treatments = doc.data().bred_treatments;
            this.initials = doc.data().initials;
          });
        });
    },
    updateHealthRecord2() {
      db.collection("horse_health2")
        .where("health_id2", "==", this.$route.params.health_id2)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            doc.ref
              .update({
                mare_id: this.mare_id,
                name: this.name,
                health_id2: this.health_id2,
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
              .then(() => {
                this.$router.push({
                  name: "view-health-record2",
                  params: { mare_id: this.mare_id }
                });
              });
          });
        });
    },
    deleteHealthRecord2() {
      db.collection("horse_health2")
        .where("health_id2", "==", this.$route.params.health_id2)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            doc.ref.delete();
            this.$router.push("/");
          });
        });
    }
  }
};
</script>