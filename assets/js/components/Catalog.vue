<!--to see the data from for example api/products endpoint in json format through the browser, type -> 127.0.0.1:8000/api/products.jsonld -->
<template>
<section>
  <div class="row">
    <div class="col-12">
      <h1>
        Products
      </h1>
    </div>
  </div>
  <div class="row">
    <div
        v-for="product in products"
        :key="product['@id']"
        class="col-xs-12 col-6 mb-2 pb-2"
    >
      {{product.name}}
    </div>
  </div>
  <div class="row">
    <legend-component :title="legend + ' this is a javascript'"></legend-component>
  </div>
</section>
</template>

<script>
import axios from 'axios';
import LegendComponent from '@/components/Legend';
export default {
  name: 'Catalog',
  components:{
    LegendComponent,
  },
  data: () => ({
    // firstName: 'Antoan',
    legend:'Antoan,',
    products:[],
  }),
  async mounted() {
    const response = await axios.get('/api/products');

    this.products= response.data['hydra:member'];
    console.log(response.data['hydra:member']);
  },
};
</script>

<style scoped>

</style>
