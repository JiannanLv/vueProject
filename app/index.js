/*
 * @Author: jiannan.lv
 * @Date: 2019-05-09 10:19:58
 * @Last Modified by: jiannan.lv
 * @Last Modified time: 2019-05-09 13:51:41
 */
import Vue from 'vue';
import App from 'app/views/App/index.vue';
import 'app/styles/reset.scss';
import 'app/styles/index.scss';
import router from 'app/routes';
import store from './store'
// import iview from 'iview'
// import Music from './components/common/Music'
// import '@/assets/styles/bview.less'
// import './utils/resourceConf'

// Vue.use(iview)
// Vue.config.productionTip = false

// Vue.component('Music', Music)

/* eslint-disable no-new */
new Vue({
    el: '#App',
    router,
    store,
    render: h => h(App)
});
