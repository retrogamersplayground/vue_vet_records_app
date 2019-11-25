<template>
  <div>
    <nav>
      <div class="nav-wrapper green">
        <div class="container">
          <router-link to="/" class="brand-logo" id="brand-logo">Mare Records</router-link>
          <a href="#" data-target="mobile-demo" class="sidenav-trigger right">
            <i class="material-icons" @click="dropDown" id="menu">menu</i>
            <i class="material-icons" id="clear" @click="hide">clear</i>
          </a>
          <ul class="right hide-on-med-and-down">
            <li v-if="isLoggedIn" id="userLi">
              <span class="email black-text">{{currentUser}}</span>
            </li>
            <li v-if="isLoggedIn" class="navLi">
              <router-link to="/">Dashboard</router-link>
            </li>
            <li v-if="!isLoggedIn" class="navLi">
              <router-link to="/login">Login</router-link>
            </li>
            <li v-if="!isLoggedIn" class="navLi">
              <router-link to="/register">Register</router-link>
            </li>
            <li v-if="isLoggedIn" class="navLi">
              <button class="btn black" v-on:click="logout">Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <ul class="dropDown" id="dropDown">
      <li v-if="isLoggedIn" class="navLi centerMobileLiText">
        <router-link to="/">Dashboard</router-link>
      </li>
      <li v-if="!isLoggedIn" class="navLi centerMobileLiText">
        <router-link to="/login">Login</router-link>
      </li>
      <li v-if="!isLoggedIn" class="navLi centerMobileLiText">
        <router-link to="/register">Register</router-link>
      </li>
      <li v-if="isLoggedIn" class="navLi">
        <button class="btn black mobileLiButton" v-on:click="logout">Logout</button>
      </li>
    </ul>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "navbar",
  data() {
    return {
      isLoggedIn: false,
      currentUser: false
    };
  },
  created() {
    if (firebase.auth().currentUser) {
      (this.isLoggedIn = true),
        (this.currentUser = firebase.auth().currentUser.email);
    }
  },
  methods: {
    logout: function() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.go({ path: this.$router.path });
        });
    },
    dropDown() {
      let elem = document.getElementById('dropDown');
      let menu = document.getElementById('menu');
      let clear = document.getElementById('clear');
      elem.style.display = 'block';
      menu.style.display = 'none';
      clear.style.display = 'inline-block'
    },
    hide() {
      let elem = document.getElementById('dropDown');
      let menu = document.getElementById('menu');
      let clear = document.getElementById('clear');
      elem.style.display = 'none';
      menu.style.display = 'inline-block';
      clear.style.display = 'none'
    }
  }
};
</script>

<style scoped>
.email {
  padding-right: 10px;
}
.mobileLiButton {
  width: 100%
}
.centerMobileLiText {
  text-align: center;
}
.dropDown {
  display: none;
}
#clear {
  display: none;
}

@media only screen and (max-width: 992px) {
  
}
@media only screen and (max-width: 357px) {
  .brand-logo {
    position: relative;
  }
}
</style>