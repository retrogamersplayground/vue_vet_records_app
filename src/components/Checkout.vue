<!--<template>
    <section class="row payment-form">
        <h5 class="#e0e0e0 grey lighten-4">
            Payment Method
            <span class="right">${{amount}}</span>
        </h5>

        <div class="error red center-align white-text">{{stripeValidationError}}</div>

        <div class="col s12 card-element">
            <label>Card Number</label>
            <div id="card-number-element" class="input-value"></div>
        </div>

        <div class="col s6 card-element">
            <label>Expiry Date</label>
            <div id="card-expiry-element"></div>
        </div>

        <div class="col s6 card-element">
            <label>CVC</label>
            <div id="card-cvc-element"></div>
        </div>

        <div class="col s12 place-order-button-block">
            <button class="btn col s12 #e91e63 green" @click="placeOrderButtonPressed">Place Order</button>
        </div>
    </section>-->






    <!--stripe-->
    <!--
    <div class="container">
      <div id="app">
        <div id="firebaseui-auth-container"></div>
        <div id="loader">&hellip;</div>
        <div v-if="currentUser">
          <h2>Hello {{ currentUser.email }},</h2>
          <button v-on:click="signOut">Sign out</button>
          <div v-if="stripeCustomerInitialized">
            <h3>Credit Cards</h3>
            <ul>
              <li v-for="source in sources">
                <span v-if="source.id">
                  {{ source.brand }} &hellip;{{ source.last4 }}
                  (exp. {{ source.exp_month }}/{{ source.exp_year }})
                </span>
                <span v-else>&hellip;</span>
              </li>
            </ul>
            <div>
              <h4>New</h4>
              <div>
                <label>
                  Number <input v-model="newCreditCard.number">
                </label>
              </div>
              <div>
                <label>
                  CCV <input v-model="newCreditCard.cvc">
                </label>
              </div>
              <div>
                <label>
                  Exp
                  <input v-model="newCreditCard.exp_month" size="2"> /
                  <input v-model="newCreditCard.exp_year" size="4">
                </label>
              </div>
              <div>
                <label>
                  Zip <input v-model="newCreditCard.address_zip">
                </label>
              </div>
              <div>
                <button v-on:click="submitNewCreditCard">Add</button>
                {{ newCreditCard.error }}
              </div>
            </div>
            <h3>Charges</h3>
            <ul>
              <li v-for="(charge, id) in charges">
                {{ charge.amount }}
                <span v-if="charge.error">
                  {{ charge.error }}
                </span>
                <span v-else-if="charge.outcome">
                  {{ charge.outcome.seller_message }}
                  {{ charge.source.brand }} &hellip;{{ charge.source.last4 }}
                  (exp. {{ charge.source.exp_month }}/{{ charge.source.exp_year }})
                </span>
                <span v-else>&hellip;</span>
              </li>
            </ul>
            <h4>New</h4>
            <div>
              <label>
                Card
                <select v-model="newCharge.source">
                  <option :value="null">Default payment method</option>
                  <option v-for="(source, id) in sources" v-bind:value="source.id" v-if="source.id">
                    {{ source.brand }} &hellip;{{ source.last4 }}
                    (exp. {{ source.exp_month }}/{{ source.exp_year }})
                  </option>
                </select>
              </label>
            </div>
            <div>
              <label>
                Amount <input v-model="newCharge.amount">
              </label>
            </div>
            <div>
              <button v-on:click="submitNewCharge">Charge</button>
              {{ newCharge.error }}
            </div>
          </div>
          <div v-else>&hellip;</div>
        </div>
      </div>
    </div>

</template>

<script>
import firebase from 'firebase'
Stripe.setPublishableKey('pk_test_rmvxS3TrkGyvqF5nIitvGu8L00PK5JMuRs');
      var firebaseUI = new firebaseui.auth.AuthUI(firebase.auth());
      var firebaseAuthOptions = {
        callbacks: {
          signInSuccess: (currentUser, credential, redirectUrl) => { return false; },
          uiShown: () => { document.getElementById('loader').style.display = 'none'; }
        },
        signInFlow: 'popup',
        signInSuccessUrl: '/',
        signInOptions: [ firebase.auth.GoogleAuthProvider.PROVIDER_ID ],
        tosUrl: '/'
      };
      firebase.auth().onAuthStateChanged(firebaseUser => {
        if (firebaseUser) {
          document.getElementById('loader').style.display = 'none';
          app.currentUser = firebaseUser;
          app.listen();
        } else {
          firebaseUI.start('#firebaseui-auth-container', firebaseAuthOptions);
          app.currentUser = null;
        }
      });
export default {
    name: 'checkout',
    data() {
        return {
        }
    },
    methods: {
          listen: function() {
            firebase.firestore().collection('stripe_customers').doc(`${this.currentUser.uid}`).onSnapshot(snapshot => {
              this.stripeCustomerInitialized = (snapshot.data() !== null);
            }, () => {
              this.stripeCustomerInitialized = false;
            });
            firebase.firestore().collection('stripe_customers').doc(`${this.currentUser.uid}`).collection('sources').onSnapshot(snapshot => {
             let newSources = {};
              snapshot.forEach(doc => {
                const id = doc.id;
                newSources[id] = doc.data();
              })
              this.sources = newSources;
            }, () => {
              this.sources = {};
            });
            firebase.firestore().collection('stripe_customers').doc(`${this.currentUser.uid}`).collection('charges').onSnapshot(snapshot => {
            let newCharges = {};
             snapshot.forEach(doc => {
               const id = doc.id;
               newCharges[id] = doc.data();
             })
             this.charges = newCharges;
            }, () => {
              this.charges = {};
            });
          },
          submitNewCreditCard: function() {
            Stripe.card.createToken({
              number: this.newCreditCard.number,
              cvc: this.newCreditCard.cvc,
              exp_month: this.newCreditCard.exp_month,
              exp_year: this.newCreditCard.exp_year,
              address_zip: this.newCreditCard.address_zip
            }, (status, response) => {
              if (response.error) {
                this.newCreditCard.error = response.error.message;
              } else {
                firebase.firestore().collection('stripe_customers').doc(this.currentUser.uid).collection('tokens').add({token: response.id}).then(() => {
                  this.newCreditCard = {
                    number: '',
                    cvc: '',
                    exp_month: 1,
                    exp_year: 2017,
                    address_zip: ''
                  };
                });
              }
            });
          },
          submitNewCharge: function() {
            firebase.firestore().collection('stripe_customers').doc(this.currentUser.uid).collection('charges').add({
              source: this.newCharge.source,
              amount: parseInt(this.newCharge.amount)
            });
          },
          signOut: function() {
            firebase.auth().signOut()
          }
        }
}
    /*data() {
        return {
            stripe: null,
            cardNumberElement: null,
            cardExpiryElement: null,
            cardCVCElement: null,
            stripeValidationError: "",
            amount: 50
        };
    },
    mounted() {
        this.stripe = Stripe("pk_test_rmvxS3TrkGyvqF5nIitvGu8L00PK5JMuRs");
        this.createAndMountFormElements();
    },
    methods: {
        createAndMountFormElements() {
            var elements = this.stripe.elements();
            this.cardNumberElement = elements.create("cardNumber");
            this.cardNumberElement.mount("#card-number-element");
            this.cardExpiryElement = elements.create("cardExpiry");
            this.cardExpiryElement.mount("#card-expiry-element");
            this.cardCvcElement = elements.create("cardCvc");
            this.cardCvcElement.mount("#card-cvc-element");
            this.cardNumberElement.on("change", this.setValidationError);
            this.cardExpiryElement.on("change", this.setValidationError);
            this.cardCvcElement.on("change", this.setValidationError);
        },
        setValidationError(event) {
            this.stripeValidationError = event.error ? event.error.message : "";
        },
        placeOrderButtonPressed() {
            this.stripe.createToken(this.cardNumberElement).then(result => {
                if (result.error) {
                    this.stripeValidationError = result.error.message;
                } else {
                    var stripeObject = {
                        amount: this.amount,
                        source: result.token
                    };
                    this.saveDataToFireStore(stripeObject);
                }
            });
        },
        saveDataToFireStore(stripeObject) {
            const db = firebase.firestore()
            const chargesRef = db.collection("charges")
            const pushId = chargesRef.doc().id
            db.collection("charges").doc(pushId).set(stripeObject)
            chargesRef.doc(pushId).onSnapshot(snapShot => {
                 const charge = snapShot.data();
                        if (charge.error) {
                            alert(charge.error);
                            chargesRef
                            .doc(pushId)
                            .delete();
                            return;
                        }
                        if (charge.status && charge.status == "succeeded") {
                            alert(charge.status);
                        }
            })
        }
    }
};*/
</script>

<!--<style>
.payment-form {
    max-width: 400px;
    margin: 20px auto;
    border: 1px solid #ececec;
}
.payment-form h5 {
    margin: 0;
    padding: 10px;
    font-size: 1.2rem;
}
.card-element {
    margin-top: 5px;
}
#card-number-element,
#card-expiry-element,
#card-cvc-element {
    background: white;
    padding: 5px;
    border: 1px solid #ececec;
    height: 30px;
}
.place-order-button-block {
    margin: 10px 0;
}
</style>-->