<template>
  <div class="flex flex-col h-full">
    <NavigationBar></NavigationBar>
    <main class="flex flex-col h-full items-center justify-center max-w-md text-center">
      <slot name="image"></slot>
      <h1 class="mt-6">
        <slot name="title"></slot></h1>
      <p class="mt-6">
        <slot name="text"></slot></p>
    </main>
  </div>
</template>

<script>
import NavigationBar from "@/components/Navigation";

export default {
  name: "StatusPage",
  components: {NavigationBar},
  props: {
    image: String,
    title: String,
    text: String
  }
}
</script>