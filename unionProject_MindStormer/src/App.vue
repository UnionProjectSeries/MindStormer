<script setup>
import {ref} from "vue"
import {v4 as uuidv4} from "uuid"
import {initBgColorSet} from "./js/colorSet.js";
import SideMenus from "./components/MindStormerLocalComponents/Menu/sideMenus.vue";
import WelcomeDialog from "./components/MindStormerLocalComponents/dialog/welcomeDialog.vue";
import AbsoluteContainer from "./components/containers/absoluteContainer.vue";
import Notecard from "./components/draggable/notecard.vue";

const displayWelcomeDialog = ref(true)
const objects = ref([

])

function createNewObject(objectType) {
  if (objectType === "notecard") {
    objects.value.push({
      id: uuidv4(),
      type: "notecard",
      content: "编辑以键入内容",
      x: 300,
      y: 300,
      bgColor: initBgColorSet.blue
    })
  }
}

function modifyNoteCardContent(id, targetKey, content) {
  console.log("Target Modification Object: ", id, " with content ", content, " to target key ", targetKey)
  for (let i = 0; i < objects.value.length; i++) {
    if (objects.value[i].id === id) {
      objects.value[i][targetKey] = content
      break
    }
  }
  console.log(objects.value)
}
</script>

<template>
  <side-menus @createNewObj="createNewObject"/>
  <AbsoluteContainer>
    <template v-for="i in objects">
      <notecard v-if="i.type === 'notecard'" :id="i.id" :content="i.content" :bgColor="i.bgColor" :x="i.x" :y="i.y" @modifyContent="modifyNoteCardContent"></notecard>
    </template>
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
