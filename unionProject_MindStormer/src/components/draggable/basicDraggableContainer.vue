<script setup>

import DraggableContainer from "../../App.vue";
</script>

<template>
  <a-dropdown :trigger="['contextmenu']">
    <draggable-container>
      <slot name="content"></slot>
    </draggable-container>
<!--    <template #overlay>-->
<!--      <slot name="context-menu"></slot>-->
<!--    </template>-->
  </a-dropdown>
</template>

<style scoped>

</style>