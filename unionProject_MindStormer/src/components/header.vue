<script setup>
import dropdownMenuBtn from "./buttons/dropdownMenuBtn.vue"
import overflowWindow from "./overflowWindow/overflowWindow.vue"
import {FolderOpenOutlined, SaveOutlined, PieChartOutlined, DesktopOutlined, FileOutlined} from "@ant-design/icons-vue"
import {ref} from "vue";
import HorizontalMenuContainer from "./lists/horizontalMenuContainer.vue";
import HorizontalMenuItem from "./lists/horizontalMenuItem.vue";

const displayWelcomeOverflow = ref(false)
</script>

<template>
  <div class="header">
    <div class="column-display">
      <div class="column-item">
        <div class="row-display">
          <div class="row-item">
            <a-input size="small"></a-input>
          </div>
          <a-button type="primary" size="small" class="row-item">修改名称</a-button>
        </div>
      </div>
      <div>
        <div class="row-display">
          <a-dropdown>
            <dropdown-menu-btn>
              <template #label>
                <FileOutlined class="inline-icon"/>
                文件
              </template>
            </dropdown-menu-btn>
            <template #overlay>
              <a-menu>
                <a-menu-item>
                  <FolderOpenOutlined class="inline-icon"/>
                  从本地打开文件
                </a-menu-item>
                <a-menu-item>
                  <SaveOutlined class="inline-icon"/>
                  保存当前文件到本地
                </a-menu-item>
                <a-menu-item>
                  <PieChartOutlined class="inline-icon"/>
                  文件统计
                </a-menu-item>
                <a-menu-divider/>
                <a-menu-item @click="displayWelcomeOverflow = true" key="showWelcome">
                  <DesktopOutlined class="inline-icon"/>
                  显示欢迎弹窗
                </a-menu-item>
              </a-menu>
            </template>
          </a-dropdown>
        </div>
      </div>
    </div>
  </div>
  <overflow-window :display="displayWelcomeOverflow" @close-overflow="displayWelcomeOverflow = false">
    <template #content>
      <div class="column-display">
        <h1>欢迎！</h1>
        <div class="column-item">欢迎使用Mind Stormer，选择下面其中一个选项，让我们开始吧！</div>
        <horizontal-menu-container>
          <horizontal-menu-item :main-color="'dodgerblue'">
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
        </horizontal-menu-container>
      </div>
    </template>
  </overflow-window>
</template>

<style scoped>
.inline-icon {
  margin-right: 5px;
}
.header {
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 10px;
  background-color: rgb(250,250,250);
}
.row-display {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.row-item {
  margin-right: 5px;
}
.column-display {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.column-item {
  margin-bottom: 5px;
}
</style>