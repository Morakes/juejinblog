<template>
  <div>
    <el-popover placement="bottom-start" :width="350" trigger="click">
      <template #reference>
        <span>
          <slot></slot>
        </span>
      </template>
      <el-input size="small" placeholder="搜索话题名称" suffix-icon="el-icon-search"></el-input>

      <div class="moments-box">
        <el-scrollbar height="270px" class="scroll-menu">
          <div v-for="(item, index) in menuList" class="meun-item" :class="{ 'meun-active': index == activeIndex }" @click="activeIndex = index">
            {{ item.name }}
          </div>
        </el-scrollbar>
        <el-scrollbar height="270px" class="scroll-comment">
          <div v-for="(item, index) in commentList" class="comment-list">
            <img :src="item.imageUrl" alt="" />
            <div class="item-info">
              <div class="item-title">{{ item.title }}</div>
              <div class="item-bottom">
                <span>{{ item.firends }}拾荒者</span>
                <span> · </span>
                <span>{{ item.boiling }}沸点</span>
              </div>
            </div>
          </div>
        </el-scrollbar>
      </div>
    </el-popover>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue"
import * as mock from "@/utils/mock/boiling/momentsPop"
const activeIndex = ref(0)
const menuList = mock.menuList
const commentList = mock.commentList
</script>
<style lang="scss" scoped>
.moments-box {
  display: flex;
  margin-top: 20px;
  .scroll-menu {
    width: 25%;
    // background: #f4f5f5;
    .meun-item {
      color: #8a919f;
      height: 48px;
      line-height: 48px;
      text-align: center;
      cursor: pointer;
    }
    .meun-active {
      background: #eaf2ff;
      color: #1e80ff;
    }
  }
  .scroll-comment {
    flex: 1;
    .comment-list {
      padding: 10px;
      display: flex;
      align-items: center;
      cursor: pointer;
      img {
        width: 50px;
        height: 50px;
        object-fit: cover;
        border-radius: 3px;
      }
      .item-info {
        margin-left: 10px;
        .item-title {
          color: #252933;
        }
        .item-bottom {
          color: #8a919f;
          margin-top: 10px;
        }
      }
    }
  }
}
</style>
