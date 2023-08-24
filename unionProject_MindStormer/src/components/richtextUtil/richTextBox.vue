<script setup>
import {Editor, EditorContent} from '@tiptap/vue-3'
import {onMounted, ref} from 'vue'

const editor = ref()

onMounted(()=> {
  editor.value = new Editor({
    extensions: [],
    content: ``
  })
})


</script>

<template>
  <editor-content :editor="editor"></editor-content>
</template>

<style scoped>

</style>