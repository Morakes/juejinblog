<template>
  <div class="portrait">
    <img :src="url" alt="头像" />
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  size: {
    type: String,
    default: "50px",
  },
  url: {
    type: String,
    default: "https://p9-passport.byteacctimg.com/img/user-avatar/946976ef78c188733f7fba99f2a966d4~300x300.image",
  },
})
</script>
<style lang="scss" scoped>
.portrait {
  display: inline-block;
  width: v-bind(size);
  height: v-bind(size);
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
}
</style>
