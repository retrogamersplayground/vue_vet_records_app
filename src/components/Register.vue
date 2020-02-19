<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col s12 m8 offset-m2">
          <div class="login card-panel green white-text center">
            <h3>Register</h3>
            <form>
              <div class="input-field">
                <i class="material-icons prefix">email</i>
                <input type="text" id="email" v-model="email" />
                <label for="email">Email</label>
              </div>
              <div class="input-field">
                <i class="material-icons prefix">lock</i>
                <input type="text" id="password" v-model="password" />
                <label for="email">Password</label>
              </div>
              <button v-on:click="register" class="">Register</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="fixed-action-btn">
      <router-link to="/landing" class="btn-floating btn-large grey">
        <i class="fa fa-arrow-left"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
import db from './firebaseInit'
export default {
  name: 'register',
  data: function() {
    return {
      email: '',
      password: '',
      user: firebase.auth().currentUser,
      user_id: null
    }
  },
  methods: {
    register: function(e) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            alert(`Account created for ${this.email}`)
            this.$router.go({ path: this.$router.path })
          },
          err => {
            alert(err.message)
          }
        )
      e.preventDefault()
    },
    saveUser() {
      db.collection('users')
        .add({
          email: this.email,
          password: this.password,
          user_id: this.user.uid
        })
        .then(docRef => this.$router.push('/'))
        .catch(error => console.log(err))
        console.log('user saved')
    }
  }
}
</script>

<style scoped>
label {
  color: #ffffff;
}
.login {
  margin-top: 150px;
}
button {
    padding: 20px 50px;
    background-color: #ffffff;
    color: #4CAF50;
    font-size: 24px;
    border: 1px solid #4CAF50;
    border-radius: 4px;
}
button:hover {
    color: #ffffff;
    background-color: #4CAF50;
    border: 1px solid #ffffff;
    border-radius: 4px;
}
</style>
