import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

import hljs from 'highlight.js' //导入代码高亮文件
import 'highlight.js/styles/googlecode.css'  

//use v-highlight
//自定义一个代码高亮指令
Vue.directive('highlight',function (el) {
  let highlight = el.querySelectorAll('pre code');
  highlight.forEach((block)=>{
      hljs.highlightBlock(block)
  })
})

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(mavonEditor)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
