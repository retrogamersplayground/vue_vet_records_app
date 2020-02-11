<template>
  <div id="app">
    <Navbar />
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
export default {
  name: "App",
  data: {
      /*currentUser: null,
      sources: {},
      stripeCustomerInitialized: false,
      newCreditCard: {
        number: '4242424242424242',
        cvc: '111',
        exp_month: 1,
        exp_year: 2020,
        address_zip: '00000'
      },
      charges: {},
      newCharge: {
        source: null,
        amount: 2000
      }*/
  },
  components: {
    Navbar
  }
}
</script>

<style>
</style>
