<script setup>

</script>

<template>
<div class="container">
  <slot></slot>
</div>
</template>

<style scoped>
.container{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 250;
}
</style>