<template>
  <div>
    <div v-for="item in list" class="item">
      <div class="item-cover">
        <img :src="item.cover" alt="" />
      </div>
      <div class="item-right">
        <div class="item-title">
          <span>{{ item.preSalt ? "预售" : "" }}</span>
          <span>{{ item.title }}</span>
        </div>
        <div class="item-desc">{{ item.desc }}</div>
        <div class="item-userInfo">
          <head-portrait :url="item.avatar" size="26px"></head-portrait>
          <span class="item-userName">{{ item.userName }}</span>
          <span class="item-level"><Level :level="item.level"></Level></span>
          <span class="item-tag">{{ item.tag[0] }}</span>
        </div>
        <div class="item-bookInfo">
          <span class="item-amount">{{ `￥${item.amount}` }}</span>
          <span class="item-chapters">{{ `${item.chapters}小节 · ${item.purchaser}已购买` }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { mock } from "@/typings/components"
import HeadPortrait from "@/components/user-components/HeadPortrait.vue"
import Level from "@/components/user-components/Level.vue"
import { PropType } from "vue"
const props = defineProps({
  list: {
    type: Array as PropType<mock.MockBooksList>,
    default: [],
  },
})
</script>
<style lang="scss" scoped>
.item {
  cursor: pointer;
  display: flex;
  padding: 10px 20px;
  .item-cover img {
    width: 100px;
    height: 140px;
    object-fit: cover;
  }
  .item-right {
    margin-left: 20px;
    .item-title {
      font-size: 20px;
      color: #2e3135;
      font-weight: 400;
    }
    .item-desc {
      margin-top: 5px;
      height: 20px;
      line-height: 20px;
      color: #71777c;
    }
    .item-userInfo {
      height: 30px;
      margin-top: 6px;
      display: flex;
      align-items: center;
      .item-userName {
        font-size: 14px;
        margin-left: 10px;
      }
      .item-level {
        margin-left: 10px;
      }
      .item-tag {
        margin-left: 10px;
        color: #333;
        font-size: 13px;
      }
    }
    .item-bookInfo {
      margin-top: 5px;
      .item-amount {
        font-size: 18px;
        color: #ed7b11;
      }
      .item-chapters {
        font-size: 13px;
        color: #71777c;
        margin-left: 10px;
        opacity: 0.6;
      }
    }
  }
}
</style>
