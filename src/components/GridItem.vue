<!--TODO: transfer @click here-->

<template>
  <div class="transition duration-100 hover:scale-110 relative cursor-pointer">
    <div
      class="transition bg-dark hover:bg-gray rounded p-3"
      :class="{ 'opacity-50': !item['availability'] }"
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
        <div v-if="item.salePrice" class="text-light">-{{ getRate() }}%</div>
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
