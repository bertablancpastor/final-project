<template>
  <Nav />

<div class="account">
  <h1>Your Account</h1>
  <!-- <p v-if="useUserStore().user" class="account-user" >{{useUserStore().user.email}}</p> -->
  <p class="account-user">{{username}}</p>
  

  <div class="account-update" >
    

    
    <form class="form-widget" @submit.prevent="updateProfile">

    <!-- Upload image -->  
    <div class="avatar-upload">
      <Avatar v-model:path="avatar_url" @upload="updateProfile" class="avatar"/>
    </div>  
  
    <!-- Update username, usersurname && email -->
    <div class="user-update">
        <div>
          <label for="username">Name</label>
          <input id="username" type="text" v-model.lazy="username" />
        </div>

        <div>
          <label for="usersurname">Surname</label>
          <input id="usersurname" type="text" v-model="usersurname" />
        </div>

        <div>
          <label for="email">Email</label>
          <input id="email" type="email" v-model="email" />
        </div>

        <div>
        <input
        type="submit"
        class="button-primary-block"
        :value="loading ? 'Loading ...' : 'Update'"
        :disabled="loading"
          />
        </div>
    </div>

    </form>

       
  </div>


</div>

  <Footer />
</template>

<script setup>
  import { supabase } from '../supabase'
  import { onMounted, ref, toRefs } from 'vue'
  import { useUserStore } from "../stores/user";
  import Nav from '../components/Nav.vue';
  import Footer from '../components/Footer.vue';
  import Avatar from '../components/Avatar.vue';

 

  const userStore = useUserStore();

  const loading = ref(false);
  const username = ref();
  const usersurname = ref();
  const avatar_url = ref(null);
  const email = ref ();

  onMounted(() => {
    getProfile();
  });

  async function getProfile() {
    await userStore.fetchUser();
    // console.log(userStore.profile);
    username.value = userStore.profile.username;
    usersurname.value = userStore.profile.usersurname;
    email.value = userStore.profile.email;
    avatar_url.value = userStore.profile.avatar_url;
    
  }

  async function signOut() {
    try {
      loading.value = true
      let { error } = await supabase.auth.signOut()
      if (error) throw error
    } catch (error) {
      alert(error.message)
    } finally {
      loading.value = false
    }
  }

  async function updateProfile() {
    try {
      loading.value = true
      
      let { data, error } = await supabase.from('profiles').update({
        username: username.value,
        usersurname: usersurname.value,
        email: email.value,
        avatar_url: avatar_url.value,      

      }).match({user_id: useUserStore().user.id})
      if (error) throw error
     
    } catch (error) {
      alert(error.message)
    } finally {
      loading.value = false
    }
  } 

</script>

<style scoped>
</style>