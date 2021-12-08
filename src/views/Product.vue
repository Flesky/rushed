<!--TODO: Add to cart-->
<template>
  <NavigationBar></NavigationBar>
  <main>
    <div class="md:flex md:space-x-4">
      <img :src="image" class="object-contain mt-6 md:w-80 md:self-start" />
      <div class="mt-6 md:mt-0">
        <div class="flex space-x-2 items-center">
          <h1>{{ item.name }}</h1>
          <Tag v-if="item.tag" :tag="item.tag"></Tag>
        </div>
        <div class="text-primary text-2xl">₱{{ price }}</div>
        <div v-if="item.salePrice" class="flex items-center space-x-1">
          <div class="text-muted line-through">₱{{ item.price }}</div>
          <div class="text-light">-{{ getRate() }}%</div>
        </div>
        <div class="flex items-center space-x-4 mt-6">
          <button
            class="btn-primary md:w-max"
          >
            Add to Cart
          </button>
          <i className="bi-heart"></i>
        </div>
        <p class="mt-6">{{ item.description }}</p>
      </div>
    </div>
  </main>
</template>

<script>
import NavigationBar from "@/components/Navigation";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { getDownloadURL, getStorage, ref } from "firebase/storage";
import Tag from "@/components/Tag";
export default {
  name: "Product",
  components: { Tag, NavigationBar },
  props: {
    id: String,
  },
  data() {
    return {
      item: Object,
      image: "",
    };
  },
  created() {
    const db = getFirestore();
    const docRef = doc(db, "products", this.id);
    getDoc(docRef).then((docSnap) => {
      if (docSnap.exists()) {
        this.item = docSnap.data();
        const storage = getStorage();
        getDownloadURL(ref(storage, this.item.image)).then((url) => {
          this.image = url;
        });
      } else {
        console.log("I don't exist!");
      }
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
