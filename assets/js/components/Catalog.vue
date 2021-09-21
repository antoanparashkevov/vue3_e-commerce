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
  <product-list :products="products"></product-list>
  <div class="row">
    <legend-component :title="legend + ' this is a javascript'"></legend-component>
  </div>
</section>
</template>

<script>
import ProductList from './Product-List/Index';
import axios from 'axios';
import LegendComponent from '@/components/Legend';
export default {
  name: 'Catalog',
  components:{
    LegendComponent,
    ProductList
  },
  data: () => ({
    // firstName: 'Antoan',
    legend:'Antoan,',
    products:[],
  }),
  mounted(){
    axios.get('/api/products').then((response) => {
     console.log(response);

    })
  },
  async created() {
    const response = await axios.get('/api/products');
    this.products= response.data['hydra:member'];
    console.log(response.data['hydra:member']);
  },
};
</script>

<style scoped>

</style>
