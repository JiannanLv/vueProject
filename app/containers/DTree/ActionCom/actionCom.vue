<!--
 * @Description: 
 * @Author: jiannan.lv
 * @Date: 2019-07-16 11:52:04
 * @LastEditTime: 2019-07-16 13:38:55
 * @LastEditors: jiannan.lv
 -->
<template>
  <div class="action-com"
       :class="actionBol ? 'action-com-active' : ''"
       :style="style">
    <div class="arrow-wrap">
      <span class="arrow"></span>
    </div>
    <ul>
      <li v-for="key in Object.keys(action[actionType])"
          @click="() => actionClick(key)">{{action[actionType][key]}}</li>
    </ul>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from "vuex";
  // staticdata
  import { action } from "../condition";
  // css
  import "./style.scss";
  export default {
    name: "action-com",
    data() {
      return {
        action: action
      };
    },
    computed: {
      ...mapGetters("dtree", {
        actionBol: "actionBol",
        style: "style",
        actionType: "actionType"
      })
    },
    methods: {
      // 操作点击事件
      actionClick(type) {
        console.log(type, "type");
        this.$emit('action-update-tree-data', type);
      }
    }
  };
</script>