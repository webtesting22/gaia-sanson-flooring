<template>
  <div
    v-if="isVisible"
    class="back-to-top"
    @click="scrollToTop"
    :class="{ show: isVisible }"
  >
    <div class="back-to-top-icon">
      <i class="fas fa-arrow-up"></i>
    </div>
    <div class="pulse"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const isVisible = ref(false);

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const handleScroll = () => {
  const scrollY = window.scrollY;
  isVisible.value = scrollY > 100;
  console.log("Scroll Y:", scrollY, "isVisible:", isVisible.value);
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
.back-to-top {
  position: fixed;
  bottom: 100px;
  right: 30px;
  width: 50px;
  height: 50px;
  background: #a38410;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(163, 132, 16, 0.3);
  transition: all 0.3s ease;
  z-index: 9999;
  opacity: 0;
  transform: translateY(20px);
}

.back-to-top.show {
  opacity: 1;
  transform: translateY(0);
}

.back-to-top:hover {
  background: #8a6f0e;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(163, 132, 16, 0.4);
}

.back-to-top:active {
  transform: translateY(0);
}

.back-to-top-icon {
  color: white;
  z-index: 2;
  position: relative;
  display: flex;
}

.pulse {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #a38410;
  opacity: 0.6;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 0.6;
  }

  50% {
    transform: scale(1.2);
    opacity: 0.3;
  }

  100% {
    transform: scale(1);
    opacity: 0.6;
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .back-to-top {
    bottom: 90px;
    right: 20px;
    width: 45px;
    height: 45px;
  }
}

@media (max-width: 480px) {
  .back-to-top {
    bottom: 80px;
    right: 15px;
    width: 40px;
    height: 40px;
  }

  .back-to-top svg {
    width: 16px;
    height: 16px;
  }
}
</style>
