<template>
  <div>
    <el-popover placement="bottom" :width="350" trigger="click">
      <template #reference>
        <span>
          <slot></slot>
        </span>
      </template>
      <div>
        <el-input size="small" placeholder="搜索话题名称" suffix-icon="el-icon-search"></el-input>
        <el-divider></el-divider>
        <el-scrollbar height="300px" class="scroll">
          <div v-for="(item, index) in list" class="scroll-item" @click="$emit('getTopic', `#${item.topic}#`)">
            <span v-if="item.isRem" class="rem">荐</span>
            <span v-if="item.isAward" class="award">奖</span>
            <span>{{ `# ${item.topic} #` }}</span>
          </div>
        </el-scrollbar>
      </div>
    </el-popover>
  </div>
</template>

<script lang="ts" setup>
import * as mock from "@/utils/mock/boiling/topicPop"
const list = mock.list
</script>
<style lang="scss" scoped>
:deep(.el-divider--horizontal) {
  margin: 10px 0;
}
.scroll-item {
  margin: 20px 0px 20px 10px;
  cursor: pointer;
  span {
    margin-right: 10px;
  }
  .rem {
    color: #ff5132;
    background: #ffe6db;
    padding: 3px 4px;
    border-radius: 2px;
    font-size: 12px;
  }
  .award {
    color: #ff971e;
    background: #fff3db;
    padding: 3px 4px;
    border-radius: 2px;
    font-size: 12px;
  }
}
</style>
