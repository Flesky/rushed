<template>
  <div class="relative">
    <div
      class="bg-dark rounded p-3"
      :class="{ 'opacity-50': !item.availability }"
    >
      <img :src="image" />
      <div class="mt-2">
        {{ item.name }}
      </div>
      <div class="flex justify-between items-center">
        <div class="text-primary">₱{{ item.price }}</div>
        <Tag :tag="item.tag"></Tag>
      </div>
    </div>
    <div
      v-if="item.availability == false"
      class="absolute top-0 left-0 w-full h-full flex items-center justify-center"
    >
      Unavailable!
    </div>
  </div>
</template>

<script>
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import Tag from "@/components/Tag";

export default {
  name: "GridItem",
  props: {
    item: Object,
  },
  components: {
    Tag
  },
  data() {
    return {
      image: "",
    };
  },
  created() {
    const storage = getStorage();
    getDownloadURL(ref(storage, this.item.image)).then((url) => {
      this.image = url;
    });
  },
};
</script>