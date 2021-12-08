<template>
  <router-view />
</template>

<script>
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default {
  created() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      this.$store.dispatch("setUser", user);
    });
  },
};
</script>
