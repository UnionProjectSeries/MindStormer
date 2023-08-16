<script setup>
import {ref} from "vue"
import SideMenus from "./components/MindStormerLocalComponents/Menu/sideMenus.vue";
import WelcomeDialog from "./components/MindStormerLocalComponents/dialog/welcomeDialog.vue";

const displayWelcomeDialog = ref(true)
</script>

<template>
  <side-menus/>
  <welcome-dialog v-if="displayWelcomeDialog" @close-overflow="displayWelcomeDialog = false"/>
</template>

<style scoped>

</style>
