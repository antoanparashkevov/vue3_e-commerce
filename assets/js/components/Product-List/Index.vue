<template>
<div class="row">
  <product-card
      v-for="product in products"
      :key="product['@id']"
      :product="product"
  />
</div>
</template>

<script>
import ProductCard from './ProductCard';
export default {
  name: 'ProductList',
  components:{
    ProductCard
  },
  props:{
    products:{
      type:Array,
      required:true
    }
  }
};
</script>

<style scoped>

</style>
