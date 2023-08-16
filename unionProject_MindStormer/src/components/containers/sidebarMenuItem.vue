<script setup>
import {computed, inject} from "vue";

const props = defineProps(['description', 'tooltipDirection', 'fontSize', 'key', 'selectable'])
const emits = defineEmits(['menuItemOnClick'])
const isDisplayTooltip = computed(()=>{
  if (props.description === "" || props.description === undefined) {
    return false;
  }
  else {
    return true
  }
})
const applyFontSize = computed(()=>{
  if (props.fontSize === "" || props.fontSize === undefined) {
    return "20px";
  }
  else {}
  return props.fontSize;
})
const selectedItem = inject('selectedItem')
const itemUsingID = computed(()=>{
  if (selectedItem === props.key && props.selectable === true) {
    return "selected"
  }
  else {
    return "unselected"
  }
})

function handleOnClick() {
  emits('menuItemOnClick', props.key)
  console.log(selectedItem)
}

</script>

<template>
  <a-tooltip :placement="props.tooltipDirection">
    <template #title v-if="isDisplayTooltip">{{props.description}}</template>
    <div class="container" :id="itemUsingID" @click="handleOnClick">
      <slot></slot>
    </div>
  </a-tooltip>

</template>

<style scoped>
.container {
  width: fit-content;
  height: fit-content;
  padding: 7px;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  font-size: v-bind("applyFontSize");
  transition: all 0.1s;
  cursor: pointer;
}

.container:hover {
  background-color: rgb(235,235,235);
}

#selected {
  background-color: dodgerblue;
  color: white;
  transition: all 0.1s;
}

#selected:hover {
  background-color: #0f4479;
}
</style>