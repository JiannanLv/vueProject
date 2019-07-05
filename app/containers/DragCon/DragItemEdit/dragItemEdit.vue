<!--
 * @Description: 
 * @Author: jiannan.lv
 * @Date: 2019-07-05 11:25:50
 * @LastEditTime: 2019-07-05 17:58:00
 * @LastEditors: jiannan.lv
 -->
<template>
  <div class="drag-item-edit"
       :class="selectItemId ? 'drag-item-edit-active' : ''">
    <ul>
      <li>
        <span>文本名称：</span>
        <input :value="Object.keys(this.itemData).length > 0 ? this.itemData.value : ''"
               @keyup="(e) => itemNameChane(e)" />
      </li>
    </ul>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from "vuex";
  // css
  import "./style.scss";
  export default {
    name: "drag-item-edit",
    data() {
      return {
        itemData: {}
      };
    },
    watch: {
      selectItemId(newId, oldId) {
        this.itemData = newId ? this.dataList[this.selectItemId] : this.itemData;
      }
    },
    computed: {
      ...mapGetters("drag", {
        selectItemId: "selectItemId",
        dataList: "dataList"
      })
    },
    methods: {
      ...mapActions("drag", {
        updateDataList: "updateDataList"
      }),
      // 重命名元素名称
      itemNameChane(e) {
        const event = e || window.event;
        const itemValue = event.target.value;
        this.itemData.value = itemValue;
        const tempParams = {
          id: this.selectItemId,
          data: this.itemData
        };
        this.updateDataList(tempParams);
      }
    }
  };
</script>