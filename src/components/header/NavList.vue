<template>
  <div class="nav">
    <div class="nav-box">
      <ul>
        <li v-for="item in list" @click="changeActive(item)" :class="{ active: active == item ? true : false }">{{ item }}</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue"
const list = ref(["推荐", "关注", "后端", "前端", "Android", "IOS", "uniapp", "人工智能"])
const active = ref("推荐")
const changeActive = (item: string) => {
  active.value = item
}
</script>
<style lang="scss" scoped>
.nav {
  height: 45px;
  background: white;
  line-height: 45px;
  .nav-box {
    width: 960px;
    margin: auto;
    ul {
      display: flex;
      list-style-type: none;
      padding: 0px;
      color: #71777c;
      font-size: 14px;
      margin: 0px;
      li {
        margin-right: 20px;
        cursor: pointer;
      }
      li:hover {
        transition: all 0.2s;
        transform: scale(1.1);
        color: #007fff;
      }
      .active {
        color: #007fff;
      }
    }
  }
}
</style>
