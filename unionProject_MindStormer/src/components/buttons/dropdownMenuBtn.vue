<script setup>

</script>

<template>
<div class="dropdownMenuBtn">
  <slot name="label"></slot>
</div>
</template>

<style scoped>
.dropdownMenuBtn {
  border-radius: 5px;
  margin-right: 5px;
  padding: 5px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.1s;
}
.dropdownMenuBtn:hover {
  background-color: rgba(0,0,0,0.1);
}
</style>