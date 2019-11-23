<template>
  <div id="add-mare">
    <h3>Add Mare</h3>
    <div class="row">
      <form @submit.prevent="saveMare" class="col s12">
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="mare_id" required />
            <label>Mare ID#</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="name" required />
            <label>Mare's Name</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="color" />
            <label>Color</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="age" />
            <label>Age</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="description" />
            <label>Description</label>
          </div>
        </div>

        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="arrival" />
            <label>Arrival</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="depart" />
            <label>Depart</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="owner" />
            <label>Owner</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="agent" />
            <label>Agent</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="agent_phone" />
            <label>Agent's Phone</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="address" />
            <label>Address</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="home_phone" />
            <label>Home Phone</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="work_phone" />
            <label>Work Phone</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="fax" />
            <label>Fax</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="cell" />
            <label>Cell</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="email" v-model="email" />
            <label>Email</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="insured" />
            <label>Insured</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="tentative_foal_date" />
            <label>Tentative Foaling Date</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="in_foal_to" />
            <label>In Foal To</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="stallion" />
            <label>Stallion</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="stallion_contact" />
            <label>Stallion Contact Name</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="stallion_phone" />
            <label>Stallion Phone Number</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="comments" />
            <label>Comments(Previous Repro Problems,Previous Health Problems)</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="uterine_cysts" />
            <label>Uterine Cysts</label>
          </div>
        </div>
        <button type="submit" class="btn-floating btn-large green">
          <i class="fa fa-check"></i>
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
  name: "add-mare",
  data() {
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
      uterine_cysts: null
    };
  },
  methods: {
    saveMare() {
      db.collection("mares")
        .add({
          mare_id: this.mare_id,
          name: this.name,
          color: this.color,
          age: this.age,
          description: this.description,
          arrival: this.arrival,
          depart: this.depart,
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
        .then(docRef => this.$router.push("/"))
        .catch(error => console.log(err));
    }
  }
};
</script>