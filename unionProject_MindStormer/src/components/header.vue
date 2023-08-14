<script setup>
import dropdownMenuBtn from "./buttons/dropdownMenuBtn.vue"
import {FolderOpenOutlined, SaveOutlined, PieChartOutlined, DesktopOutlined, FileOutlined, PlusCircleOutlined} from "@ant-design/icons-vue"
import {ref} from "vue";
import WelcomeDialog from "./MindStormerLocalComponents/dialog/welcomeDialog.vue";

const displayWelcomeOverflow = ref(true)
</script>

<template>
  <div class="header">
    <div class="column-display">
      <div class="column-item">
        <div class="row-display">
          <h3 class="row-item">MindStormer</h3>
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
          <a-dropdown>
            <dropdown-menu-btn>
              <template #label>
                <DesktopOutlined class="inline-icon"/>
                视图
              </template>
            </dropdown-menu-btn>
            <template #overlay>
              <a-menu>
                <a-menu-item>
                  显示左侧侧栏
                </a-menu-item>
                <a-menu-item>
                  显示详细信息
                </a-menu-item>
                <a-menu-item>
                  显示右侧侧栏
                </a-menu-item>
              </a-menu>
            </template>
          </a-dropdown>
        </div>
      </div>
    </div>
  </div>
  <welcome-dialog v-if="displayWelcomeOverflow"></welcome-dialog>
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