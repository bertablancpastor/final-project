<template>
  <nav>
    <!-- <PersonalRouter :route="route" :buttonText="buttonText" class="logo-link"/> -->
    <!-- <router-link to="/">
      Home
    </router-link> -->
    <ul class="nav-desktop">
        <li>
          <router-link to="/" class="router-link">Task Manager</router-link>
        </li>

        <li>
          <router-link to="/account" class="router-link">Your Account</router-link>
        </li>
    </ul>

    <div>
      <ul>
                <li class="log-out-welcome">
          <!-- Aplicación del usuario logeado -->
          <p v-if="useUserStore().user">Welcome {{useUserStore().user.email}}</p>
        </li>
        <li>
          <button @click="signOut" class="button-log-out">Log out</button>
        </li>
      </ul>
    </div>

    <!-- Aplication hamburguer -->
    <button @click="toggle" class="toggle"> </button>
      <div v-show="changeBoolean" class="hamburger">
        <ul>
        <li>
          <router-link to="/" class="router-link-mobile">Task Manager</router-link>
        </li>

        <li>
          <router-link to="/account" class="router-link-mobile">Your Account</router-link>
        </li>
        <li>
          <button @click="signOut" class="button-log-out-mobile">Log out</button>
        </li>
        </ul>
      </div>
  

  </nav>
</template>

<script setup>
// import PersonalRouter from "./PersonalRouter.vue";
import { useUserStore } from "../stores/user";
import { computed, readonly } from "vue";
import { useRouter } from "vue-router";
import { ref } from 'vue';

//constant to save a variable that will hold the use router method
const route = "/";
const buttonText = "Todo app";

// constant to save a variable that will get the user from store with a computed function imported from vue
// const getUser = computed(() => useUserStore().user);
const getUser = useUserStore().user;

// constant that calls user email from the useUSerStore
const userEmail = getUser.email;

// async function that calls the signOut method from the useUserStore and pushes the user back to the Auth view.
const redirect = useRouter();

const signOut = async () => {
  try{
    await useUserStore().signOut();
    redirect.push({path: "/auth/login"});
    // call the user store and send the users info to backend to signOut
    // then redirect user to the homeView
  } catch (error) {
    errorMsg.value = error.message;
      setTimeout(() => {
        errorMsg.value = null;
      }, 5000);
  }
  return;
  errorMsg.value = "error";
};

//Logica para el Hamburguer
const changeBoolean = ref (true);
const toggle = () => {
  changeBoolean.value = !changeBoolean.value;
};

</script>

<style>
/* .navbar-img {
  width: 190px;
} */


</style>
