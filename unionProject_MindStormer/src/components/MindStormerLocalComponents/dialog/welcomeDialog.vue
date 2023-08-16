<script setup>

import HorizontalMenuContainer from "../../lists/horizontalMenuContainer.vue";
import {FolderOpenOutlined, PlusCircleOutlined} from "@ant-design/icons-vue";
import HorizontalMenuItem from "../../lists/horizontalMenuItem.vue";
import {ref} from "vue";
import OverflowWindow from "../../overflowWindow/overflowWindow.vue";
const props = defineProps(['displayDialog'])
const emits = defineEmits(["closeOverflow"])
const displayWelcomeOverflow = ref(true)

function triggerOnClose() {
  emits("closeOverflow")
}
</script>

<template>
  <overflow-window :display="displayWelcomeOverflow" @close-overflow="triggerOnClose">
    <template #content>
      <div class="column-display">
        <h1>欢迎！</h1>
        <div class="column-item">欢迎使用Mind Stormer，选择下面其中一个选项，让我们开始吧！</div>
        <horizontal-menu-container>
          <horizontal-menu-item mainColor="dodgerblue">
            <template #icon>
              <FolderOpenOutlined/>
            </template>
            <template #title>
              打开本地文件
            </template>
            <template #description>
              从本地打开一个已保存的MindStormer文件
            </template>
          </horizontal-menu-item>
          <horizontal-menu-item mainColor="#00cc00">
            <template #icon>
              <PlusCircleOutlined/>
            </template>
            <template #title>
              创建新文件
            </template>
            <template #description>
              创建一个全新的MindStormer文件
            </template>
          </horizontal-menu-item>
        </horizontal-menu-container>
      </div>
    </template>
  </overflow-window>
</template>

<style scoped>

</style>