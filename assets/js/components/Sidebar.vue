<template>
  <!--  like this we can make style dynamic by adding colon -->
  <!--  :style="'width: ' + collapsed ? '40px' : 'auto'" -->
  <div
      :class="[$style.sidebar, 'p-3','mb-5']"
      :style="{width: collapsed? '70px' : 'auto'}"

  >
    <h5 class="text-center">
      Categories
    </h5>
    <ul class="nav flex-column mb4">
      <!--     we use v-for directive like this-->
      <li
          v-for="(category, index) in categories"
          :key="index"
          class="nav-item"
      >
        <a
            class="nav-link"
            :href="category.link"
        >{{ category.name }}</a>
      </li>

    </ul>

    <hr>
    <div class="d-flex justify-content-end">
      <!--      add &lt; to prevent opening an HTML tag-->
      <!--      v-text is another Vue directive next to the v-bind(:) and v-for-->
      <div
          class="btn btn-secondary btn-sm"
          v-text="collapsed? '>>' : '&lt;< Collapse'"
          @click="toggleCollapsed"
      >

      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  data: () => ({
    //set it false so that the component start not collapsed
    collapsed: false,
    categories: [
      {
        name: 'Data Matrix Printers',
        link: '#'
      },
      {
        name: 'Iomega Zip Drives',
        link: '#'
      }

    ],
  }),
  methods: {
    toggleCollapsed() {
      console.log('Clicked');
      this.collapsed= !this.collapsed;
    }
  }
};
</script>

<style lang="scss" module>
@import "~styles/components/light-component";

.sidebar {
  @include light-component;

  ul {
    li a:hover {
      //we can use blue-component-link-hover which i can find in scss/variables/colors
      //because in components/light-component i import @import '../variables/colors';
      background: $blue-component-link-hover;
      background: pink;
    }
  }
}
</style>
