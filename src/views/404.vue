<template>
  <div class="vertical-center-wrapper">
    <NavigationBar></NavigationBar>
    <main class="vertical-center max-w-md text-center">
      <img src="@/assets/404.svg">
      <h1 class="mt-6">Page not found</h1>
      <div class="mt-4">
        <p>Uh oh, we can't seem to find the page you're looking for. Try going back to the previous page or
        <router-link to="/" class="text-primary underline">go home</router-link>.</p>
      </div>
    </main>
  </div>
</template>

<script>
import NavigationBar from "@/components/NavigationBar";
export default {
  components: {
    NavigationBar,
  },
};
</script>
