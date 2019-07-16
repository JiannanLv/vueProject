<!--
 * @Description: 决策树
 * @Author: jiannan.lv
 * @Date: 2019-07-09 14:50:31
 * @LastEditTime: 2019-07-10 16:04:33
 * @LastEditors: jiannan.lv
 -->
<template>
  <div class="d-tree"
       v-html="htmlStr">
  </div>
</template>

<script>
  // css
  import "./style.scss";
  export default {
    name: "d-tree",
    data() {
      return {
        treeData: {},
        htmlStr: ""
      };
    },
    watch: {
      treeData(newV, oldV) {
        this.testa(newV);
      }
    },
    methods: {
      getTreeData() {
        const fetchUrl = "public/json/dTree.json";
        fetch(fetchUrl)
          .then(res => res.json())
          .then(res => {
            this.treeData = res[0];
            console.log(res, "this.treeData");
          });
      },
      testa(data) {
        const variableData = data.variableTreeNode ? data.variableTreeNode : [];
        console.log(variableData, "variableData");
        if (variableData instanceof Object) {
          // <i class="iconfont iconsure" /><i class="iconfont iconretract" />
          this.htmlStr += `<div class="main-node" style="top: 50%;"><span>${variableData.left.leftPart.variableCategory} ${variableData.left.leftPart.variableLabel}</span></div>`;
          variableData.conditionTreeNodes.map((item, index) => {
            this.htmlStr += `<div class="main-node" style="top: ${(index + 1) * 50}px; left: 200px;"><span>${item.value.constantLabel}</span></div>`;
            if (item.variableTreeNodes) {
              // this.testa(item);
              console.log(item, "item");
            }
          });
        } 
        console.log(this.htmlStr, "hahahah");
        // else if (variableData instanceof Array) {
        //   variableData.map(item => {
        //     item.conditionTreeNodes.map(childItem => {
        //       this.htmlStr += `<div class="main-code">${item.value.constantLabel}</div>`;
        //       console.log(this.htmlStr, "hahahah");
        //       if (item.variableTreeNodes) {
        //         // this.testa(item);
        //         console.log(item, "item");
        //       }
        //     });
        //   });
        // }
        // return this.htmlStr;
      }
    },

    created() {
      this.getTreeData();
    }
  };
</script>