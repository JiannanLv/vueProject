<!--
 * @Description: 
 * @Author: jiannan.lv
 * @Date: 2019-07-10 16:34:28
 * @LastEditTime: 2019-07-16 13:43:42
 * @LastEditors: jiannan.lv
 -->
<template>
  <li :class="index === 0 ? 'aaa' : ''">
    <div class="child-node-line"
         :class="length === 0 || index === parseInt((length / 2)) ? '' : index < length / 2 ? 'child-node-line-top' : 'child-node-line-bottom'"
         :style="`height: 100px`"></div>
    <div class="tree-node">
      <span v-show="treeDataItem.op"
            class="condition-span"
            @click="(e) => selectCondition(e, treeDataItem.id)">{{condition[treeDataItem.op]}}</span>
      <span v-show="treeDataItem.variableTreeNode && treeDataItem.variableTreeNode.left">{{treeDataItem.variableTreeNode && treeDataItem.variableTreeNode.left.leftPart.variableCategory}} {{treeDataItem.variableTreeNode && treeDataItem.variableTreeNode.left.leftPart.variableLabel}}</span>
      <span v-show="treeDataItem.left">{{treeDataItem.left && treeDataItem.left.leftPart.variableCategory}} {{treeDataItem.left && treeDataItem.left.leftPart.variableLabel}}</span>
      <span v-show="treeDataItem.value">{{treeDataItem.value && treeDataItem.value.constantLabel}}</span>
      <i class="iconfont iconsure" @click="(e) => iconSureClick(e, treeDataItem.id, treeDataItem.nodeType)" />
      <i v-if="treeDataItem.priority !== 0" class="iconfont iconretract" />
    </div>
    <ul class="tree-node-ul"
        v-if="(treeDataItem.variableTreeNode && treeDataItem.variableTreeNode.conditionTreeNodes && treeDataItem.variableTreeNode instanceof Object)">
      <TreeNode v-for="(item, index) in treeDataItem.variableTreeNode.conditionTreeNodes"
                :treeDataItem="item"
                :index="index"
                :length="lengtht"
                :key="index" />
    </ul>
    <ul class="tree-node-ul"
        v-if="(treeDataItem.variableTreeNodes && treeDataItem.variableTreeNodes.length > 0)">
      <TreeNode v-for="(item, index) in treeDataItem.variableTreeNodes"
                :treeDataItem="item"
                :index="index"
                :length="lengtht"
                :key="index" />
    </ul>
    <ul class="tree-node-ul"
        v-if="(treeDataItem.conditionTreeNodes && treeDataItem.conditionTreeNodes.length > 0)">
      <TreeNode v-for="(item, index) in treeDataItem.conditionTreeNodes"
                :treeDataItem="item"
                :index="index"
                :length="lengtht"
                :key="index" />
    </ul>
    <ul class="tree-node-ul"
        v-if="treeDataItem.actionTreeNodes">
      <li v-for="item in treeDataItem.actionTreeNodes"
          style="margin-top: 0">
        <TreeNode v-for="(childItem, index) in item.actions"
                  :treeDataItem="childItem"
                  :length="lengtht"
                  :key="index" />
      </li>
    </ul>
  </li>
</template>

<script>
  import { mapGetters, mapActions } from "vuex";
  // staticdata
  import { condition } from "../condition";
  // css
  import "./style.scss";
  export default {
    name: "TreeNode",
    props: {
      treeDataItem: Object,
      index: Number,
      length: Number
    },
    computed: {
      lengtht() {
        if (
          this.treeDataItem.variableTreeNode &&
          this.treeDataItem.variableTreeNode.conditionTreeNodes
        ) {
          // console.log(
          //   this.treeDataItem.variableTreeNode.conditionTreeNodes.length
          // );
          return this.treeDataItem.variableTreeNode.conditionTreeNodes.length;
        } else if (
          this.treeDataItem.variableTreeNode &&
          this.treeDataItem.variableTreeNode instanceof Object
        ) {
          // console.log(this.treeDataItem.variableTreeNode.length);
        } else {
          return 0;
        }
      }
    },
    data() {
      return {
        condition: condition
      };
    },
    methods: {
      ...mapActions("dtree", {
        updateConditionBol: "updateConditionBol",
        updateActionBol: "updateActionBol",
        updateStyle: "updateStyle",
        updateSelectId: "updateSelectId",
        updateActionType: "updateActionType"
      }),
      // 阻止冒泡
      preventClick(event) {
        event.stopPropagation();
        event.preventDefault();
      },
      // 选择条件
      selectCondition(e, id) {
        const event = e || window.event;
        const dTree = document.getElementById('dTree');
        const params = {
          left: `${event.clientX - 298}px`,
          top: `${event.clientY + dTree.scrollTop - 35}px`
        };
        this.preventClick(event);
        this.updateConditionBol(true);
        this.updateStyle(params);
        this.updateSelectId(id);
        console.log(id, 'id');
      },
      iconSureClick(e, id, type) {
        console.log(type, 'type');
        const event = e || window.event;
        const dTree = document.getElementById('dTree');
        const params = {
          left: `${event.clientX - 298}px`,
          top: `${event.clientY + dTree.scrollTop - 35}px`
        };
        this.updateActionType(type);
        this.preventClick(event);
        this.updateStyle(params);
        this.updateActionBol(true);
        this.updateSelectId(id);
        console.log(id, 'id');
      }
    }
  };
</script>