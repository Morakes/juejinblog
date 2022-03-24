<template>
  <div v-if="route.meta.showRouterView">
    <out-page>
      <template #main>
        <div class="list-content">
          <home-list :list="mock.listContent"></home-list>
        </div>
      </template>
      <template #sidebar><side-bar :list="mock.sidebarData"></side-bar></template>
    </out-page>
  </div>
  <div v-else>
    <router-view></router-view>
  </div>
</template>

<script lang="ts" setup>
import OutPage from "@/components/out-page/OutPage.vue"
import HomeList from "@/views/home/components/HomeList.vue"
import SideBar from "@/components/sidebar/SideBar.vue"
import * as mock from "../../utils/mock/home"
import { useRoute } from "vue-router"
const route = useRoute()
</script>
<style lang="scss" scoped>
.list-content {
  padding: 20px;
}
</style>
