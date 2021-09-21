<template>
<div class="row">
  <div class="col-12">
    <div class="mt-4">
      <loading-spinner v-show="products.length === 0"/>
    </div>

  </div>

  <product-card
      v-for="product in products"
      :key="product['@id']"
      :product="product"
  />

</div>
</template>

<script>
import LoadingSpinner from '@/components/Loading';
import ProductCard from './ProductCard';
export default {
  name: 'ProductList',
  components:{
    ProductCard,
    LoadingSpinner
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
