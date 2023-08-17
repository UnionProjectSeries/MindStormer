<script setup>

</script>

<template>
  <Draggable handle="strong">
    <div class="container">
      <strong class="handler">Drag here</strong>
      <slot></slot>
    </div>
  </Draggable>
</template>

<style scoped>
.container {
  width: fit-content;
  height: fit-content;
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;
  user-select: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.container:hover {
  border-style: solid;
  border-width: 1px;
  border-color: dodgerblue;
}
.handler {
  width: auto;
  height: 10px;
  border-radius: 5px;
  background-color: rgba(0,0,0,0);
}
</style>