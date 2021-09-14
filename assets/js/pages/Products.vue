<template>
  <div class="container-fluid">
    <div class="row">
      <aside class="col-xs-12 col-3">
      <sidebar-component></sidebar-component>
      </aside>
      <div class="col-xs-12 col-9">
        <catalog-component></catalog-component>
      </div>
    </div>
  </div>
</template>

<script>
import SidebarComponent from '@/components/Sidebar';
import CatalogComponent from '@/components/Catalog';
export default {
  name: "Products",
  components:{
    SidebarComponent,
    CatalogComponent
  },
};
</script>


