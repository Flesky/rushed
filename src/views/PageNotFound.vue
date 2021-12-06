<template>
  <StatusLayout>
    <template v-slot:image> <img src="@/assets/404.svg" /></template>
    <template v-slot:title> Page not found</template>
    <template v-slot:text>
      Uh oh, we can't seem to find the page you're looking for. Try going back
      to the previous page or
      <router-link to="/" class="text-primary underline">go home</router-link
      >.</template
    >
  </StatusLayout>
</template>

<script>
import NavigationBar from "@/components/Navigation";
import StatusLayout from "@/components/templates/StatusPage";
export default {
  components: {
    NavigationBar,
    StatusLayout,
  },
};
</script>
