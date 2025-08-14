<template>
  <div class="image-loader">
    <transition
      name="image-fade"
      mode="out-in"
      appear
    >
      <img
        v-if="imageLoaded"
        :src="src"
        :alt="alt"
        :class="imageClass"
        :style="imageStyle"
        class="loaded-image"
        v-bind="$attrs"
      />
    </transition>
    
    <transition name="placeholder-fade">
      <div
        v-if="!imageLoaded"
        class="image-placeholder"
      >
        <div class="placeholder-content">
          <div class="placeholder-icon">📷</div>
          <div class="placeholder-text">Loading...</div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  src: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    default: ''
  },
  imageClass: {
    type: String,
    default: ''
  },
  imageStyle: {
    type: Object,
    default: () => ({})
  }
})

const imageLoaded = ref(false)
const imageError = ref(false)

const onImageLoad = () => {
  imageLoaded.value = true
}

const onImageError = () => {
  imageError.value = true
}

// Preload image when component mounts
const preloadImage = () => {
  const img = new Image()
  img.onload = onImageLoad
  img.onerror = onImageError
  img.src = props.src
}

// Start preloading immediately
preloadImage()
</script>

<style scoped>
.image-loader {
  position: relative;
  display: inline-block;
  overflow: hidden;
  width: 100%;
  height: 100%;
}

.loaded-image {
  display: block;
  max-width: 100%;
  height: auto;
  will-change: filter, opacity, transform;
}

.image-placeholder {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  backdrop-filter: blur(5px);
}

.placeholder-content {
  text-align: center;
  color: #64748b;
}

.placeholder-icon {
  font-size: 2rem;
  margin-bottom: 0.5rem;
  opacity: 0.7;
}

.placeholder-text {
  font-size: 0.875rem;
  font-weight: 500;
  opacity: 0.8;
}

/* Image Fade Transition */
.image-fade-enter-active {
  transition: all 0.5s cubic-bezier(0.25, 0.1, 0.25, 1);
}

.image-fade-enter-from {
  opacity: 0;
  filter: blur(15px);
  transform: scale(1.02);
}

.image-fade-enter-to {
  opacity: 1;
  filter: blur(0px);
  transform: scale(1);
}

/* Placeholder Fade Transition */
.placeholder-fade-enter-active,
.placeholder-fade-leave-active {
  transition: all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
}

.placeholder-fade-enter-from {
  opacity: 0;
  transform: scale(0.95);
}

.placeholder-fade-leave-to {
  opacity: 0;
  transform: scale(1.05);
}

.placeholder-fade-enter-to,
.placeholder-fade-leave-from {
  opacity: 1;
  transform: scale(1);
}
</style> 