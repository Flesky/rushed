<template>
  <StatusLayout>
    <template v-slot:image> <img src="@/assets/under_construction.svg" /></template>
    <template v-slot:title>Under construction</template>
    <template v-slot:text>
      We're currently working on our home page to better serve you. Why not
      <router-link to="/" class="text-primary underline">check our products</router-link
      > for now?</template
    >
  </StatusLayout>
</template>

<script>
import NavigationBar from "@/components/Navigation";
import StatusLayout from "@/components/templates/StatusPage";
export default {
  name: "Home",
  components: {
    NavigationBar,
    StatusLayout,
  },
};
</script>
