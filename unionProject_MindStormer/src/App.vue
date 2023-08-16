<script setup>
import {ref} from "vue"
import SideMenus from "./components/MindStormerLocalComponents/Menu/sideMenus.vue";
import WelcomeDialog from "./components/MindStormerLocalComponents/dialog/welcomeDialog.vue";
import AbsoluteContainer from "./components/containers/absoluteContainer.vue";

const displayWelcomeDialog = ref(true)
</script>

<template>
  <side-menus/>
  <welcome-dialog v-if="displayWelcomeDialog" @close-overflow="displayWelcomeDialog = false"/>
  <absolute-container>
    <div v-draggable class="test-box">This is a test box</div>
  </absolute-container>
</template>

<style scoped>
.test-box{
  width: fit-content;
  height: fit-content;
}
</style>
