<script setup>
import {computed} from "vue";

const props = defineProps(['description', 'tooltipDirection', 'fontSize'])
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

</script>

<template>
  <a-tooltip :placement="props.tooltipDirection">
    <template #title v-if="isDisplayTooltip">{{props.description}}</template>
    <div class="container">
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
</style>