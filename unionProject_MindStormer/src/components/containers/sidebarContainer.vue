<script setup>
const props = defineProps(['position'])
</script>

<template>
  <div class="container" :id="props.position">
    <slot></slot>
  </div>
</template>

<style scoped>
.container {
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: row;
  position: fixed;
  align-items: center;
  z-index: 500;
}
#left {
  top: 10px;
  left: 10px;
}
#right {
  top: 10px;
  right: 10px;
}
</style>