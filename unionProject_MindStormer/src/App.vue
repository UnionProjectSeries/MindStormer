<script setup>
import {ref} from "vue"
import SideMenus from "./components/MindStormerLocalComponents/Menu/sideMenus.vue";
import WelcomeDialog from "./components/MindStormerLocalComponents/dialog/welcomeDialog.vue";
import AbsoluteContainer from "./components/containers/absoluteContainer.vue";
import DraggableContainer from "./components/containers/draggableContainer.vue";
import Notecard from "./components/draggable/notecard.vue";

const displayWelcomeDialog = ref(true)
</script>

<template>
  <side-menus/>
  <AbsoluteContainer>
    <draggable-container>
      <notecard>This is a notecard and these are the content of the notecard</notecard>
<!--      This is a test content-->
    </draggable-container>
  </AbsoluteContainer>
</template>

<style scoped>
.test-box{
  width: fit-content;
  height: fit-content;
}
.notecard {
  width: 100px;
  height: fit-content;
  border-radius: 5px;
  padding: 7px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  background-color: #a0ddfd;
}
</style>
