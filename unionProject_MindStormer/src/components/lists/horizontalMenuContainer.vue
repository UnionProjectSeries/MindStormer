<script setup>

</script>

<template>
<div class="main-box">
  <slot>

  </slot>
</div>
</template>

<style scoped>
.main-box {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: auto;
  height: fit-content;
  margin-top: 5px;
  margin-bottom: 5px;
}
</style>