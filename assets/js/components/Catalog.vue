<!--to see the data from for example api/products endpoint in json format through the browser, type -> 127.0.0.1:8000/api/products.jsonld -->
<template>
  <section>
    <div class="row">
      <div class="col-12">
        <h1>
          <title-component
          :current-category-id="currentCategoryId"
          :categories="categories"
          ></title-component>
        </h1>
      </div>
    </div>
    <product-list
        :products="products"
        :loading="loading"
    ></product-list>
    <div class="row">
      <legend-component :title="legend + ' this is a javascript'"></legend-component>
    </div>
  </section>
</template>

<script>
import axios from 'axios';
import ProductList from './Product-List/Index';
import { fetchProducts } from '../services/products-service';
import LegendComponent from '@/components/Legend';
import TitleComponent from './Title';

export default {
  name: 'Catalog',
  components: {
    LegendComponent,
    ProductList,
    TitleComponent
  },
  data: () => ({
    // firstName: 'Antoan',
    legend: 'Antoan,',
    products: [],
    //loading is set to false, because loading is by default false
    loading: false,
  }),
  props: {
    currentCategoryId: {
      type: String,
      default: null,
    },
    categories:{
      type:Array,
      required:true
    }
  },

  //that only prints the whole products properties into developer tool
  mounted() {
    axios.get('/api/products')
        .then((response) => {
          console.log(response);

        });
  },

  //THIS CREATED FUNCTION TAKES CARE OF MAKING AN AJAX REQUEST.
  // This means that this function knows whether or not we are making an ajax calls to fetch products.
  async created() {

    //here loading is true because we are going to fetch the products
    this.loading = true;

    //this simply declares the variable outside of try/catch scope so this response variable is available in the entire created function
    let data;

    //TRY and CATCH is for error handling if AJAX calls fails
    try {
      //to pass that params to axios, we add a second argument which is an option object
      data = await fetchProducts(this.currentCategoryId);
      //here loading is false because we were fetched the products at all
      this.loading = false;

    } catch (error) {
      //when we are in this case and ajax call fails, the loading spinner will stop
      this.loading = false;
      //so if we hit the catch error, just return ( EXIT )
      return;
    }
    //move this line outside of try/catch
    this.products = data['hydra:member'];

    //this will print the current data of the catalog who is storing into hydra:member property
    console.log(data['hydra:member']);

  },

//  BEFORE creating separate file products-service.js

  // async created(){
  //
  // // to make each category to show the products related to id
  // // this will hold all the query parameters that we want to send
  //   const params = {};
  //
  //   if(this.currentCategoryId){
  //     params.category = this.currentCategoryId;
  //   }
  //
  //
  //   let response;
  //   this.loading = true;
  //   try {
  //    response = await axios.get("/api/products", {
  //       params
  //     });
  //
  //     this.loading = false;
  //
  //
  //   } catch(error){
  //     this.loading=false;
  //
  //     return;
  //
  //   }
  //
  //   this.products = response.data["hydra:member"];
  //
  // },

};
</script>

<style scoped>

</style>
