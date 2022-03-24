<template>
  <div class="container">
    <Header></Header>
    <router-view v-slot="{ Component }" class="main-container">
      <!-- <keep-alive> -->
      <component :is="Component" />
      <!-- </keep-alive> -->
    </router-view>
  </div>
</template>

<script lang="ts" setup>
import Header from "@/components/header/Header.vue"
import * as hooks from "./hooks/useHooks"
hooks.useNav()
hooks.setRouter()
</script>
<style lang="scss" scoped></style>
