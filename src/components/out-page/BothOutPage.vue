<template>
  <div class="main">
    <div class="main-inside">
      <div class="main-inside-left">
        <slot name="sideleft"></slot>
      </div>
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
  .main-inside {
    margin-top: 16px;
    width: 1200px;
    position: relative;
    display: flex;
    justify-content: space-between;
    height: 100%;
    .main-inside-left {
      width: 180px;
      position: relative;
    }
    .main-inside-content {
      width: 712px;
      border-radius: 2px;
    }
    .main-inside-sidebar {
      width: 260px;
      border-radius: 2px;
    }
  }
}
</style>
