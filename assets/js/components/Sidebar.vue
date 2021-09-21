<template>
  <!--  like this we can make style dynamic by adding colon -->
  <!--  :style="'width: ' + collapsed ? '40px' : 'auto'" -->
  <!--  or-->
  <!--  :style="{width: collapsed? '70px' : 'auto'}"-->
  <!--  or-->
  <!--  :class="{
      [$style.sidebar]: true,
      [$style.collapsed]:collapsed,
       'p-3':true,
       'mb-5':true
    }"-->
  <!--  OR put all things into computed property componentClasses-->
  <div
      :class="componentClasses"
  >
    <!--    v-if or v-show-->
    <div v-show="!collapsed">
      <h5 class="text-center">
        Categories
      </h5>
      <ul class="nav flex-column mb4">
        <li
            class="nav-item"
        >
          <!--          [] syntax is needed tha our key(selected) is a dynamic expression-->
          <a
              :class="{
            'nav-link':true,
              'selected': currentCategoryId === null
              }"
              href="/"
          >
            All Products
          </a>

        </li>

        <!--     we use v-for directive like this-->
        <li
            v-for="category in categories"
            :key="category['@id']"
            class="nav-item"
        >
          <a
              :class="{
            'nav-link':true,
              'selected':  category['@id'] === currentCategoryId,
              }"
              :href="`/category/${category.id}`"
          >{{ category.name }}</a>
        </li>

      </ul>

      <hr>
    </div>

    <div class="d-flex justify-content-end">
      <!--      add &lt; to prevent opening an HTML tag-->
      <!--      v-text is another Vue directive next to the v-bind(:) and v-for-->
      <div
          class="btn btn-secondary btn-sm"
          v-text="collapsed? '>>' : '&lt;< Collapse'"
          @click="$emit('toggleCollapsed')"
      >

      </div>
    </div>

  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Sidebar',
  props: {
    collapsed: {
      type: Boolean,
      required: true,
    }
  },
  data: () => ({
    //set it false so that the component start not collapsed
    categories: [],
    //we could add a data and initialize it to window.currentCategoryId
    //we replace this with computed property
    //currentCategoryId: window.currentCategoryId,
  }),
  mounted() {
    axios.get('/api/categories')
        .then((response) => {
          console.log(response);
        });
  },
  async created() {
    const response = await axios.get('/api/categories');
    this.categories = response.data['hydra:member'];
    console.log(response.data['hydra:member']);

  },
  // methods: {
  //   toggleCollapsed() {
  //     console.log('Clicked');
  //     //we are going to emit custom event toggle-collapsed.
  //     //instead of changing collapsed prop like this
  //     // this.collapsed= !this.collapsed;
  //     // this.$emit('toggle-collapsed');
  //     console.log(this.componentClasses);
  //   }
  // },
  computed: {
    componentClasses() {
      const classes = [this.$style.sidebar, 'p-3', 'mb-5'];

      if (this.collapsed) {
        classes.push(this.$style.collapsed);
      }
      return classes;
    },
    //currentCategoryId is a global javaScript variable and
    //it can be used in Vue components with window.
    currentCategoryId() {
      return window.currentCategoryId;
    }
  }
};
</script>

<style lang="scss" module>
@import "~styles/components/light-component";

//or just type :global here
.sidebar :global {
  @include light-component;

  //if the element have both sidebar and collapsed, set the width to 70 px
  &.collapsed {
    width: 70px;
  }

  ul {
    li a:hover {
      //we can use blue-component-link-hover which i can find in scss/variables/colors
      //because in components/light-component i import @import '../variables/colors';
      background: $blue-component-link-hover;
      background: pink;
    }

    //we are inside of modular .sidebar class
    //and instead [$style.selected], just type 'selected' in our template
     li a.selected {
      //this comes directly from /variables/colors
      //from the light-component.scss mixin we are using
      background: $light-component-border;
    }
  }
}
</style>
