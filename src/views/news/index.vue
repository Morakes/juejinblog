<template>
  <div v-if="route.meta.showRouterView">
    <out-page>
      <template #main>
        <div class="box">
          <news-list :list="mock.list"></news-list>
        </div>
      </template>
      <template #sidebar>
        <side-bar :list="mock.sidebarData"></side-bar>
      </template>
    </out-page>
  </div>
  <div v-else>
    <router-view></router-view>
  </div>
</template>

<script lang="ts" setup>
import OutPage from "@/components/out-page/OutPage.vue"
import NewsList from "@/views/news/components/NewsList.vue"
import SideBar from "@/components/sidebar/SideBar.vue"
import * as mock from "@/utils/mock/news"
import { useRoute } from "vue-router"
const route = useRoute()
</script>
<style lang="scss" scoped>
.box {
  padding: 20px;
}
</style>
