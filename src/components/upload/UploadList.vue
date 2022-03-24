<template>
  <div>
    <el-upload
      action="#"
      :auto-upload="false"
      list-type="picture-card"
      :on-preview="list.handlePictureCardPreview"
      :on-remove="list.handleRemove"
      :fileList="list.fileList"
      :on-change="list.handleChange"
    >
      <i class="el-icon-plus"></i>
    </el-upload>
    <el-dialog v-model="flag">
      <img class="previewImage" :src="imageUrl" alt="" />
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref, watch, PropType } from "vue"
import { ElFile, UploadFile } from "element-plus/es/components/upload/src/upload.type"
import { UploadListType, FilesType } from "@/typings/components"

const emit = defineEmits(["update:files"])
const props = defineProps({
  files: {
    type: Array as PropType<Array<UploadFile | FilesType>>,
    default: [],
  },
  maxLength: {
    type: Number,
    default: 10,
  },
  size: {
    type: Object,
    default: {
      width: "140px",
      height: "140px",
    },
  },
})
const flag = ref(false)
const imageUrl = ref("")
const hide = ref("line-block")
const list = reactive<UploadListType>({
  fileList: [],
  handleChange: (event: UploadFile) => {
    list.fileList = [...list.fileList, event]
    emit("update:files", list.fileList)
  },
  handlePictureCardPreview: (e: UploadFile) => {
    imageUrl.value = <typeof imageUrl.value>e.url
    flag.value = true
  },
  handleRemove: (file: ElFile, fileArr: Array<UploadFile>) => {
    list.fileList = fileArr
    emit("update:files", list.fileList)
  },
})

//隐藏
const hideUpload = () => {
  list.fileList.length >= props.maxLength
    ? (hide.value = "none")
    : setTimeout(() => {
        hide.value = "inline-block"
      }, 400)
}

watch(
  () => props.files,
  () => {
    list.fileList = props.files
    hideUpload()
  },
  { immediate: true, deep: true }
)
</script>
<style lang="scss" scoped>
:deep(.el-upload) {
  display: v-bind(hide);
}
:deep(.el-upload--picture-card) {
  height: v-bind("size.height");
  width: v-bind("size.width");
  line-height: v-bind("size.height");
}
:deep(.el-upload-list__item) {
  height: v-bind("size.height");
  width: v-bind("size.width");
  line-height: v-bind("size.height");
  transform: none;
}
:deep(.el-upload-list--picture-card .el-upload-list__item-thumbnail) {
  object-fit: cover;
}
.previewImage {
  width: 100%;
  height: 100%;
}
</style>

<!-- 
  外部接收数据的 fileList一定要使用ref属性来定义  才能达到双向数据数据绑定的效果

  <upload-list v-model:files="fileList" :max-length="3" :size="{ width: '200px', height: '200px' }"></upload-list>

  var fileList = ref<Array<FilesType>>([{ status: "success", url: "http://localhost:7001/public/2021-10-20/1634729861195.png", uid: 1 }])
watch(
  () => {
    fileList.value
  },
  () => {
    console.log(fileList.value)
  },
  {
    immediate: true,
    deep: true,
  }
)
 -->
