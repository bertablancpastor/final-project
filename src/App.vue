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


const router = useRouter();
const userStore = useUserStore();
const { user } = storeToRefs(userStore);

onMounted(async () => {
  const appReady = ref(null);
  try {
    // here we call fetch user
    await userStore.fetchUser(); 
    if (!user.value) {
    // redirect them to logout if the user is not there
      appReady.value = true;
      router.push({ path: "/auth/login" });
    }
  } catch (e) {
    console.log(e);
  }
});
</script>

<style></style>
