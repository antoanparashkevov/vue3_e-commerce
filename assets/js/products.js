import { createApp } from 'vue';
import Products from '@/pages/Products';
// eslint-disable-next-line no-console
console.log('VueJS is running! Congratulations');

createApp(Products).mount("#app");
//OR THIS
// const app = createApp(Products);
// app.mount( '#app');


//to write into the console like this: app.Firstname = Ryan
// window.app = app;


//Vue 2
//import Vue from 'vue';
// new Vue({
//     render(h){
//         return h(Products);
//     },
// }).$mount('#app');
//Vue 2 second choice
//import Vue from 'vue';
// new Vue({
//     render(h) => h(Products),
// }).$mount('#app');
