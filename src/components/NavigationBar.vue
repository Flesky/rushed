<template>
  <nav class="bg-dark py-3">
<!--    TODO: Center align logo-->
    <div class="flex items-center justify-between mx-auto w-full max-w-screen-lg px-6">
      <router-link to="/">
        <img src="@/assets/logo.png" class="h-8" />
      </router-link>
      <div class="hidden sm:flex space-x-4">
        <router-link to="/products">Products</router-link>
        <router-link to="/about">About</router-link>
      </div>
      <button class="sm:hidden" @click="display = !display">
        Menu
      </button>
    </div>
    <div
      class="grid bg-dark sm:hidden mt-4 gap-1 px-6 text-lg"
      v-show="display"
    >
      <router-link to="/products">Products</router-link>
      <router-link to="/about">About</router-link>
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
};
</script>

<style scoped>
.router-link-exact-active {
  @apply text-primary;
}
</style>
