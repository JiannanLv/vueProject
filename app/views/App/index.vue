<!--
 * @Description: 
 * @Author: jiannan.lv
 * @Date: 2019-05-09 11:11:47
 * @LastEditTime: 2019-05-20 16:01:44
 * @LastEditors: jiannan.lv
 -->
<template>
  <div id="app">
    <Header-Com/>
    <div class="content-wrap">
      <SideCom/>
      <div class="content" :class="sideBarTroggle ? 'content-active' : ''">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import HeaderCom from "app/components/HeaderCom";
import SideCom from "app/components/SideCom";
import "./style.scss";
export default {
  name: "app",
  data() {
    return {};
  },
  computed: {
    ...mapGetters("common", {
      sideBarTroggle: "sideBarTroggle"
    })
  },
  components: {
    HeaderCom,
    SideCom
  }
};
</script>