<script setup>
import dropdownMenuBtn from "./buttons/dropdownMenuBtn.vue"
import {FolderOpenOutlined, SaveOutlined, PieChartOutlined, DesktopOutlined, FileOutlined} from "@ant-design/icons-vue"
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
                <FileOutlined/>
                文件
              </template>
            </dropdown-menu-btn>
            <template #overlay>
              <a-menu>
                <a-menu-item>
                  <FolderOpenOutlined/>
                  从本地打开文件
                </a-menu-item>
                <a-menu-item>
                  <SaveOutlined/>
                  保存当前文件到本地
                </a-menu-item>
                <a-menu-item>
                  <PieChartOutlined/>
                  文件统计
                </a-menu-item>
                <a-menu-divider/>
                <a-menu-item>
                  <DesktopOutlined/>
                  显示欢迎弹窗
                </a-menu-item>
              </a-menu>
            </template>
          </a-dropdown>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
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