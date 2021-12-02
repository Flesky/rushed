<template>
  <NavigationBar></NavigationBar>
  <main>
    <h1>Page not found</h1>
    <div class="mt-2">
      <router-link to="/" class="text-primary underline">Go home</router-link>
    </div>
  </main>
</template>

<script>
import NavigationBar from "@/components/NavigationBar";
export default {
  components: {
    NavigationBar
  },
};
</script>
