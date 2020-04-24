import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import firebase from '@/config/firebase'

Vue.config.productionTip = false
let app = '';
firebase.auth.onAuthStateChanged(()=>{
  if(!app){
    new Vue({
      router,
      render: h => h(App)
    }).$mount('#app')
  }
})
