<template>
  <div class="rounded-sm font-semibold text-sm uppercase align-middle px-1.5"
       :class="classes">
    {{ tag }}
  </div>
</template>

<script>
export default {
  name: "Tag",
  props: {
    tag: String,
  },
  computed: {
    classes() {
      return {
        new: "bg-primary",
        hot: "bg-red",
        limited: "bg-yellow text-black",
      }[this.tag];
    },
  },
};
</script>
