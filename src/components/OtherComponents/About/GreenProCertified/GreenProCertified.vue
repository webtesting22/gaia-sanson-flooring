<template>
  <div class="GreenProCertifiedContainer paddingTop80 paddingBottom80">
    <div class="Container">
      <div class="grid">
        <div class="grid-item">
          <div class="greenProCertifiedImageContainer">
            <img
              src="/Images/GreenProCertified/green-pro-certified.svg"
              alt="GreenPro Logo"
              class="greenProCertifiedImage"
            />
          </div>
        </div>
        <div class="grid-item">
          <div class="circleContainer">
            <div class="circleWrapper">
              <div class="outlineCircle">
                <div class="innerCircle"></div>
              </div>
            </div>
            <div class="videoContainer">
              <video
                ref="videoRef"
                autoplay
                loop
                muted
                playsinline
                webkit-playsinline
                preload="metadata"
                class="video"
              >
                <source src="/videos/GreenPro.mp4" type="video/mp4" />
                <!-- Fallback for older browsers -->
                <object data="/videos/GreenPro.mp4" type="video/mp4">
                  <embed src="/videos/GreenPro.mp4" type="video/mp4" />
                </object>
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import "./GreenProCertified.css";

const videoRef = ref(null);

onMounted(() => {
  const video = videoRef.value;
  if (video) {
    // iOS Safari compatibility
    video.muted = true;
    video.playsInline = true;

    // Try to play the video
    const playPromise = video.play();

    if (playPromise !== undefined) {
      playPromise.catch((error) => {
        console.log("Autoplay prevented:", error);
        // If autoplay fails, try again on user interaction
        document.addEventListener(
          "touchstart",
          () => {
            video.play().catch((e) => console.log("Play failed:", e));
          },
          { once: true }
        );
      });
    }
  }
});
</script>

<style scoped>
@import "./GreenProCertified.css";
</style>
