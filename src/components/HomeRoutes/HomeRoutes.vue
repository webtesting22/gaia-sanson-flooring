<script setup>
import HeroHome from "./HeroHome/HeroHome.vue";
import BottomCards from "./HeroHomeCarousalBottomCards/BottomCards.vue";
import OurStoryHome from "./OurStoryHome/OurStoryHome.vue";
import YourVision from "./YourVision/YourVision.vue";
import HomeProducts from "./HomeProducts/HomeProducts.vue";
import HandCraftedCommon from "./HandCraftedCommon/HandCraftedCommon.vue";
import SetsAPart from "./SetsAPart/SetsAPart.vue";
import HomeImageComparison from "./HomeImageComparison/HomeImageComparison.vue";
import HomeGallery from "./HomeGallery/HomeGallery.vue";
import GetInTouch from "../OtherComponents/GetInTouch/GetInTouch.vue";
</script>

<template>
  <HeroHome />
  <BottomCards />
  <OurStoryHome />
  <YourVision />
  <HomeProducts />
  <HandCraftedCommon />
  <SetsAPart />
  <HomeImageComparison />
  <HomeGallery />
  <GetInTouch
    title="Get In Touch!"
    subtitle="Tell Us Your Needs, We'll Tailor the Solution"
    description="Whether you're a potential partner, client or collaborator - we'd love to explore how we can grow together. Drop us a message to learn more."
  />
</template>

<style scoped></style>
