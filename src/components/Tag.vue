<template>
  <div v-if="tag == 'new'" class="tag bg-primary">NEW</div>
  <div v-else-if="tag == 'hot'" class="tag bg-danger text-white">
    HOT
  </div>
  <div
      v-else-if="tag == 'limited'"
      class="tag bg-warning text-black"
  >
    LIMITED
  </div>
</template>

<script>
export default {
  name: "Tag",
  props: {
    tag: String
  }
};
</script>