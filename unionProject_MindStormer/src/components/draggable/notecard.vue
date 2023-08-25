<script setup>
import {computed, ref} from "vue";
import {initBgColorSet, initBasicColorSet} from "../../js/colorSet.js";
import DropdownMenuBtn from "../buttons/dropdownMenuBtn.vue";
import {EditOutlined, CheckCircleOutlined, DeleteOutlined, FileFilled} from "@ant-design/icons-vue"

const props = defineProps(['bgColor', 'content', "x", "y", "id"])
const emits = defineEmits(['modifyContent'])
const isInEditMode = ref(true)
const objectDraggable = ref(true)
const displayContent = ref(props.content)
const displayColor = ref(props.bgColor)

const applyBackgroundColor = computed(()=>{
  if (props.bgColor === "" || props.bgColor === undefined) {
    return initBgColorSet.blue
  }
  else {
    displayColor.value = props.bgColor
    return props.bgColor
  }
})

const getValidPosition = computed(() => {
  let content = {x: props.x, y: props.y}
  if (props.x === undefined) {
    content.x = 300
  }
  if (props.y === undefined) {
    content.y = 300
  }
  return content
})

function enterEditMode() {
  isInEditMode.value = true
  objectDraggable.value = false
}

function exitEditMode() {
  isInEditMode.value = false
  objectDraggable.value = true
  console.log(displayContent)
  triggerSaveBtn()
}

function triggerSaveBtn() {
  emits('modifyContent', props.id, "content", displayContent.value)
}

function triggerSaveColor(targetColor) {
  emits('modifyContent', props.id, "bgColor", targetColor)
  displayColor.value = targetColor
}
</script>

<template>
  <div v-draggable="{update: objectDraggable, defaultPosition: getValidPosition}" class="container">
    <div class="notecard">
      <div v-if="isInEditMode">
        <div class="column-item"></div>
        <a-textarea class="column-item" v-model:value="displayContent"></a-textarea>
        <div class="row-display">
          <dropdown-menu-btn @click="exitEditMode" class="row-item">
            <template #label>
              <CheckCircleOutlined/>
            </template>
          </dropdown-menu-btn>
        </div>
      </div>
      <div v-else>
        <div style="flex: auto">
          {{displayContent}}
        </div>
        <div style="flex: auto" class="row-display" id="hoverMenu">
          <dropdown-menu-btn class="row-item">
            <template #label>
              <DeleteOutlined/>
            </template>
          </dropdown-menu-btn>
          <dropdown-menu-btn class="row-item" @click="enterEditMode">
            <template #label>
              <EditOutlined/>
            </template>
          </dropdown-menu-btn>
          <dropdown-menu-btn class="row-item" @click="triggerSaveColor(initBgColorSet.red)">
            <template #label>
              <FileFilled :style="{color: initBasicColorSet.red}"/>
            </template>
          </dropdown-menu-btn>
          <dropdown-menu-btn class="row-item" @click="triggerSaveColor(initBgColorSet.yellow)">
            <template #label>
              <FileFilled :style="{color: initBasicColorSet.yellow}"/>
            </template>
          </dropdown-menu-btn>
          <dropdown-menu-btn class="row-item" @click="triggerSaveColor(initBgColorSet.green)">
            <template #label>
              <FileFilled :style="{color: initBasicColorSet.green}"/>
            </template>
          </dropdown-menu-btn>
          <dropdown-menu-btn class="row-item" @click="triggerSaveColor(initBgColorSet.blue)">
            <template #label>
              <FileFilled :style="{color: initBasicColorSet.blue}"/>
            </template>
          </dropdown-menu-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  position: absolute;
}
.notecard {
  width: 300px;
  height: fit-content;
  max-height: 300px;
  border-radius: 5px;
  padding: 7px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  background-color: v-bind("displayColor");
  overflow-y: auto;
}
.column-display {
  display: flex;
  flex-direction: column;
}
.column-item {
  margin-bottom: 5px;
}
.row-display {
  display: flex;
  flex-direction: row;
}
.row-item {
  margin-right: 5px;
}
#hoverMenu {
  display: none;
}
.notecard:hover #hoverMenu {
  display: flex;
}
</style>