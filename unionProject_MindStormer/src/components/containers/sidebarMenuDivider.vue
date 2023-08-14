<script setup>
import {computed} from "vue";

const props = defineProps(['direction'])
const applyDirection = computed(()=>{
  if (props.direction === ""|| props.direction === undefined) {
    return "horizontal"
  }
  else {
    return "vertical"
  }
})
</script>

<template>
<div class="divider" :id="applyDirection">
  &nbsp;
</div>
</template>

<style scoped>
.divider {
  background-color: rgba(230,230,230);
}
#horizontal {
  width: 85%;
  height: 1px;
  margin: 2px;
}
#vertical {
  width: 1px;
  height: 85%;
  margin: 2px;
}
</style>