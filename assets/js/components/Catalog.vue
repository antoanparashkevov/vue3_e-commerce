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
    <div class="col-xs-12 col-6 mb-2 pb-2">
      TODO - load some products!
    </div>
  </div>
  <div class="row">
    <legend-component :title="legend + ' this is a javascript'"></legend-component>
  </div>
</section>
</template>

<script>
import LegendComponent from './Legend';
export default {
  name: 'Catalog',
  components:{
    LegendComponent,
  },
  data: () => ({
    // firstName: 'Antoan',
    legend:'Antoan,'
  }),
};
</script>

<style scoped>

</style>
