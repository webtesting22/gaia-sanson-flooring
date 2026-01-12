<template>
  <div class="GreenProCertifiedContainer paddingTop80 paddingBottom80">
    <div class="Container">
      <div class="grid">
        <div class="grid-item">
          <div class="greenProCertifiedImageContainer">
            <img
              :src="imageSrc"
              alt="GreenPro Logo"
              class="greenProCertifiedImage"
              <source
              :src="imageSrc"
              type="image/png"
            />
            <object :data="imageSrcd" type="image/png">
              <embed :src="imageSrc" type="image/png" />
            </object>
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
                preload="metadata"
                class="video"
              >
                <source :src="videoSrc" type="video/mp4" />
                <object :data="videoSrc" type="video/mp4">
                  <embed :src="videoSrc" type="video/mp4" />
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

const props = defineProps({
  imageSrc: {
    type: String,
    required: true,
  },
  videoSrc: {
    type: String,
    required: true,
  },
  imageSrc: {
    type: String,
    required: true,
  },
});

const videoRef = ref(null);
const imageRef = ref(null);

onMounted(() => {
  const video = videoRef.value;
  if (video) {
    video.muted = true;
    video.playsInline = true;
    const playPromise = video.play();
    if (playPromise) {
      playPromise.catch(() => {
        document.addEventListener("touchstart", () => video.play(), {
          once: true,
        });
      });
    }
  }
});
</script>

<style scoped>
@import "./GreenProCertified.css";
</style>
