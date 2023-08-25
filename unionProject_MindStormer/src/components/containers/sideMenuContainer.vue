<script setup>

</script>

<template>
<div class="container">
  <div class="title">
    <slot name="title"></slot>
  </div>
  <slot name="content">

  </slot>
</div>
</template>

<style scoped>
.container {
  margin: 5px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: normal;
}
.title {
  margin-bottom: 5px;
  font-size: large;
  font-weight: bold;
}
</style>