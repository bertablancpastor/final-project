<template>
  <Nav />

<div class="account">
  <h1>Your Account</h1>
  <p v-if="useUserStore().user" class="account-user" >{{useUserStore().user.email}}</p>
  <!-- <img :src="avatar_url ? avatar_url : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png'" alt="Profile picture"> -->

  <div>
    <img src="/buttons/noun-user-154044-svg.svg" alt="Profile picture">
    <!-- Upload iamge -->
    <form class="form-widget" @submit.prevent="updateProfile">
    <!-- <Avatar v-model:path="avatar_url" @upload="updateProfile" size="10" /> -->
    <!-- Username -->
    <div>
      <label for="username">Name</label>
      <input id="username" type="text" v-model="username" />
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
        class="button primary block"
        :value="loading ? 'Loading ...' : 'Update'"
        :disabled="loading"
      />
    </div>

    </form>

     <!-- Update profile -->
  <!-- <div class="container" style="padding: 50px 0 100px 0">
    <Account v-if="session" :session="session" />
    <Auth v-else />
  </div> -->

    
    
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
    console.log(userStore.profile);
    username.value = userStore.profile.username;
    avatar_url.value = userStore.user.avatar_url;
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
        //avatar_url: avatar_url.value,
        
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