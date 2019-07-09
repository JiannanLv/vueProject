<!--
 * @Description: 
 * @Author: jiannan.lv
 * @Date: 2019-07-03 11:23:20
 * @LastEditTime: 2019-07-08 17:28:26
 * @LastEditors: jiannan.lv
 -->
<template>
  <div class="tools-wrap">
    <ul>
      <li title="线"
          @click="lineTonggle()"
          :class="lineBool ? 'line-draw-active' : ''">
        <i class="iconfont iconline" />
      </li>
      <li title="标尺"
          @click="scaleTonggle()">
        <i class="iconfont iconscale" />
      </li>
      <li title="网格"
          @click="griddTonggle()">
        <i class="iconfont icongridding" />
      </li>
      <li title="放大"
          @click="magnifyClick()">
        <i class="iconfont iconmagnify" />
      </li>
      <li title="缩小"
          @click="shrinkClick()">
        <i class="iconfont iconshrink" />
      </li>
    </ul>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from "vuex";
  // css
  import "./style.scss";
  export default {
    name: "tools-wrap",
    data() {
      return {};
    },
    computed: {
      ...mapGetters("drag", {
        lineBool: "lineBool",
        scale: "scale"
      })
    },
    methods: {
      ...mapActions("drag", {
        updateScaleBool: "updateScaleBool",
        updateGridBool: "updateGridBool",
        updateLineBool: "updateLineBool",
        updateScale: "updateScale",
        updateScaleDataList: "updateScaleDataList"
      }),
      // 控制标尺显隐
      scaleTonggle() {
        this.updateScaleBool();
      },
      // 控制网格显隐
      griddTonggle() {
        this.updateGridBool();
      },
      // 是否划线
      lineTonggle() {
        this.updateLineBool();
      },
      //放大事件
      magnifyClick() {
        let scale = Number(this.scale);
        scale += 0.1;
        scale = scale.toFixed(1);
        this.updateScale(scale);
        // this.updateScaleDataList(scale);
        console.log("放大", scale);
      },
      // 缩小事件
      shrinkClick() {
        let scale = Number(this.scale);
        scale = scale <= 0 ? 0 : scale - 0.1;
        scale = scale.toFixed(1);
        this.updateScale(scale);
        // this.updateScaleDataList(scale);
        console.log("缩小", scale);
      }
    }
  };
</script>