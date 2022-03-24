<template>
  <div>
    <div>
      <el-pagination
        background
        @current-change="page.handleCurrentChange"
        @size-change="page.handleSizeChange"
        :page-sizes="pageSizesArr"
        :total="total"
        v-model:currentPage="currentPage"
        v-model:page-size="pageSize"
        :layout="layout"
      ></el-pagination>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, defineEmits } from "vue"
const props = defineProps({
  total: {
    type: Number,
    default: 0,
  },
  currentPage: {
    type: Number,
    default: 1,
  },
  pageSize: {
    type: Number,
    default: 10,
  },
  pageSizesArr: {
    type: Array,
    default() {
      return [10, 20, 30, 40]
    },
  },
  layout: {
    type: String,
    default: "sizes,prev, pager, next",
    // sizes, prev, pager, next, jumper, ->, total, slot
  },
})
const emit = defineEmits(["update:currentPage", "update:pageSize"])
const page = reactive({
  handleCurrentChange: (value: number) => {
    emit("update:currentPage", value)
  },
  handleSizeChange: (value: number) => {
    emit("update:pageSize", value)
  },
})
</script>
<style lang="scss" scoped></style>
