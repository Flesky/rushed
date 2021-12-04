<template>
  <div class="vertical-center-wrapper">
  <NavigationBar></NavigationBar>
  <main class="vertical-center text-center">
  <div>
    <h1>Login</h1>
    <p class="mt-1">Log in to your account to start shopping with RUSHED.</p>
  </div>
  <form class="flex flex-col">
    <input v-model="email" type="email" placeholder="Email address" />
    <input v-model="password" type="password" placeholder="Password" />
    <button class="rounded bg-primary font-medium text-black px-6 py-2 mt-4">
      Log in
    </button>
  </form>
  </main></div>
</template>

<script>
import NavigationBar from "@/components/NavigationBar";
export default {
  name: "Login",
  components: {
    NavigationBar,
  },
  data() {
    return {
      email: null,
      password: null,
    };
  },
  // watch: {
  //   email() {
  //     console.log(this.email)
  //   }
  // }
};
</script>

<style scoped>
input {
  @apply bg-dark mt-2 px-3 py-2 outline-none;
}
</style>
