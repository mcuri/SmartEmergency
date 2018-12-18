import Vue from 'vue'
import App from './App.vue'

import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import BootstrapVue from 'bootstrap-vue'
import VueMeta from 'vue-meta';
// utilizar {} pq não é exportado como padrão
import { routes } from './routes';

Vue.use(VueResource);
Vue.http.options.root = 'http://10.7.40.62:1026';

Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(VueMeta);

const router = new VueRouter({
  routes: routes,
  mode: 'history'
});

// Global View Object
new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
