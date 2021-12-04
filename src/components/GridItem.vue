<template>
  <div class="relative">
    <div
      class="bg-dark rounded p-3"
      :class="{ 'opacity-50': !item.availability }"
    >
      <img :src="image" />
      <div class="font-bold mt-2">
        {{ item.name }}
      </div>
      <div class="flex justify-between items-center">
        <div class="flex space-x-1">
          <div v-if="item.salePrice" class="text-muted line-through">
            ₱{{ item.price }}
          </div>
          <div class="text-primary">₱{{ price }}</div>
        </div>
        <div v-if="item.salePrice" class="">-{{ getRate() }}%</div>
      </div>
    </div>
    <div
      v-if="item.availability == false"
      class="absolute top-0 left-0 w-full h-full flex items-center justify-center"
    >
      UNAVAILABLE
    </div>
    <div class="absolute top-6 -right-0.5">
      <Tag v-if="item.tag" :tag="item.tag"></Tag>
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
    Tag,
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
  computed: {
    price() {
      return this.item.salePrice || this.item.price;
    },
  },
  methods: {
    getRate() {
      const rate = 1 - this.item.salePrice / this.item.price;
      return Math.round((rate + Number.EPSILON) * 100);
    },
  },
};
</script>
