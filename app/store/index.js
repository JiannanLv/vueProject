/*
 * @Description:
 * @Author: jiannan.lv
 * @Date: 2019-05-09 11:11:47
 * @LastEditTime: 2019-07-11 19:36:05
 * @LastEditors: jiannan.lv
 */
import Vue from 'vue';
import Vuex from 'vuex';

import common from './common';
import drag from './drag';
import dtree from './dtree';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        common,
        // 拖拽模块
        drag,
        // 决策树
        dtree  
    }
});
