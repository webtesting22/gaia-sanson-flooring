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
                <video autoplay loop class="video">
                    <source src="/videos/GreenPro.mp4" type="video/mp4"></source>
                </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import "./GreenProCertified.css";
</script>

<style scoped>
@import "./GreenProCertified.css";
</style>
