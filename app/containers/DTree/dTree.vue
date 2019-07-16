<!--
 * @Description: 决策树
 * @Author: jiannan.lv
 * @Date: 2019-07-09 14:50:31
 * @LastEditTime: 2019-07-16 13:41:47
 * @LastEditors: jiannan.lv
 -->
<template>
  <div class="d-tree"
       id="dTree"
       @click="hideAlert()">
    <!-- <Tree :data="treeData" /> -->
    <ul class="tree-node-wrap"
        v-for="(item, index) in treeData">
      <TreeNode :treeDataItem="item"
                :index="index" />
    </ul>
    <ConditionCom @change-Tree-Data="changeTreeData"/>
    <ActionCom v-if="actionType" @action-update-tree-data="actionUpdateTreeData" />
  </div>
</template>

<script>
  import { mapGetters, mapActions } from "vuex";
  // containers
  import TreeNode from "./TreeNode/TreeNode.vue";
  import ConditionCom from "./ConditionCom/conditionCom.vue";
  import ActionCom from "./ActionCom/actionCom.vue";
  // tools
  import { changeDataTree, deleteAction } from './dTreeTool';
  // css
  import "./style.scss";
  export default {
    name: "dTree",
    data() {
      return {
        treeData: []
      };
    },
    computed: {
      ...mapGetters("dtree", {
        selectId: "selectId", 
        actionType: "actionType"
      })
    },
    methods: {
      ...mapActions("dtree", {
        updateConditionBol: "updateConditionBol"
      }),
      // 获取决策树数据
      getTreeData() {
        const fetchUrl = "public/json/dTree.json";
        fetch(fetchUrl)
          .then(res => res.json())
          .then(res => {
            this.treeData = res;
          });
      },
      // 隐藏弹框
      hideAlert() {
        this.updateConditionBol(false);
      },
      // 更新树数据
      changeTreeData (key) {
        changeDataTree(this.treeData, this.selectId, key);
        console.log("aasaa", key);
      },
      // 操作更新数据
      actionUpdateTreeData(type) {
        if(type === 'deleteAction') {
          deleteAction(this.treeData, this.selectId);
        }
      }
    },
    created() {
      this.getTreeData();
    },
    components: {
      TreeNode,
      ConditionCom,
      ActionCom
    }
  };
</script>