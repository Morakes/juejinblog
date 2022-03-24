<template>
  <div class="contanier">
    <div class="icon" v-for="(item, index) in list">
      <el-badge :value="item.value" class="item" type="primary" :hidden="item.hidden"
        ><el-button round circle @mouseenter.native="mouseenter(item)" @mouseleave.native="mounseleave(item)"><img :src="item.icon" /></el-button
      ></el-badge>
    </div>

    <div class="separate">分享</div>

    <!-- 固定icon -->
    <div class="icon" v-for="(item, index) in fixed">
      <el-button round circle @mouseenter="mouseenter(item)" @mouseleave="mounseleave(item)">
        <img :src="item.icon" />
      </el-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue"

const list = ref([
  {
    value: 100,
    icon: "thumbs-up.png",
    selectedIcon: "thumbs-up-active.png",
    hidden: false,
  },
  {
    value: 10,
    icon: "comment.png",
    selectedIcon: "comment-active.png",
    hidden: false,
  },
  {
    value: 0,
    icon: "star.png",
    selectedIcon: "star-active.png",
    hidden: true,
  },
  {
    selectedIcon: "warning-active.png",
    value: 0,
    icon: "warning.png",
    hidden: true,
  },
])
const fixed = ref([
  {
    type: "qq",
    icon: "qq.png",
    selectedIcon: "qq-active.png",
  },
  {
    type: "weixin",
    icon: "weixin.png",
    selectedIcon: "weixin-active.png",
  },
  {
    type: "xinlang",
    icon: "xinlang.png",
    selectedIcon: "xinlang-active.png",
  },
])

const mouseenter = (item: typeof list.value[0] | typeof fixed.value[0]) => {
  item.icon = item.selectedIcon
}
const mounseleave = (item: typeof list.value[0] | typeof fixed.value[0]) => {
  item.icon = item.selectedIcon.replace(/-active/, "")
}
</script>
<style lang="scss" scoped>
.contanier {
  text-align: center;
  .icon {
    margin-bottom: 10px;
  }
  :deep(.el-button) {
    height: 35px;
    width: 35px;
    min-height: 35px;
    img {
      width: 17px;
      height: 17px;
    }
  }
  :deep(.el-button.is-circle) {
    padding: 0px;
  }
  :deep(.el-badge__content--primary, .el-badge__content.is-fixed) {
    background: #b2bac2;
    right: 15px;
  }
  .separate {
    font-size: 13px;
    color: #b2bac2;
    margin-bottom: 10px;
  }
}
</style>
