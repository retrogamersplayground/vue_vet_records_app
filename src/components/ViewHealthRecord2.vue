<template>
  <div id="view-health-record2">
    <ul class="collection with-header">
      <li class="collection-header">
        <h3>Additional Health Records</h3>
      </li>
      <li
        v-for="horse_health2 in horse_health2"
        v-bind:key="horse_health2.id"
        class="collection-item"
      >
        <ul class="collection">
          <li class="collection-item">Mare Name: {{horse_health2.name}}</li>
          <li class="collection-item">Mare ID#: {{horse_health2.mare_id}}</li>
          <li class="collection-item">Health Record ID#: {{horse_health2.health_id2}}</li>
          <li class="collection-item">Date: {{horse_health2.hr2_date}}</li>
          <li class="collection-item">Left Ovary: {{horse_health2.l_ovary}}</li>
          <li class="collection-item">Right Ovary: {{horse_health2.r_ovary}}</li>
          <li class="collection-item">Uterine Edema: {{horse_health2.uterine_edema}}</li>
          <li class="collection-item">Uterine Fluid: {{horse_health2.uterine_fluid}}</li>
          <li class="collection-item">UT/CX Tone: {{horse_health2.ut_cx_tone}}</li>
          <li class="collection-item">Teasing: {{horse_health2.teasing}}</li>
          <li class="collection-item">Bred/Treatment: {{horse_health2.bred_treatments}}</li>
          <li class="collection-item">Initials: {{horse_health2.initials}}</li>
        </ul>
        <router-link
          v-bind:to="{name: 'edit-health-record2', params: {health_id2: horse_health2.health_id2}}"
          class="btn-floating btn-large red"
        >
          <i class="fa fa-pencil"></i>
        </router-link>
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
import db from "./firebaseInit";
export default {
  name: "view-health-record2",
  data() {
    return {
      horse_health2: []
    };
  },
  created() {
    db.collection("horse_health2")
      .where("mare_id", "==", this.$route.params.mare_id)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          const data = {
            id: doc.id,
            mare_id: doc.data().mare_id,
            name: doc.data().name,
            health_id2: doc.data().health_id2,
            hr2_date: doc.data().hr2_date,
            l_ovary: doc.data().l_ovary,
            r_ovary: doc.data().r_ovary,
            uterine_edema: doc.data().uterine_edema,
            uterine_fluid: doc.data().uterine_fluid,
            ut_cx_tone: doc.data().ut_cx_tone,
            teasing: doc.data().teasing,
            bred_treatments: doc.data().bred_treatments,
            initials: doc.data().initials
          };
          this.horse_health2.push(data);
        });
      });
  }
};
</script>