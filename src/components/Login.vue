<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col s12 m8 offset-m2">
          <div class="login card-panel green white-text center">
            <h3>Login</h3>
            <form>
              <div class="input-field">
                <i class="material-icons prefix">email</i>
                <input type="text" id="email" v-model="email" />
                <label class="white-text" for="email">Email</label>
              </div>
              <div class="input-field">
                <i class="material-icons prefix">lock</i>
                <input type="text" id="password" v-model="password" />
                <label class="white-text" for="email">Password</label>
              </div>
              <button v-on:click="login" class="">Login</button>
            </form>
            <router-link to="/reset" tag="h6">Forgot Your Password?</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'login',
  data: function() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    login: function(e) {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            alert(`You are logged in as ${this.email}`);
            this.$router.go({ path: this.$router.path });
          },
          err => {
            alert(err.message);
          }
        );
      e.preventDefault();
    }
  }
};
</script>

<style scoped>
router-link {
  color: #ffffff;
}
.login {
  margin-top: 50%;
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
