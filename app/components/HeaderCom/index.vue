<!--
 * @Description: 
 * @Author: jiannan.lv
 * @Date: 2019-05-09 11:20:46
 * @LastEditTime: 2019-05-20 15:48:28
 * @LastEditors: jiannan.lv
 -->
<template>
  <div class="header" id="header-com">
    <i class="iconfont iconcaidan" @click="controlDisplay"/>
    <span class="header-title">Vue测试</span>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import "./style.scss";
export default {
  name: "header-com",
  data() {
    return {};
  },
  methods: {
    ...mapActions("common", {
      updateTroggleStatus: "updateTroggleStatus"
    }),
    controlDisplay() {
      this.updateTroggleStatus()
    }
  }
};
</script>
<style>
</style>