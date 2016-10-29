import Vue from 'vue/dist/vue.min.js';

require('./components/Ball.js')();

var app = new Vue({
  el: '#app',
  data: {
    message: 'Coming soon!',
    notes: 'You loaded this page on ' + new Date()
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
})
