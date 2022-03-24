<template>
  <div>
    <div v-for="(item, index) in list" @click="getData">
      <div class="item-name">
        <span>{{ item.userName }}</span>
        <el-divider direction="vertical"></el-divider>
        <span class="item-name">{{ item.createTime }}</span>
      </div>
      <div class="item-box">
        <div>
          <div class="item-title">{{ item.title }}</div>
          <div class="item-content">{{ item.content }}</div>
        </div>
        <div class="item-img" v-if="item.cover">
          <img :src="item.cover" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router"
import { mock } from "@/typings/components"
import { PropType } from "vue"
const props = defineProps({
  list: Array as PropType<mock.MockHomeList>,
})
const router = useRouter()
const getData = () => {
  let routeData = router.resolve({
    path: "/home/article",
    query: {
      id: 1,
    },
  })
  window.open(routeData.href, "_blank")
}
</script>
<style lang="scss" scoped>
.item-name {
  padding-top: 10px;
  font-size: 13px;
  color: #747a81;
}
.item-box {
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
  padding-top: 10px;
  border-bottom: 1px solid #e5e6eb;

  .item-title {
    font-weight: 700;
    color: #1d2129;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    flex: 1;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }
  .item-content {
    margin-top: 10px;
    font-size: 13px;
    color: #86909c;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .item-img img {
    width: 120px;
    height: 80px;
    margin-left: 10px;
  }
}
</style>
