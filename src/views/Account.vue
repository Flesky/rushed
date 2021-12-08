<template>
  <NavigationBar></NavigationBar>
  <main class="flex flex-col">
    <div v-if="user">
      <h1>{{ user.displayName }}</h1>
      <p>{{ user.email }}</p>
    </div>
    <button class="btn-primary mt-4" @click="signOut">Sign out</button>
    <button class="btn-red mt-4" @click="deleteUser">Delete user</button>
  </main>
</template>

<script>
import NavigationBar from "@/components/Navigation";
import { getAuth, signOut, deleteUser } from "firebase/auth";
export default {
  components: { NavigationBar },
  data() {
    return {
      auth: getAuth(),
    };
  },
  computed: {
    user() {
      return this.$store.getters.user;
    },
  },
  methods: {
    signOut() {
      signOut(this.auth)
        .then(() => {
          alert("Sign out successful.");
          this.$store.dispatch("setUser", null);
          this.$router.push("/login");
        })
        .catch((error) => console.log(error));
    },
    deleteUser() {
      deleteUser(this.auth.currentUser)
        .then(() => {
          alert("User has been deleted");
          this.$router.push("/login");
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>
