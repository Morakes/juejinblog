<template>
  <div class="container" :class="[hiddenTop ? 'hiddenTop' : 'showTop']">
    <div class="container-header">
      <div class="left-grid"><i class="fa fa-ils fa-lg" style="color: #333"></i> 废土拾荒</div>
      <div class="mid-grid">
        <div
          class="nav"
          :class="{ active: activeRoute === item.path ? true : false }"
          v-for="item in routeList"
          :key="item.path"
          @click="routerLink(item)"
        >
          {{ item.meta.label }}
        </div>
        <div class="search">
          <el-input size="small" placeholder="掘金者必胜" suffix-icon="el-icon-search"></el-input>
        </div>
        <div class="button">
          <el-button type="primary" plain size="small">创作者中心</el-button>
          <el-button type="primary" size="small">写文章</el-button>
        </div>
      </div>
      <div class="right-gird">
        <span class="el-icon-message-solid message-icon"></span>
        <img class="avatar" src="https://p9-passport.byteacctimg.com/img/user-avatar/946976ef78c188733f7fba99f2a966d4~300x300.image" alt="" />
      </div>
    </div>

    <div v-show="hiddenNav == false">
      <div class="divide"></div>

      <nav-list></nav-list>
    </div>
  </div>
</template>

<script lang="ts" setup>
import NavList from "@/components/header/NavList.vue"
import { computed } from "vue"
import { useStore } from "@/store/index"
import { useRouter } from "vue-router"
import { IRouter } from "@/typings/router"
const store = useStore()
const router = useRouter()
const routeList = computed(() => store.getters["router/getRoute"])
const activeRoute = computed(() => store.getters["router/getActive"])
const routerLink = (item: IRouter) => {
  router.push(item.path)
}
const hiddenTop = computed(() => store.getters["scroll/getHiddenTop"])
const hiddenNav = computed(() => store.getters["scroll/getHiddenNav"])
</script>

<style lang="scss" scoped>
.hiddenTop {
  transform: translateY(-62px);
  transition: all 0.2s linear;
}
.showTop {
  transform: translateY(0px);
  transition: all 0.2s linear;
}
.container {
  background: white;
  position: sticky;
  top: 0px;
  z-index: 9999;
  box-shadow: 0px 0px 5px rgb(228, 227, 227);
  .container-header {
    max-width: 1200px;
    height: 60px;
    line-height: 60px;
    margin: auto;
    display: flex;
  }
  .left-grid {
    font-size: 20px;
  }
  .mid-grid {
    flex: 1;
    display: flex;
    .nav {
      box-sizing: border-box;
      padding: 0px 20px;
      font-size: 17px;
      cursor: pointer;
      margin: auto;
      color: #71777c;
    }
    .search {
      margin-left: 50px;
    }
    .button {
      margin-left: 20px;
    }
    :deep(.el-button--small) {
      font-size: 14px;
      padding: 8px 15px;
    }
    :deep(.el-button--primary) {
      background: #1e80ff;
    }
    :deep(.el-button--primary.is-plain) {
      background: #e8f3ff;
      color: #1e80ff;
    }
    :deep(.el-button--primary.is-plain:hover) {
      background: #1e80ff;
      color: white;
    }
    .nav:hover {
      color: #1e80ff;
      transition: all 0.2s;
      transform: scale(1.1);
    }
    .active {
      color: #1e80ff;
    }
  }
  .right-gird {
    margin-left: auto;
    display: flex;
    align-items: center;
    .message-icon {
      margin-left: 10px;
      font-size: 25px;
      color: rgb(114, 101, 101);
    }
    .avatar {
      width: 30px;
      height: 30px;
      object-fit: cover;
      border-radius: 50%;
      margin-left: 15px;
    }
  }

  .divide {
    height: 2px;
    width: 100%;
    box-shadow: 0px 0px 2px rgb(228, 227, 227);
  }
}
</style>
