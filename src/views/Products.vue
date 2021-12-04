<template>
  <NavigationBar></NavigationBar>
  <main>
    <div class="flex justify-between items-center">
      <h1>Products</h1>
    </div>
    <div class="md:flex space-y-4 md:space-y-0 md:space-x-4 mt-2">
      <div class="md:w-56 flex flex-col">
        <div class="">Filters</div>
        <button
          class="flex items-center"
          @click="availabilityFilter = !availabilityFilter"
        >
          <input class="mr-2" type="checkbox" v-model="availabilityFilter" />
          <div>Show unavailable</div>
        </button>
      </div>
      <div class="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full">
        <GridItem
          v-for="product in filteredProducts"
          :item="product.data"
          @click="this.$router.push({name: 'product', params: {id: product.id}})"
        ></GridItem>
      </div>
    </div>
  </main>
</template>

<script>
import NavigationBar from "@/components/NavigationBar";
import GridItem from "@/components/GridItem";
import { getFirestore, collection, getDocs } from "firebase/firestore";

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
      this.products = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data(),
      }));
    });
  },
  computed: {
    filteredProducts() {
      if (this.availabilityFilter) return this.products;
      else {
        return this.products.filter((product) => product.data.availability);
      }
    },
  },
};
</script>
