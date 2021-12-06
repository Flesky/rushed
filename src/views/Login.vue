<template>
  <div class="flex flex-col h-full">
    <NavigationBar></NavigationBar>
    <main class="flex flex-col justify-center w-full">
      <div class="">
<!--        <img class="w-40" src="@/assets/logo.png" />-->
        <h1>Login</h1>
        <p class="mt-2">
          Sign in to start shopping with RUSHED.
        </p>
      </div>
      <form class="flex flex-col mt-4" @submit.prevent="login">
        <input v-model="email" type="email" placeholder="Email address" />
        <input
          v-model="password"
          class="mt-2.5"
          type="password"
          placeholder="Password"
        />
        <button
          class="btn-primary mt-5"
        >
          Log in
        </button>
      </form>
    </main>
  </div>
</template>

<script>
import NavigationBar from "@/components/Navigation";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

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
      const auth = getAuth()
      signInWithEmailAndPassword(auth, this.email, this.password)
      .then((userCredential) => {
        this.$store.dispatch('fetchUser', userCredential.user)
        this.$router.push('/')
      }).catch((error) => console.log(error))
    }
  }
  // watch: {
  //   email() {
  //     console.log(this.email)
  //   }
  // }
};
</script>

<style scoped>
input {
  @apply bg-dark px-3 py-2 outline-none rounded;
}
</style>
