<script setup>
import DraggableContainer from "../../App.vue";
import {computed} from "vue";
const props = defineProps(['bgColor'])

const applyBackgroundColor = computed(()=>{
  if (props.bgColor === "" || props.bgColor === undefined) {
    return "#a0ddfd"
  }
  else {
    return props.bgColor
  }
})
</script>

<template>
  <div class="notecard">
    <slot></slot>
  </div>
</template>

<style scoped>
.notecard {
  width: 100px;
  height: fit-content;
  border-radius: 5px;
  padding: 7px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  background-color: v-bind("applyBackgroundColor");
}
</style>