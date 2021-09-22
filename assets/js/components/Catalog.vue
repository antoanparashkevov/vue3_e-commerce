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
  props:{
    currentCategoryId:{
      type:String,
      default:null,
      require:true
    }
  },
  mounted(){
    axios.get('/api/products').then((response) => {
     console.log(response);

    })
  },
  async created() {
    //to make each category to show the products related to id
    //this will hold all the query parameters that we want to send
    const params = {};

        if(this.currentCategoryId){
          params.category=this.currentCategoryId;
        }

        //to pass that params to axios, we add a second argument which is an option object
    const response = await axios.get('/api/products',{
      params
    });
    this.products= response.data['hydra:member'];
    console.log(response.data['hydra:member']);
  },
};
</script>

<style scoped>

</style>
