<template>
  <div id="add-mare">
    <h3>Add Mare</h3>
    <div class="row">
      <form @submit.prevent="saveMare" class="col s12">
        <div class="row">
          <label for="mare_id">Mare ID#</label>
          <div class="input-field col s12">
            <input  disabled type="text" v-model="mare_id" id="mare_id" required />
          </div>
        </div>
        <div class="row">
          <label for="name">Mare Name</label>
          <div class="input-field col s12">
            <input type="text" v-model="name" id="name" required />
          </div>
        </div>
        <div class="row">
          <label for="color">Color</label>
          <div class="input-field col s12">
            <input type="text" v-model="color" id="color" />
          </div>
        </div>
        <div class="row">
          <label for="age">Age</label>
          <div class="input-field col s12">
            <input type="number" v-model="age" id="age" />
          </div>
        </div>
        <div class="row">
          <label for="description">Description</label>
          <div class="input-field col s12">
            <input type="text" v-model="description" id="description" />
          </div>
        </div>
        <div class="row">
          <label for="arrival">Arrival</label>
          <div class="input-field col s12">
            <input type="date" v-model="arrival" id="arrival" />
          </div>
        </div>
        <div class="row">
          <label for="depart">Depart</label>
          <div class="input-field col s12">
            <input type="date" v-model="depart" id="depart" />
          </div>
        </div>
        <div class="row">
          <label for="owner">Owner</label>
          <div class="input-field col s12">
            <input type="text" v-model="owner" id="owner" />
          </div>
        </div>
        <div class="row">
          <label for="agent">Agent</label>
          <div class="input-field col s12">
            <input type="text" v-model="agent" id="agent" />
          </div>
        </div>
        <div class="row">
          <label for="agent_phone">Agent's Phone Number</label>
          <div class="input-field col s12">
            <input type="tel" v-model="agent_phone" id="agent_phone" />
          </div>
        </div>
        <div class="row">
          <label for="address">Address</label>
          <div class="input-field col s12">
            <input type="text" v-model="address" id="address" />
          </div>
        </div>
        <div class="row">
          <label for="home_phone">Home Phone</label>
          <div class="input-field col s12">
            <input type="tel" v-model="home_phone" id="home_phone" />
          </div>
        </div>
        <div class="row">
          <label for="work_phone">Work Phone</label>
          <div class="input-field col s12">
            <input type="tel" v-model="work_phone" id="work_phone" />
          </div>
        </div>
        <div class="row">
          <label for="fax">Fax</label>
          <div class="input-field col s12">
            <input type="tel" v-model="fax" id="fax" />
          </div>
        </div>
        <div class="row">
          <label for="cell">Cell</label>
          <div class="input-field col s12">
            <input type="tel" v-model="cell" id="cell" />
          </div>
        </div>
        <div class="row">
          <label for="email">Email</label>
          <div class="input-field col s12">
            <input type="email" v-model="email" id="email" />
          </div>
        </div>
        <div class="row">
          <label for="insured">Insured</label>
          <div class="input-field col s12">
            <input type="text" v-model="insured" id="insured" />
          </div>
        </div>
        <div class="row">
          <label for="tentative_foal_date">Tentative Foaling Date</label>
          <div class="input-field col s12">
            <input type="date" v-model="tentative_foal_date" id="tentative_foal_date" />
          </div>
        </div>
        <div class="row">
          <label for="in_foal_to">In Foal To</label>
          <div class="input-field col s12">
            <input type="text" v-model="in_foal_to" id="in_foal_to" />
          </div>
        </div>
        <div class="row">
          <label for="stallion">Stallion</label>
          <div class="input-field col s12">
            <input type="text" v-model="stallion" id="stallion" />
          </div>
        </div>
        <div class="row">
          <label for="stallion_contact">Stallion Contact Name</label>
          <div class="input-field col s12">
            <input type="text" v-model="stallion_contact" id="stallion_contact" />
          </div>
        </div>
        <div class="row">
          <label for="stallion_phone">Stallion Phone Number</label>
          <div class="input-field col s12">
            <input type="tel" v-model="stallion_phone" id="stallion_phone" />
          </div>
        </div>
        <div class="row">
          <label for="comments">Comments(Previous Repro Problems,Previous Health Problems)</label>
          <div class="input-field col s12">
            <input type="text" v-model="comments" id="comments" />
          </div>
        </div>
        <div class="row">
          <label for="uterine_cysts">Uterine Cysts</label>
          <div class="input-field col s12">
            <input type="text" v-model="uterine_cysts" id="uterine_cysts"/>
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
      mare_id: "mare_id _" + Math.round((new Date().getTime() / 1000)),
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