<template>
  <div class="vertical-center-wrapper">
    <NavigationBar></NavigationBar>
    <main class="vertical-center max-w-md text-center">
      <img src="@/assets/under_construction.svg">
      <h1 class="mt-6">Coming soon</h1>
      <div class="mt-4">
        <p>We're currently working on our home page. Why not
          <router-link to="/products" class="text-primary underline">check our products</router-link> for now?</p>
      </div>
    </main>
  </div>
</template>

<script>
import NavigationBar from "@/components/NavigationBar";
export default {
  name: "Home",
  components: {
    NavigationBar
  }
}
</script>