<template>
  <div id="dashboard">
    <h3>Dashboard</h3>
    <ul class="collection with-header">
      <li class="collection-header">
        <h4>Mares</h4>
        <input type="text" v-model="search" placeholder="Search Mares">
      </li>
      <li v-for="mare in filteredMares" v-bind:key="mare.id" class="collection-item">
        <div>
          <h5>{{mare.name}}</h5>
          <router-link
            class="secondary-content"
            v-bind:to="{name:'view-health-record2', params: {mare_id: mare.mare_id}}"
          >
            <i class="fa fa-h-square"></i>
          </router-link>
          <router-link
            class="secondary-content"
            v-bind:to="{name:'view-health-record', params: {mare_id: mare.mare_id}}"
          >
            <i class="fa fa-eyedropper"></i>
          </router-link>
          <router-link
            class="secondary-content"
            v-bind:to="{name:'add-health-record', params: {mare_id: mare.mare_id}}"
          >
            <i class="fa fa-medkit"></i>
          </router-link>
          <router-link
            class="secondary-content"
            v-bind:to="{name:'view-mare', params: {mare_id: mare.mare_id}}"
          >
            <i class="fa fa-eye"></i>
          </router-link>
        </div>
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
import db from "./firebaseInit";
export default {
  name: "dashboard",
  data() {
    return {
      mares: [],
      horse_health: [],
      horse_health2: [],
      search: ''
    };
  },
  created() {
    db
      .collection("mares")
      .orderBy("name")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          const data = {
            id: doc.id,
            mare_id: doc.data().mare_id,
            name: doc.data().name
          };
          this.mares.push(data);
        });
      }),
      db
        .collection("horse_health")
        .orderBy("name")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            const data = {
              id: doc.id,
              mare_id: doc.data().mare_id,
              name: doc.data().name
            };
            this.horse_health.push(data);
          });
        }),
      db
        .collection("horse_health2")
        .orderBy("name")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            const data = {
              id: doc.id,
              mare_id: doc.data().mare_id,
              name: doc.data().name
            };
            this.horse_health2.push(data);
          });
        });
  },
  computed: {
    filteredMares: function () {
      return this.mares.filter((mare) => {
        return mare.name.match(this.search)
      })
    }
  }
};
</script>

<style scoped>
h5 {
  display: inline-block;
}
span {
  margin-left: 50px;
}
.fa-eye {
  color: #2196f3;
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
.fa-h-square {
  font-size: 24px;
  margin-right: 20px;
}
</style>