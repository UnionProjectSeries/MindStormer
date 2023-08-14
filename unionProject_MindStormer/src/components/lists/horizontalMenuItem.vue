<script setup>
import {ref} from "vue";

const props = defineProps(['mainColor'])

console.log(props["mainColor"])
</script>

<template>
<div class="item-main-box">
  <div class="item-icon">
    <slot name="icon"></slot>
  </div>
  <div class="item-title">
    <slot name="title"></slot>
  </div>
  <div class="item-description">
    <slot name="description"></slot>
  </div>
</div>
</template>

<style scoped>
:root {
  --mainColor: v-bind("props['mainColor']");
}
.item-main-box {
  margin: 5px;
  padding: 10px;
  height: 30%;
  flex: 1;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  background-color: rgba(0,0,0,0.05);
  transition: all 0.1s;
  cursor: pointer;
}
.item-main-box:hover {
  background-color: v-bind("props['mainColor']");
}
.item-icon {
  color: v-bind("props['mainColor']");
  font-size: 32px;
  transition: all 0.1s;
}
.item-main-box:hover .item-icon {
  color: white;
}
.item-title {
  color: black;
  font-size: 24px;
  font-weight: bold;
  transition: all 0.1s;
  margin-bottom: 5px;
}
.item-main-box:hover .item-title {
  color: white;
}
.item-description {
  color: #545454;
  transition: all 0.1s;
}
.item-main-box:hover .item-description {
  color: white;
}
</style>