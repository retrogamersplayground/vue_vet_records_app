<template>
  <div id="edit-mare">
    <h3>Edit Health Record</h3>
    <div class="row">
      <form @submit.prevent="updateHealthRecord" class="col s12">
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
          <label for="health_id">Health Record ID#</label>
          <div class="input-field col s12">
            <input disabled type="text" v-model="health_id" id="health_id" />
          </div>
        </div>
        <div class="row">
          <label for="hr_date">Date</label>
          <div class="input-field col s12">
            <input type="date" v-model="hr_date" id="hr_date" />
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
        <button @click="deleteHealthRecord" class="btn-floating btn-large red">
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
  name: "edit-health-record",
  data() {
    return {
      mare_id: null,
      name: null,
      health_id: null,
      hr_date: null,
      deworm: null,
      vaccination: null,
      hr_comments: null
    };
  },
  beforeRouteEnter(to, from, next) {
    db.collection("horse_health")
      .where("health_id", "==", to.params.health_id)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          next(vm => {
            vm.mare_id = doc.data().mare_id;
            vm.name = doc.data().name;
            vm.health_id = doc.data().health_id;
            vm.hr_date = doc.data().hr_date;
            vm.deworm = doc.data().deworm;
            vm.vaccination = doc.data().vaccination;
            vm.hr_comments = doc.data().hr_comments;
          });
        });
      });
  },
  watch: {
    $route: "fetchData"
  },
  methods: {
    fetchData() {
      db.collection("horse_health")
        .where("health_id", "==", this.$route.params.health_id)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            this.mare_id = doc.data().mare_id;
            this.name = doc.data().name;
            this.health_id = doc.data().health_id;
            this.hr_date = doc.data().hr_date;
            this.deworm = doc.data().deworm;
            this.vaccination = doc.data().vaccination;
            this.hr_comments = doc.data().hr_comments;
          });
        });
    },
    updateHealthRecord() {
      db.collection("horse_health")
        .where("health_id", "==", this.$route.params.health_id)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            doc.ref
              .update({
                mare_id: this.mare_id,
                name: this.name,
                health_id: this.health_id,
                hr_date: this.hr_date,
                deworm: this.deworm,
                vaccination: this.vaccination,
                hr_comments: this.hr_comments
              })
              .then(() => {
                this.$router.push({
                  name: "view-health-record",
                  params: { mare_id: this.mare_id }
                });
              });
          });
        });
    },
    deleteHealthRecord() {
      if (confirm("Are you sure?")) {
        db.collection("horse_health")
          .where("health_id", "==", this.$route.params.health_id)
          .get()
          .then(querySnapshot => {
            querySnapshot.forEach(doc => {
              doc.ref.delete();
              this.$router.push("/");
            });
          });
      }
    }
  }
};
</script>