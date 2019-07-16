/*
 * @Description: 决策树状态管理
 * @Author: jiannan.lv
 * @Date: 2019-07-11 19:33:59
 * @LastEditTime: 2019-07-16 13:23:18
 * @LastEditors: jiannan.lv
 */
// 用户信息
const initState = {
  style: {},
  conditionBol: false,
  actionBol: false,
  selectId: '',
  actionType: ''
};

const actions = {
  // 更新弹框位置
  updateStyle ({ state, commit, rootState }, params) {

    commit('changeStyle', params);

  },
  // 控制条件弹框显隐
  updateConditionBol({ state, commit, rootState }, bool) {
    commit('changeConditionBol', bool);
  },
  // 控制动作弹框显隐
  updateActionBol({state, commit, rootState}, bool) {
    commit('changeActionBol', bool);
  },
  // 更新操作类型
  updateActionType({state, commit, rootState}, type) {
    commit('changeActionType', type);
  },
  // 更新当前节点id
  updateSelectId({state, commit, rootState}, id) {
    commit('changeSelectId', id);
  }
};

const mutations = {
  changeStyle (state, params) {

    state.style = params;

  },
  changeConditionBol (state, bool) {
    state.conditionBol = bool;
    state.actionBol = false;
  },
  changeActionBol(state, bool) {
    state.actionBol = bool;
    state.conditionBol = false;
  },
  changeSelectId (state, id) {
    state.selectId = id;
  },
  changeActionType(state, type) {
    const actionType = type ? type : 'action';
    state.actionType = actionType;
  }
};

const getters = {
  style: state => state.style,
  conditionBol: state => state.conditionBol,
  actionBol: state => state.actionBol,
  selectId: state => state.selectId,
  actionType: state => state.actionType
};

export default {
  namespaced: true,
  state: initState,
  actions,
  getters,
  mutations
};