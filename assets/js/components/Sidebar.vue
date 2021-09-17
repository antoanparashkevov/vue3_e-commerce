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
export default {
  name: 'Sidebar',
  props:{
    collapsed: {
      type:Boolean,
      required:true,
    }
  },
  data: () => ({
    //set it false so that the component start not collapsed
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
  created(){
    console.log(this, this.categories,this.componentClasses);
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
  computed:{
    componentClasses(){
      const classes = [this.$style.sidebar,'p-3', 'mb-5'];

      if(this.collapsed){
        classes.push(this.$style.collapsed);
      }
      return classes;
    }
  }
};
</script>

<style lang="scss" module>
@import "~styles/components/light-component";

.sidebar {
  @include light-component;

  //if the element have both sidebar and collapsed, set the width to 70 px
  &.collapsed{
    width: 70px;
  }

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
