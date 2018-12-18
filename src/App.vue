<template>
  <div id="app">
    <app-header />

    <transition name="page">
        <router-view></router-view>
    </transition>

    <app-footer />
  </div>
</template>

<script>
import { routes } from './routes';

import Header from './components/shared/Header.vue';
import Footer from './components/shared/Footer.vue';
import EmergencyCallForm from './components/emergency/EmergencyCallForm.vue';
import EmergencyTrack from './components/emergency/EmergencyTrack.vue';


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  name: 'app',
  components: {
    'app-header': Header,
    'app-footer': Footer,
    'emergency-call-form': EmergencyCallForm,
    'emergency-track': EmergencyTrack
  },
  metaInfo: {
      title: 'Smart Emergency',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' }
      ]
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
  .page-enter, .page-leave-active {
      opacity: 0;
  }
  .page-enter-active, .page-leave-active {
      transition: opacity .5s;
  }
</style>
