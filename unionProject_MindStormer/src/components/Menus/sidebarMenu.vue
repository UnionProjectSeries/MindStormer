<script setup>
import {provide, computed} from "vue"
const props = defineProps(["direction", "disableCenter"])
provide('selectedItem', 'unui:none')

function triggerSelected(targetKey) {
  console.log("Parent Received Request")
  provide('selectedItem', targetKey)
}

const correctClass = computed(()=>{
  if (props.disableCenter === undefined || props.disableCenter === "") {
    return "menu-container"
  }
  else {
    return "menu-container-no-center"
  }
})
</script>

<template>
  <div :class="correctClass">
    <slot @menuItemOnClick="triggerSelected"></slot>
  </div>
</template>

<style scoped>
.menu-container {
  margin: 5px;
  padding: 5px;
  width: fit-content;
  height: fit-content;
  border-radius: 5px;
  background-color: rgb(250,250,250);
  display: flex;
  flex-direction: v-bind("props['direction']");
  justify-content: center;
  align-items: center;
  user-select: none;
}
.menu-container-no-center {
  margin: 5px;
  padding: 5px;
  width: fit-content;
  height: fit-content;
  border-radius: 5px;
  background-color: rgb(250,250,250);
  display: flex;
  flex-direction: v-bind("props['direction']");
  user-select: none;
}
</style>