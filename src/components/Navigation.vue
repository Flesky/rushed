<!--TODO: ditch if else in user and replace with computed property-->

<template>
  <nav class="bg-dark py-3">
    <!--    TODO: Center align logo-->
    <div
      class="flex items-center justify-between mx-auto w-full max-w-screen-lg px-6"
    >
      <router-link to="/">
        <img src="@/assets/logo.png" class="h-8" />
      </router-link>
      <div class="hidden sm:flex space-x-4">
        <router-link to="/products">Products</router-link>
        <router-link to="/about">About</router-link>
        <div v-if="user">
          <router-link to="/account">{{ user.displayName }}</router-link>
        </div>
        <div v-else>
          <router-link to="/login">Login</router-link>
        </div>
      </div>
      <button class="sm:hidden" @click="display = !display">
        <i className="bi-list"></i>
      </button>
    </div>
    <div
      class="grid bg-dark sm:hidden pt-6 py-2 gap-3 px-6 text-lg"
      v-show="display"
    >
      <router-link to="/products">Products</router-link>
      <router-link to="/about">About</router-link>
      <div v-if="user">
        <router-link to="/account">{{ user.displayName }}</router-link>
      </div>
      <div v-else>
        <router-link to="/login">Login</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavigationBar",
  data() {
    return {
      display: false,
    };
  },
  computed: {
    user() {
      return this.$store.getters.user
    },
  },
};
</script>

<style scoped>
.router-link-exact-active {
  @apply text-primary;
}
</style>
