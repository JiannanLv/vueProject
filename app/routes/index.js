/*
 * @Author: jiannan.lv
 * @Date: 2019-05-09 13:48:53
 * @Last Modified by: jiannan.lv
 * @Last Modified time: 2019-05-09 13:50:53
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';

Vue.use(VueRouter);

// 路由配置
const RouterConfig = { routes };
const router = new VueRouter(RouterConfig);
export default router;

// router.beforeEach((to, from, next) => {
//   iView.LoadingBar.start()
//   let brSession = Cookies.get('BR_ROBOT_SESSIONID')
//   if (!brSession && to.name !== 'login') {
//     next({name: 'login'})
//   } else if (from.name === 'login' || (from.name === null && to.name !== 'login')) {
//     store.dispatch('user/getUserInfo').then(res => {
//       if (res.code === '000000') {
//         next()
//       } else {
//         if (res.code === '111111') {
//           iView.Message.error(res.message)
//         }
//         next({name: 'login'})
//       }
//     })
//   } else {
//     next()
//   }
// })

// router.afterEach((to) => {
//   iView.LoadingBar.finish()
//   window.scrollTo(0, 0)
// })