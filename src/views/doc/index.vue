<template>
  <div>
    <!--component hide  -->
    <div class="SelectedComponents">
      <component :is="tempComponent" />
    </div>

    <!-- drag -->

    <div class="drag">
      <div draggable="true" class="drag-box" v-for="(item, key, index) in typeList" :data-type="key" @dragstart="drag.start" @dragend="drag.end">
        <i :class="item.icon"></i>
        <div>{{ item.name }}</div>
      </div>
    </div>

    <!-- drop....... -->

    <div class="drop">
      <div class="title">可drop区域</div>
      <div class="view-box" @drop="drop" @dragenter="drag.enter" @dragover="drag.over" @dragleave="drag.leave"></div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, shallowRef, markRaw, reactive } from "vue"
import Level from "@/components/user-components/Level.vue"
import SingleUpload from "@/components/upload/SingleUpload.vue"
import HeadPortrait from "@/components/user-components/HeadPortrait.vue"
import Pagination from "@/components/pagination/Pagination.vue"
import NavList from "@/components/header/NavList.vue"
const tempComponent = shallowRef()
const type = ref("")
const typeList = {
  banner: {
    name: "轮播图",
    icon: "el-icon-picture",
    com: "https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/449d913a1eb5405da89abe50c7065fba~tplv-k3u1fbpfcp-no-mark:480:400:0:0.awebp?",
    component: SingleUpload,
  },
  product: {
    name: "等级",
    icon: "el-icon-s-custom",
    com: "https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/449d913a1eb5405da89abe50c7065fba~tplv-k3u1fbpfcp-no-mark:480:400:0:0.awebp?",
    component: Level,
  },
  images: {
    name: "头像",
    icon: "el-icon-picture",
    com: "https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/449d913a1eb5405da89abe50c7065fba~tplv-k3u1fbpfcp-no-mark:480:400:0:0.awebp?",
    component: HeadPortrait,
  },
  pagination: {
    name: "分页器",
    icon: "el-icon-picture",
    com: "https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/449d913a1eb5405da89abe50c7065fba~tplv-k3u1fbpfcp-no-mark:480:400:0:0.awebp?",
    component: Pagination,
  },
  navlist: {
    name: "导航栏",
    icon: "el-icon-cpu",
    com: "https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/449d913a1eb5405da89abe50c7065fba~tplv-k3u1fbpfcp-no-mark:480:400:0:0.awebp?",
    component: NavList,
  },
}

// 放置
const drop = (e) => {
  if (!tempComponent.value) {
    return
  }
  const SelectedComponents = document.querySelector(".SelectedComponents")
  const childNode = SelectedComponents?.childNodes[0]
  const cloneDom = childNode?.cloneNode(true)
  const createdDiv = document.createElement("div")

  createdDiv.appendChild(cloneDom as Node)
  e.target.appendChild(createdDiv)
  tempComponent.value = null
  e.preventDefault()
}
// 拖拽
const drag = reactive({
  start: (e) => {
    type.value = e.target.dataset.type
    tempComponent.value = typeList[type.value].component

    e.target.style.border = "3px dashed red"
  },
  end: (e) => {
    e.target.style.border = "none"
  },
  enter: () => {},
  over: (e) => {
    e.preventDefault()
  },
  leave: () => {},
})
</script>

<style lang="scss" scoped>
.drag {
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
  font-size: 20px;
}
i {
  font-size: 30px;
  color: grey;
}
.drag-box {
  text-align: center;
  box-sizing: border-box;
  padding: 10px;
}
.drop {
  margin-top: 100px;
}
.title {
  opacity: 0.5;
  text-align: center;
  margin-bottom: 10px;
}
.view-box {
  height: 800px;
  width: 500px;
  background: white;
  margin: auto;
}
.SelectedComponents {
  display: none;
}
</style>
