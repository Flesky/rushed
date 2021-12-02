<template>
  <NavigationBar></NavigationBar>
  <main>
    <div class="flex justify-between items-center">
      <h1>Products</h1>
    </div>
    <div class="md:flex">
      <div class="md:max-w-screen-xs w-full flex flex-col">
        <div class="">Filters</div>
        <button
          class="flex items-center"
          @click="availabilityFilter = !availabilityFilter"
        >
          <input class="mr-2" type="checkbox" v-model="availabilityFilter" />
          <div>Show unavailable</div>
        </button>
      </div>
      <div class="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full mt-2">
        <GridItem
          v-for="product in filteredProducts"
          :item="product"
          :id="product"
        ></GridItem>
      </div>
    </div>
  </main>
</template>

<script>
import NavigationBar from "@/components/NavigationBar";
import GridItem from "@/components/GridItem";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";

export default {
  components: {
    NavigationBar,
    GridItem,
  },
  data() {
    return {
      products: [],
      availabilityFilter: false,
    };
  },
  created() {
    const db = getFirestore();
    const q = collection(db, "products");
    getDocs(q).then((querySnapshot) => {
      this.products = querySnapshot.docs.map((doc) => doc.data());
    });
  },
  computed: {
    filteredProducts() {
      if (this.availabilityFilter) return this.products;
      else {
        return this.products.filter((product) => product.availability);
      }
    },
  },
  methods: {
    // async getProducts(mark) {
    //   const db = getFirestore();
    //   let q;
    //   if (mark) {
    //     q = collection(db, "products");
    //   } else {
    //     // Show unavailable unchecked - show available only
    //     q = query(
    //       collection(db, "products"),
    //       where("availability", "==", true)
    //     );
    //   }
    //   getDocs(q).then((querySnapshot) => {
    //     this.products = querySnapshot.docs.map((doc) => doc.data());
    //   });
    // },
  },
};
</script>
