<script setup>
// Router is now handled by Vue Router
import "./style.css"
import Footer from "./components/OtherComponents/Footer/Footer.vue"
import NavigationBar from "./components/OtherComponents/NavigationBar/NavigationBar.vue"
import PageTransition from "./components/FramerAnimation/PageTransition.vue"
</script>

<template>
  <NavigationBar />
  <PageTransition>
    <router-view />
  </PageTransition>
  <Footer />
</template>

<style scoped></style>
