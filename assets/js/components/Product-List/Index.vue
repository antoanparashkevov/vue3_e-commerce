<template>
  <div class="row">
    <div class="col-12">
      <div class="mt-4">
<!--        in reason that we are checking if products.length === 0, loading spinner is loading forever even when there are no products in the category-->
        <loading-spinner v-show="loading"/>
      </div>

      <!--     To print error message that will show the empty category products-->
      <h5 class="text-danger"
      v-show="!loading && products.length === 0"
      >
        No products found on this category!
      </h5>

    </div>

    <product-card
        v-for="product in products"
        v-show="!loading"
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
  components: {
    ProductCard,
    LoadingSpinner
  },
  props: {
    products: {
      type: Array,
      required: true
    },
    loading: {
      type: Boolean,
      required: true,
    }
  }
};
</script>

<style scoped>

</style>
