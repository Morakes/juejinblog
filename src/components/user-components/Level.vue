<template>
  <span class="level">{{ `Lv${level}` }}</span>
</template>

<script lang="ts" setup>
const props = defineProps({
  level: {
    type: Number,
    default: 1,
  },
})
</script>
<style lang="scss" scoped>
.level {
  display: block;
  display: inline-block;
  height: 14px;
  line-height: 14px;
  color: white;
  background: #21a9fd;
  font-size: 10px;
  font-weight: bold;
  border-radius: 2px;
  padding: 0 1px;
}
</style>
