<template>
  <div>
    <div v-for="(item, index) in list" @click="getData">
      <div class="item-box">
        <div>
          <div class="item-title">{{ item.title }}</div>
          <div class="item-content">{{ item.content }}</div>
          <div class="item-name">
            <span>{{ item.userName }}</span>
            <el-divider direction="vertical"></el-divider>
            <span class="item-name">{{ item.createTime }}</span>
          </div>
        </div>
        <div class="item-img" v-if="item.cover">
          <img :src="item.cover" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { PropType } from "vue"
const props = defineProps({
  list: Array as PropType<Array<{ title: string; content: string; cover: string; userName: string; createTime: string }>>,
})
import { useRouter } from "vue-router"
const router = useRouter()
const getData = () => {
  let routeData = router.resolve({
    path: "/news/article",
    query: {
      id: 2,
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
    width: 160px;
    height: 120px;
    margin-left: 10px;
  }
}
</style>
