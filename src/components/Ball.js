import Vue from 'vue/dist/vue.min.js';

// Define a new component called todo-item
module.exports = function() {
  Vue.component('ball', {
    template: '<svg class="dragon-ball" style="margin: auto; width: 50px; position: absolute: top: 36%;" viewBox = "0 0 100 100" version = "1.1"><circle cx = "50" cy = "50" r = "50" fill = "orange" stroke = "navy" stroke-width = "0"/><polygon fill="red" points="45,45 50,25 55,45 75,45 60,55 65,75 50,65 35,75 40,55 25,45 45,45" /></svg>'
  });
}
