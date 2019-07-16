/*
 * @Description: 
 * @Author: jiannan.lv
 * @Date: 2019-07-16 11:23:20
 * @LastEditTime: 2019-07-16 13:55:04
 * @LastEditors: jiannan.lv
 */
export const changeDataTree = (data, id, params) => {
  console.log(data, id, params, 11111);
  data.map(item => {
    if(item.nodeType === 'condition' && item.id === id) {
      item.op = params;
    }
    if(item.variableTreeNode && item.variableTreeNode instanceof Object && item.variableTreeNode.conditionTreeNodes) {
      changeDataTree(item.variableTreeNode.conditionTreeNodes, id, params);
    }else if (item.variableTreeNodes && item.variableTreeNodes instanceof Array) {
      changeDataTree(item.variableTreeNodes, id, params);
    }else if (item.conditionTreeNodes) {
      changeDataTree(item.conditionTreeNodes, id, params);
    }
  });
}
export const deleteAction = (data, id) => {
  console.log(data, id, 'delete');
  data.map((item, index) => {
    if(item.id === id) {
      debugger;
      data.splice(index, 1);
    }
    if(item.variableTreeNode && item.variableTreeNode instanceof Object && item.variableTreeNode.conditionTreeNodes) {
      deleteAction(item.variableTreeNode.conditionTreeNodes, id);
    }else if (item.variableTreeNodes && item.variableTreeNodes instanceof Array) {
      deleteAction(item.variableTreeNodes, id);
    }else if (item.conditionTreeNodes) {
      deleteAction(item.conditionTreeNodes, id);
    }
  });
  console.log(data, 'data');
}