import Vue from 'vue'
import App from './App.vue'

Vue.directive('button',{
  bind(el,binding,vnode) {
    el.style.backgroundColor = '#808080';
    el.style.color = '#FFF';
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
