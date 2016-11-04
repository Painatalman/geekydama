import Vue from 'vue';

require('../Ball.js')();
require('../MrPopo.js')();

import styles from './Splash.css';

// Define a new component called todo-item
module.exports = function() {
  Vue.component('splash-page', {
    props: ['message'],
    template: `
    <div class=${styles['page-splash']}>
     <div class=${styles['page-splash__content']}>
      <ball></ball>
      <div class=${styles['page-splash__content-message']}>
        {{message}}
      </div>
     </div>
     <div class=${styles['animation-delayed']}>
       <mr-popo size=large message="I'll say!"></mr-popo>
     </div>
    </div>
    `
  });
}
