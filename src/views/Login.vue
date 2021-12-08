<template>
  <div class="flex flex-col h-full">
    <NavigationBar></NavigationBar>
    <main class="w-full">
      <div class="rounded bg-red-light border-red px-3 py-2 text-red mb-4" v-if="error">{{ error }}</div>
      <div class="">
        <h1>Login</h1>
        <p>Sign in to start shopping with RUSHED.</p>
      </div>
      <form name="login" class="flex flex-col" @submit.prevent="login">
        <label for="email">Email address</label>
        <input v-model="email" type="email" id="email" />
        <label for="Password">Password</label>
        <input v-model="password" type="password" id="password" />
        <button class="btn-primary mt-6">Log in</button>
      </form>
      <div class="mt-6 text-center text-muted underline">
        <router-link to="/register">Create an account</router-link>
      </div>
    </main>
  </div>
</template>

<script>
import NavigationBar from "@/components/Navigation";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";

export default {
  name: "Login",
  components: {
    NavigationBar,
  },
  data() {
    return {
      email: null,
      password: null,
      error: null,
    };
  },
  methods: {
    login() {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          this.$router.push("/");
        })
        .catch((error) => (this.error = error));
    },
  },
};
</script>
