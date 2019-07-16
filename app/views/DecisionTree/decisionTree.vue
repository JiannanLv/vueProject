<!--
 * @Description: 决策树
 * @Author: jiannan.lv
 * @Date: 2019-07-09 11:39:24
 * @LastEditTime: 2019-07-09 14:55:38
 * @LastEditors: jiannan.lv
 -->
<template>
  <div class="decision-tree">
    <DTree />
  </div>
</template>

<script>
  // containers
  import DTree from 'app/containers/DTree/dTree.vue';
  // css
  import './style.scss';
  export default {
    name: "decision-tree",
    data() {
      return {};
    },
    components: {
      DTree
    }
  };
</script>