<template>
  <div>
    <boiling-out-page>
      <template #sideleft>
        <boiling-sidebar></boiling-sidebar>
      </template>
      <template #main>
        <issue></issue>
        <boiling-list></boiling-list>
      </template>
      <template #sidebar>
        <SideBar :list="mock.sidebarData"></SideBar>
      </template>
    </boiling-out-page>
  </div>
</template>

<script lang="ts" setup>
import BoilingOutPage from "@/components/out-page/BothOutPage.vue";
import BoilingSidebar from "@/components/sidebar/MenuSidebar.vue";
import SideBar from "@/components/sidebar/SideBar.vue";
import Issue from "./components/Issue.vue";
import BoilingList from "./components/BoilingList.vue";
import * as mock from "@/utils/mock/news";
</script>
<style lang="scss" scoped></style>
