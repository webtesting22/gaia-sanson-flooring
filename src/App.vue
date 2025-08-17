<script setup>
// Router is now handled by Vue Router
import "./style.css"
import Footer from "./components/OtherComponents/Footer/Footer.vue"
import NavigationBar from "./components/OtherComponents/NavigationBar/NavigationBar.vue"
import PageTransition from "./components/FramerAnimation/PageTransition.vue"
import WhatsappBtn from "./components/OtherComponents/WhatsappBtn/WhatsappBtn.vue"
</script>

<template>
  <NavigationBar />
  <PageTransition>
    <router-view />
  </PageTransition>
  <Footer />
  <WhatsappBtn />
</template>

<style scoped></style>
