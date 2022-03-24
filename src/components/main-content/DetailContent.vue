<template>
  <div>
    <div class="author-info">
      <div>
        <span class="info-name">{{ list.userName }}</span>
        <span class="info-time">{{ list.createTime }}</span>
      </div>
      <div>
        <el-button type="primary" plain size="small">关注</el-button>
      </div>
    </div>
    <div class="box">
      <h2 class="box-title">
        {{ list.title }}
      </h2>
      <div class="box-content" v-html="list.content"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { mock } from "@/typings/components"
import { PropType } from "vue"
const props = defineProps({
  list: {
    type: Object as PropType<mock.MockDetail>,
    default: {},
  },
})
</script>
<style lang="scss" scoped>
.author-info {
  display: flex;
  justify-content: space-between;
  span {
    display: block;
  }
  .info-name {
    font-weight: 700;
    color: #333;
  }
  .info-time {
    color: #909090;
    font-size: 14px;
    margin-top: 7px;
  }
}
</style>
