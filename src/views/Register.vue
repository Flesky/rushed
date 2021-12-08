<!--TODO: Add validation-->
<template>
  <div class="flex flex-col h-full">
    <NavigationBar></NavigationBar>
    <main class="w-full">
      <div class="rounded bg-red-light border-red px-3 py-2 text-red mb-4" v-if="error">{{ error }}</div>
      <div class="">
        <h1>Register</h1>
        <p>Create an account to start shopping with RUSHED.</p>
        <p class="text-red">TODO: Add validation.</p>
      </div>
      <form name="register" class="flex flex-col" @submit.prevent="register">
        <label for="displayName">Display name</label>
        <input v-model="displayName" id="displayName" />
        <label for="email">Email address</label>
        <input v-model="email" type="email" id="email" />
        <label for="Password">Password</label>
        <input v-model="password" type="password" id="password" />
        <label for="Password">Confirm password</label>
        <input v-model="confirmPassword" type="password" id="confirmPassword" />
        <button class="btn-primary mt-6">Register</button>
      </form>
      <div class="mt-6 text-center text-muted underline">
        <router-link to="/login">I have an account</router-link>
      </div>
    </main>
  </div>
</template>

<script>
import NavigationBar from "@/components/Navigation";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

export default {
  name: "Login",
  components: {
    NavigationBar,
  },
  data() {
    return {
      email: null,
      displayName: null,
      password: null,
      confirmPassword: null,
      error: null,
    };
  },
  methods: {
    register() {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          updateProfile(auth.currentUser, {
            displayName: this.displayName,
          }).then(() => {
            console.log(this.displayName);
            this.$router.push("/");
          });
        })
        .catch((error) => (this.error = error.code));
    },
  },
};
</script>
