/*
 * @Description: 
 * @Author: jiannan.lv
 * @Date: 2019-06-27 17:24:38
 * @LastEditTime: 2019-07-08 17:09:32
 * @LastEditors: jiannan.lv
 */
import { _UUID, filterLine, renewalLineList, deleteItem, deleteLine } from 'app/utils/tools';
// 初始化模块数据
const defaultConfig = {
  value: "文本测试",
  style: {
    height: 30,
    width: 200
  }
};
// 拖拽模块状态
const initState = {
  dataList: {},
  lineList: {},
  selectItemId: '',
  scaleBool: true,
  gridBool: true,
  lineBool: false,
  // 放大比例
  scale: 1,
  // 线的信息
  lineId: '',
  lineItem: {}
};

const actions = {
  // 选择拖拽元素
  selectDragItem ({ state, commit, rootState }, itemId) {
    commit('updateSelectItemId', itemId);
  },
  // 控制标尺显隐
  updateScaleBool ({ state, commit, rootState }) {
    commit('changeScaleBool');
  },
  // 控制网格显隐
  updateGridBool ({ state, commit, rootState }) {
    commit('changeGridBool');
  },
  // 控制放大、缩小比例
  updateScale({ state, commit, rootState }, scale) {
    commit('changeScale', scale);
  },
  // 更新线的状态，控制是否划线
  updateLineBool ({ state, commit, rootState }) {
    commit('changeLineBool');
  },
  // 生成坐标添加到数据列表
  addItemToDataList ({ state, commit, rootState }, e) {
    let tempList = {};
    let itemConfig = JSON.parse(JSON.stringify(defaultConfig));
    const itemId = _UUID();
    itemConfig.style.left = `${e.offsetX - itemConfig.style.width * state.scale / 2}px`;
    itemConfig.style.top = `${e.offsetY - itemConfig.style.height * state.scale / 2}px`;
    itemConfig.style.width = `${itemConfig.style.width * state.scale}px`;
    itemConfig.style.height = `${itemConfig.style.height * state.scale}px`;
    tempList[itemId] = itemConfig;
    commit('addItem', tempList);
  },
  // 放大、缩小更新列表
  updateScaleDataList({ state, commit, rootState }, scale) {
    const { dataList } = state;
    let tempDataList = { ...dataList };
    Object.keys(dataList).map(key => {
      tempDataList[key].style.height = `${parseInt(tempDataList[key].style.height) * scale}px`;
      tempDataList[key].style.width = `${parseInt(tempDataList[key].style.width) * scale}px`;
    });
    commit('changeScaleDataList', tempDataList);
  },
  // 拖拽后组件位置更新到dataList列表
  updateDataList({ state, commit, rootState }, params) {
    commit('changeDatalist', params);
  },
  // 组件拖拽，更新线列表
  updateLineList ({ state, commit, rootState }, params) {
    commit('changeLineList', params);
  },
  // 添加线到线列表
  addLineToLineList ({ state, commit, rootState }, lineItem) {
    commit('addLine', lineItem);
  },
  // 删除拖拽元素
  deleteDragItem({ state, commit, rootState }, id) {
    commit('deleteItem', id);
  },
  // ******************************线信息修改***************************
  // lineId修改
  addLineId ({ state, commit, rootState }, lineId) {
    commit('changeLineId', lineId);
  },
  // 更新线的状态信息
  updateLineInfo ({ state, commit, rootState }, lineItem) {
    commit('changeLineInfo', lineItem);
  }
};

const mutations = {
  // 更新选中拖拽组件id
  updateSelectItemId (state, itemId) {
    state.selectItemId = itemId;
  },
  // 控制标尺显隐
  changeScaleBool (state) {
    state.scaleBool = !state.scaleBool;
  },
  // 控制网格显隐
  changeGridBool (state) {
    state.gridBool = !state.gridBool;
  },
  // 控制是否划线
  changeLineBool (state) {
    state.lineBool = !state.lineBool;
  },
  // 控制放大、缩小比例
  changeScale(state, scale) {
    state.scale = scale;
  },
  // 添加组件
  addItem (state, tempList) {
    state.dataList = Object.assign({}, state.dataList, tempList);
  },
  // 拖拽组件列表更新
  changeDatalist(state, params) {
    const tempDataList = { ...state.dataList };
    tempDataList[params.id] = params.data;
    state.dataList = tempDataList;
  },
  // 更新放大、缩小组件列表
  changeScaleDataList(state, tempList) {
    state.dataList = tempList;
  },
  // 删除元素
  deleteItem(state, id) {
    const tempLineList = deleteLine(state.lineList, id);
    state.dataList = deleteItem(state.dataList, id);
    state.lineList = tempLineList;
  },
  // 添加线
  addLine (state, lineItem) {
    let bool = false;
    const tempLineList = Object.assign({}, state.lineList, lineItem);
    Object.keys(lineItem).map(key => {
      if (lineItem[key].target) bool = true;
    });
    state.lineList = bool ? filterLine(tempLineList) : tempLineList;
  },
  // 组件拖动，更新线的状态
  changeLineList (state, params) {
    const changeLineList = renewalLineList(state.lineList, state.dataList, params);
    state.lineList = changeLineList;
  },
  //改变线id信息
  changeLineId (state, lineId) {
    state.lineId = lineId;
  },
  //更新线信息
  changeLineInfo (state, lineItem) {
    state.lineItem = lineItem;
  }
};

const getters = {
  dataList: state => state.dataList,
  selectItemId: state => state.selectItemId,
  scaleBool: state => state.scaleBool,
  gridBool: state => state.gridBool,
  lineBool: state => state.lineBool,
  lineList: state => state.lineList,
  lineId: state => state.lineId,
  lineItem: state => state.lineItem,
  scale: state => state.scale
};

export default {
  namespaced: true,
  state: initState,
  actions,
  getters,
  mutations
};