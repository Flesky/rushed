// TODO: Widescreen layout
// TODO: Add to cart
<template>
  <NavigationBar></NavigationBar>
  <main>
    <img :src="image" class="p-4" />
    <h1>{{ item.name }}</h1>
    <div class="flex justify-between items-center">
      <div class="text-primary">₱{{ item.price }}</div>
      <Tag :tag="item.tag"></Tag>
    </div>
    <button
      class="bg-primary font-medium text-black rounded w-full px-3 py-2 mt-4"
    >
      Add to Cart
    </button>
    <p class="mt-4">{{ item.description }}</p>
  </main>
</template>

<script>
import NavigationBar from "@/components/NavigationBar";
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
};
</script>
