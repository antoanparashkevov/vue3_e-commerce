<template>
  <div :class="$style.sidebar">
    <h1>
      {{categoryName}}
    </h1>
  </div>
</template>

<script>
export default {
  name: 'Title',
  props:{
    currentCategoryId:{
      type:String,
      default:null
    },
    categories:{
      type:Array,
      required:true
    }
  },
  computed:{
    categoryName(){
      if(currentCategoryId === null){
        return "All products"
      }
        const category = this.categories.find((cat)=>(cat['@id'] === this.currentCategoryId));

        return category ? category.name : '';

    }
  }
};
</script>

<style lang="scss" scoped module>
.sidebar {
  h1 {
    font-size: 1.7rem;
  }
}
</style>
