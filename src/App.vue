<template>
  <div>
    <router-view />
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import { useUserStore } from "./stores/user.js";

// Update profile
import { supabase } from "./supabase";
import Account from "./views/Account.vue";
import Auth from "./views/Auth.vue";

const router = useRouter();
const userStore = useUserStore();
const { user } = storeToRefs(userStore);

// Update profile
const session = ref();

onMounted(async () => {
  const appReady = ref(null);
  try {
    await userStore.fetchUser(); // here we call fetch user
    if (!user.value) {
      // redirect them to logout if the user is not there
      appReady.value = true;
      router.push({ path: "/auth/login" });
    } else {
      // continue to dashboard
      // router.push({ path: "/" });
      // supabase.auth.getSessionFromUrl().then(({ data }) => {
      //   session.value = data.session;
      // });
      // supabase.auth.onAuthStateChange((_, _session) => {
      //   session.value = _session;
      // });
    }
  } catch (e) {
    console.log(e);
  }
});
</script>

<style></style>
