import Vue from 'vue/dist/vue.min.js';

import styles from './Ball.css';

// Define a new component called todo-item
module.exports = function() {
  Vue.component('ball', {
    template: `
    <svg class="${styles['dragon-ball']}"  viewBox = "0 0 100 100" version = "1.1">
      <circle cx = "50" cy = "50" r = "50" fill = "orange" stroke = "navy" stroke-width = "0"/>
        <polygon fill="red" points="45,45 50,25 55,45 75,45 60,55 65,75 50,65 35,75 40,55 25,45 45,45" />
    </svg>`
  });
}
