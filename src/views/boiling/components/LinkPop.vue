<template>
  <div>
    <el-popover placement="bottom" :width="200" trigger="click">
      <template #reference>
        <span>
          <slot></slot>
        </span>
      </template>
      <div>我是链接组件</div>
    </el-popover>
  </div>
</template>

<script lang="ts" setup></script>
<style lang="scss" scoped></style>
