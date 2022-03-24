<template>
  <div class="main">
    <div class="main-inside">
      <div class="main-inside-content">
        <slot name="main"></slot>
      </div>
      <div class="main-inside-sidebar">
        <slot name="sidebar"></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>
<style lang="scss" scoped>
.main {
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  .main-inside {
    margin-top: 16px;
    width: 960px;
    display: flex;
    justify-content: space-between;
    .main-inside-content {
      width: 700px;
      background: white;
      border-radius: 2px;
    }
    .main-inside-sidebar {
      width: 240px;
      border-radius: 2px;
    }
  }
}
</style>
