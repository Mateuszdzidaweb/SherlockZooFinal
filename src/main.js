import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false


import VCalendar from 'v-calendar';

import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

// Use v-calendar & v-date-picker components
Vue.use(VCalendar, {
    componentPrefix: 'vc', // Use <vc-calendar /> instead of <v-calendar />
   // ...other defaults
});


new Vue({
    router,
    render: h => h(App)
}).$mount('#app')