<template>
  <NavigationBar></NavigationBar>
  <main>
    <h1 v-if="user">{{ user.email }}</h1>
    <button class="btn-red mt-4" @click="signOut">Sign out</button>
  </main>
</template>

<script>
import NavigationBar from "@/components/Navigation";
import { getAuth, signOut } from "firebase/auth";
export default {
  components: { NavigationBar },
  computed: {
    user() {
      return this.$store.getters.user;
    },
  },
  methods: {
    signOut() {
      const auth = getAuth();
      signOut(auth)
        .then(() => {
          alert("Sign out successful.");
          this.$store.dispatch("fetchUser", null)
          this.$router.push("/");
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>
