<!--
 * @Description: 
 * @Author: jiannan.lv
 * @Date: 2019-07-11 17:40:29
 * @LastEditTime: 2019-07-16 11:21:24
 * @LastEditors: jiannan.lv
 -->
<template>
  <div class="condition-com"
       :class="conditionBol ? 'condition-com-active' : ''" :style="style">
    <div class="arrow-wrap">
      <span class="arrow"></span>
    </div>
    <ul>
      <li v-for="key in Object.keys(condition)" @click="() => changeConditionClick(key)">{{condition[key]}}</li>
    </ul>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from "vuex";
  // staticdata
  import { condition } from "../condition";
  // css
  import "./style.scss";
  export default {
    name: "condition-com",
    data() {
      return {
        condition: condition
      };
    },
    computed: {
      ...mapGetters("dtree", {
        conditionBol: "conditionBol",
        style: "style"
      })
    },
    methods: {
      // 选择条件改变
      changeConditionClick(key) {
        console.log(key, "this.key");
        this.$emit('change-Tree-Data', key);
      }
    }
  };
</script>