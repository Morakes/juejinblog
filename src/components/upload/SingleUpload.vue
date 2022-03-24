<template>
  <div>
    <el-upload class="avatar-uploader" :auto-upload="false" action="#" :show-file-list="false" :on-change="changeUpload">
      <img v-if="imageUrl" :src="imageUrl" class="avatar" />
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
  </div>
</template>

<script lang="ts" setup>
import { ElMessage } from "element-plus"
import { UploadFile } from "element-plus/es/components/upload/src/upload.type"
import { ref, defineEmits, watch } from "vue"
import { singleUpload } from "../../api/upload.api"
import { beforeUploadImg } from "../../utils/uploadType"
const emit = defineEmits(["update:file"])
const props = defineProps({
  file: {
    type: String,
    default: "",
  },
  size: {
    type: Object,
    default: {
      width: "150px",
      height: "150px",
    },
  },
})
const imageUrl = ref("")

async function changeUpload(event: UploadFile) {
  if (beforeUploadImg(event.raw)) {
    ElMessage(beforeUploadImg(event.raw)?.msg)
    return
  }
  const RES = await singleUpload(event.raw)
  if (RES.code == 200) {
    ElMessage.success("上传成功")
    imageUrl.value = RES.data
    emit("update:file", imageUrl.value)
  }
}

watch(
  () => props.file,
  () => {
    imageUrl.value = props.file as string
  },
  { immediate: true }
)
</script>
<style lang="scss" scoped>
:deep(.avatar-uploader .el-upload) {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
:deep(.avatar-uploader .el-upload:hover) {
  border-color: #409eff;
}
:deep(.avatar-uploader-icon) {
  font-size: 28px;
  color: #8c939d;
  width: v-bind("size.width");
  height: v-bind("size.height");
  line-height: v-bind("size.height");
  text-align: center;
}
:deep(.avatar) {
  width: v-bind("size.width");
  height: v-bind("size.height");
  display: block;
}
</style>

<!-- 
const file = ref("")
watch(
  () => {
    file.value
  },
  () => {
    console.log(file.value)
  },
  { deep: true, immediate: true }  一定要加上
)
 -->
