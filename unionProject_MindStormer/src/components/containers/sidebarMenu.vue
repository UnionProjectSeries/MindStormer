<script setup>
const props = defineProps(["direction"])
</script>

<template>
  <div class="menu-container">
    <slot></slot>
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
}
</style>