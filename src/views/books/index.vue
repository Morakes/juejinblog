<template>
  <div>
    <out-page>
      <template #main>
        <div class="box"><books-list :list="mock.list"></books-list></div>
      </template>
      <!-- <template #sidebar>123</template> -->
    </out-page>
  </div>
</template>

<script lang="ts" setup>
import OutPage from "@/components/out-page/OutPage.vue"
import BooksList from "@/views/books/components/BooksList.vue"
import * as mock from "@/utils/mock/books"
</script>
<style lang="scss" scoped></style>
