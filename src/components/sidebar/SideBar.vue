<template>
  <div class="sidebar-box">
    <div class="item" v-for="(item, index) in list">
      <img :src="item.cover" alt="" />
    </div>
    <div class="sticky">
      <div class="item" v-for="(item, index) in list">
        <img v-if="index > 1" :src="item.cover" alt="" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { PropType } from "vue"
const props = defineProps({
  list: Array as PropType<Array<{ cover: string }>>,
})
</script>
<style lang="scss" scoped>
.sidebar-box {
  position: relative;
  height: 100%;
  .item {
    padding-bottom: 10px;
    img {
      width: 100%;
    }
  }
  .sticky {
    position: sticky;
    top: 45px;
    z-index: 0;
    img {
      width: 100%;
    }
  }
}
</style>
