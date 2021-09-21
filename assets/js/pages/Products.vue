<!--IMPORTANT-->
<!--We communicate down from Product.vue to Sidebar.vue with props-->
<!--We made sidebarCollapsed data in Product.vue(higher component) and added collapsed prop in Sidebar.vue(down component)-->
<!--But the button doesn't work because we can't change the prop data.-->


<!--To communicate up from Sidebar.vue to Product.vue we can use $emit-->
<!--Emit is not a custom event, this event comes from Vue-->
<!--Emit is build-in event -->
<template>
  <div class="container-fluid">
    <div class="row">
      <aside :class="asideClass">
<!--        current-category-id is the prop who is locate in Sidebar.vue.
            currentCategoryId is our computed property in Product.vue-->
      <sidebar-component
          :collapsed="sidebarCollapsed"
          @toggle-collapsed="toggleSidebarCollapsed"
          :current-category-id="currentCategoryId"
      />
      </aside>
      <div :class="catalogClass">
        <catalog-component></catalog-component>
      </div>
    </div>
  </div>
</template>

<script>
import SidebarComponent from '@/components/Sidebar';
import CatalogComponent from '@/components/Catalog';
import { getCurrentCategoryId } from '../services/page-contex';
export default {
  name: "Products",
  components:{
    SidebarComponent,
    CatalogComponent
  },
  data:() => ({
    sidebarCollapsed:false,
  }),
  computed:{
    asideClass(){
      return this.sidebarCollapsed ? 'aside-collapsed' : 'col-xs-12 col-3';
    },
    catalogClass(){
      return this.sidebarCollapsed ? 'col-xs-12 col-11' : 'col-xs-12 col-9';
    },
    //currentCategoryId is a global javaScript variable and
    //it can be used in Vue components with window.
    //this is a nice way to communicate information from server to our front-end app
    currentCategoryId() {
      return getCurrentCategoryId();
    },
  },
  methods:{
    toggleSidebarCollapsed(){
      this.sidebarCollapsed=!this.sidebarCollapsed;
    }
  },
};
</script>


