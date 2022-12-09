<!-- COMPONENTE BOILERPLATE -->
 
<template>
<div class="container-sign">
    <!-- <div>
    <img src="https://img.freepik.com/foto-gratis/cerrar-mano-escribiendo-vista-superior-cuaderno_23-2148888824.jpg?w=996&t=st=1670258256~exp=1670258856~hmac=0ad8d76181e42c10b64ce2d0f461475aac684640d93513edae8049c3b69a937f" class="img-sign-in" alt="image">
    </div> -->
  
  <div class="form-side">
    <div class="header-description">
      <h3 class="header-title">Log In to ToDo</h3>
      <p class="header-subtitle">Start organizing your tasks!</p>
    </div>

    
    <form @submit.prevent="signIn" class="form-sign-in">
      <div>
        <div>
          <label class="input-field-label">E-mail</label>
          <input 
            type="email"
            class="input-field"
            placeholder="example@gmail.com"
            id="email"
            v-model="email"
            required
          />
        </div>

        
        <div class="show-password">
          <label class="input-field-label">Password</label>
          <!-- Versió sense mostra contrasenya  -->
          <input
            :type="passwordFieldType" 
            class="input-field"
            placeholder="**********"
            id="password"
            v-model="password"
            required
          />
          <button :class="showIcon" @click.prevent="hidePassword = !hidePassword" ></button>
        </div>
                        
        <button class="button" type="submit">Sign In</button> 
      </div> 

      <div>
         <p class="create-account">Dont have an account? 
          <PersonalRouter :route="route" :buttonText="buttonText" class="sign-up-link"/></p>
      </div>
    </form>
    
    
    
  </div>
</div>
</template>

<script setup>
import { ref, computed } from "vue";
import PersonalRouter from "./PersonalRouter.vue";
import { supabase } from "../supabase";
import { useRouter } from "vue-router";
import { useUserStore } from "../stores/user";
import { storeToRefs } from "pinia"; 

// Route Variables
const route = "/auth/signup";
const buttonText = "Sign Up";

// Input Fields
const email = ref("");
const password = ref("");

// Error Message
const errorMsg = ref("");

//Show hide password variables Diego
const hidePassword = ref(true);
const passwordFieldType = computed(() =>
  hidePassword.value ? "password" : "text"
);

const showIcon = computed(() =>
  hidePassword.value ? "passwordFieldIcon" : "passwordFieldIconShow"
);


// Router to push user once Log In to home
const redirect = useRouter();

// Arrow function to Signin user to supaBase
const signIn = async () => {
  try {
    await useUserStore().signIn(email.value, password.value);
    redirect.push({path: "/"});
  } catch (error) {
    errorMsg.value = error.message;
    setTimeout(() => {
        errorMsg.value = null;
      }, 5000);
  }
  return;

errorMsg.value = "error";
};
</script>

<style scoped>


</style>
