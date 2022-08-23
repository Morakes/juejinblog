<template>
  <div class="issue-box">
    <div>
      <el-input
        type="textarea"
        id="areaInput"
        v-model="textValue"
        :autosize="{ minRows: 3 }"
        placeholder="快和拾荒者们一起分享新鲜事吧 ~.~"
      >
      </el-input>
      <div class="topic-warpper">
        <!-- choose topic -->
        <moments-pop>
          <template #default>
            <span class="new-topic"
              ><i class="fa fa-dot-circle-o icon"></i>请选择圈子</span
            >
          </template>
        </moments-pop>

        <!-- choose image -->
        <div class="topic-upload hideUpload">
          <upload-list
            :size="uploadSize"
            :max-length="9"
            v-model:files="fileList"
          ></upload-list>
        </div>

        <div
          class="topic-counter"
          :class="[textValue.length > 1000 ? 'topic-counter-warning' : '']"
        >
          {{ textValue.length }}/1000
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="tool">
        <emoji-pop @getEmoji="getEmoji">
          <template #default>
            <span><i class="fa fa-smile-o"></i>表情</span>
          </template>
        </emoji-pop>
        <span @click="eventDelegation">
          <i class="fa fa-picture-o"></i> 图片
          <input
            type="file"
            id="uploadInput"
            ref="dom"
            @change="changeInput"
            style="display: none"
          />
        </span>
        <link-pop>
          <template #default>
            <span> <i class="fa fa-link"></i> 链接</span>
          </template>
        </link-pop>
        <topic-pop @getTopic="getTopic">
          <template #default>
            <span> <i class="fa fa-comment-o"></i> 话题</span>
          </template>
        </topic-pop>
      </div>
      <div class="button">
        <el-button type="primary" size="small">发布</el-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import UploadList from "@/components/upload/UploadList.vue";
import MomentsPop from "./MomentsPop.vue";
import EmojiPop from "./EmojiPop.vue";
import TopicPop from "./TopicPop.vue";
import LinkPop from "./LinkPop.vue";
import { ref, reactive, computed } from "vue";
import { FilesType } from "@/typings/components";

const dom = ref();
const textValue = ref("");
const uploadSize = reactive({
  width: "80px",
  height: "80px",
});
const hide = computed(() => {
  return fileList.value.length > 0 ? "block" : "none";
});
const fileList = ref<Array<FilesType>>([]);

const eventDelegation = () => {
  dom.value.click();
};
const changeInput = () => {
  if (!dom.value.files[0]) {
    return;
  }
  const blob = new Blob([dom.value.files[0]], {
    type: "image/png",
  });
  let url = URL.createObjectURL(blob);
  fileList.value.push({ url: url, status: "ready", uid: 2 });
};
const getEmoji = (data) => {
  textValue.value += data;
};
const getTopic = (data) => {
  // const span = document.createElement("span")
  // const text = document.createTextNode(data)
  // span.style.color = "red"
  // const areaInput = document.getElementById("areaInput")
  // const selection = window.Selection ? window.getSelection() : document.getSelection()
  // console.log(selection)
  // areaInput?.appendChild(span)
  // span.appendChild(text)
  // span.appendChild(text)
  textValue.value += data;
};
</script>
<style lang="scss" scoped>
.issue-box {
  width: 100%;
  background: white;
  box-sizing: border-box;
  padding: 20px;
  border-radius: 2px;
  :deep(.el-textarea__inner) {
    background-color: #f4f5f5;
    resize: none;
    border-radius: 0;
    border: none;
  }
  .topic-warpper {
    box-sizing: border-box;
    width: 100%;
    background-color: #f4f5f5;
    padding: 12px;
    .new-topic {
      font-size: 12px;
      color: #1e80ff;
      background: white;
      padding: 5px 15px;
      border-radius: 15px 15px 15px 0px;
      cursor: pointer;
      .icon {
        margin-right: 5px;
      }
    }
    .topic-upload {
      margin-top: 20px;
    }
    .topic-counter {
      margin-top: 5px;
      font-size: 13px;
      text-align: right;
      color: #4e5969;
    }
    .topic-counter-warning {
      color: rgb(236, 120, 120);
    }
  }
  .footer {
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .tool {
      display: flex;
      align-items: center;
      span {
        margin-right: 20px;
        cursor: pointer;
        color: #4e5969;
        font-size: 14px;
      }
      i {
        margin-right: 2px;
      }
    }
    :deep(.el-button--primary) {
      background: #1e80ff;
      padding: 0px 20px;
      font-size: 14px;
    }
  }
  .hideUpload {
    display: v-bind(hide);
  }
}
</style>
