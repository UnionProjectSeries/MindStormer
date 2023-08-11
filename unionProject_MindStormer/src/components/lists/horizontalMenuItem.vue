<script setup>
import {ref} from "vue";

const props = defineProps(['main-color'])
const mainThemeColor = ref(props["main-color"])
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
  --mainColor: v-bind("props['main-color']");
}
.item-main-box {
  margin: 5px;
  padding: 10px;
  height: 30%;
  flex: auto;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  background-color: rgba(0,0,0,0.05);
  transition: all 0.1s;
  cursor: pointer;
}
.item-main-box:hover {
  background-color: var(--mainColor);
}
.item-icon {
  color: var(--mainColor);
  font-size: 32px;
  transition: all 0.1s;
}
.item-main-box:hover .item-icon {
  color: white;
}
.item-title {
  color: var(--mainColor);
  font-size: 24px;
  font-weight: bold;
  transition: all 0.1s;
  margin-bottom: 5px;
}
.item-main-box:hover .item-title {
  color: white;
}
.item-description {
  color: var(--mainColor);
  transition: all 0.1s;
}
.item-main-box:hover .item-description {
  color: white;
}
</style>