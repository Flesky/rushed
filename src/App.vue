<template>
  <router-view />
</template>

<script>
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default {
  created() {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        this.$store.dispatch("fetchUser", user);
      } else {
        this.$store.dispatch("fetchUser");
      }
    });
    unsubscribe();
  },
};
</script>
