<template>
  <div>
    <comment-out-page>
      <template #main>
        <div class="container">
          <detail-content :list="mock.detailsContent"></detail-content>
          <el-divider></el-divider>
          <home-list id="container" :list="mock.listContent"></home-list>
        </div>
      </template>
      <template #sidebar>
        <div><side-bar :list="mock.sidebarData"></side-bar></div>
      </template>
      <template #sideleft>
        <comment-sidebar></comment-sidebar>
      </template>
    </comment-out-page>
  </div>
</template>

<script lang="ts" setup>
import CommentOutPage from "@/components/out-page/CommentOutPage.vue"
import DetailContent from "@/components/main-content/DetailContent.vue"
import HomeList from "@/views/home/components/HomeList.vue"
import SideBar from "@/components/sidebar/SideBar.vue"
import CommentSidebar from "@/components/sidebar/CommentSidebar.vue"
import * as mock from "@/utils/mock/home"
</script>
<style lang="scss" scoped>
.container {
  padding: 24px;
}
</style>
