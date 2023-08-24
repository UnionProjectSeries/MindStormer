<script setup>

import SidebarContainer from "../../../components/containers/sidebarContainer.vue";
import SidebarMenu from "../../Menus/sidebarMenu.vue";
import SidebarMenuItem from "../../Menus/sidebarMenuItem.vue";
import {PlusCircleOutlined, SelectOutlined, HighlightOutlined, FormOutlined, ForkOutlined, AppstoreOutlined, UndoOutlined, RedoOutlined, SearchOutlined, EditOutlined, ShareAltOutlined, LeftCircleOutlined, RightCircleOutlined, PlusSquareOutlined} from "@ant-design/icons-vue"
import {ref} from "vue"
import SidebarMenuDivider from "../../Menus/sidebarMenuDivider.vue";

const displayMoreLeftIcons = ref(false)
const maxCount = ref(10)
const currentPage = ref(1)

function nextPage() {
  if (currentPage.value < maxCount.value) {
    currentPage.value++;
  }
}

function lastPage() {
  if (currentPage.value > 1) {
    currentPage.value--
  }
}
</script>

<template>
  <sidebar-container position="left">
    <sidebar-menu direction="row">
      <sidebar-menu-item font-size="15px">
        <b>文件名称</b>
      </sidebar-menu-item>
      <sidebar-menu-item description="修改名称">
        <EditOutlined/>
      </sidebar-menu-item>
      <sidebar-menu-divider direction="vertical"/>
      <sidebar-menu-item description="搜索">
        <SearchOutlined/>
      </sidebar-menu-item>
      <sidebar-menu-item description="分享此文件">
        <ShareAltOutlined/>
      </sidebar-menu-item>
      <sidebar-menu-divider direction="vertical"/>
      <sidebar-menu-item description="上一页" @click="lastPage">
        <LeftCircleOutlined/>
      </sidebar-menu-item>
      <sidebar-menu-item description="当前页数" font-size="15px">
        第{{currentPage}}页，共{{ maxCount }}页
      </sidebar-menu-item>
      <sidebar-menu-item description="下一页" @click="nextPage">
        <RightCircleOutlined/>
      </sidebar-menu-item>
      <sidebar-menu-item description="添加新页面">
        <PlusSquareOutlined/>
      </sidebar-menu-item>
    </sidebar-menu>

    <sidebar-menu direction="row">
      <sidebar-menu-item description="选择" tooltip-direction="bottom" key="select" :selectable="true">
        <SelectOutlined/>
      </sidebar-menu-item>
      <sidebar-menu-item description="插入元素" tooltip-direction="bottom">
        <PlusCircleOutlined @click="displayMoreLeftIcons = !displayMoreLeftIcons"/>
      </sidebar-menu-item>
      <template v-if="displayMoreLeftIcons">
        <sidebar-menu-divider/>
        <sidebar-menu-item description="插入墨迹" tooltip-direction="bottom" key="pen" :selectable="true">
          <HighlightOutlined/>
        </sidebar-menu-item>
        <sidebar-menu-item description="插入便签" tooltip-direction="bottom" key="stickyNote" :selectable="true" @click="$emit('createNewObj', 'notecard')">
          <FormOutlined/>
        </sidebar-menu-item>
        <sidebar-menu-item description="插入关系" tooltip-direction="bottom" key="relation" :selectable="true">
          <ForkOutlined/>
        </sidebar-menu-item>
        <sidebar-menu-item description="插入组" tooltip-direction="bottom" key="group" :selectable="true">
          <AppstoreOutlined/>
        </sidebar-menu-item>
      </template>
      <sidebar-menu-divider/>
      <sidebar-menu-item description="撤销" tooltip-direction="bottom">
        <UndoOutlined/>
      </sidebar-menu-item>
      <sidebar-menu-item description="重做" tooltip-direction="bottom">
        <RedoOutlined/>
      </sidebar-menu-item>
    </sidebar-menu>
  </sidebar-container>
</template>

<style scoped>
.column-display {
  display: flex;
  flex-direction: column;
  width: fit-content;
  height: fit-content;
}
.column-display .item{
  margin-bottom: 5px;
}
.row-display {
  display: flex;
  flex-direction: row;
  width: fit-content;
  height: fit-content;
}
.row-display .item {
  margin-right: 5px;
}
</style>
