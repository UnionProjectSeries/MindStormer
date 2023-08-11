<script setup>
import {CloseOutlined} from "@ant-design/icons-vue"
const props = defineProps(["display"])
const emits = defineEmits(["closeOverflow"])

function triggerOnClose() {
  emits("closeOverflow")
}
</script>

<template>
<div class="hoverBG" v-if="props.display === true">
  <div class="close-btn" @click="triggerOnClose">
    <CloseOutlined :style="{fontSize: '32px', color: 'white'}"/>
  </div>
  <div class="content-box">
    <slot name="content"></slot>
  </div>
</div>
</template>

<style scoped>
.hoverBG{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.75);
  z-index: 1000;
}
.close-btn{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50px;
  left: 50px;
  width: fit-content;
  height: fit-content;
  cursor: pointer;
  transition: all 0.1s;
  border-radius: 5px;
  padding: 5px;
}
.close-btn:hover{
  background-color: rgba(255,225,255,0.25);
}
.content-box {
  margin: 0;
  padding: 15px;
  width: 40%;
  height: fit-content;
  background-color: white;
  border-radius: 5px;
}
</style>