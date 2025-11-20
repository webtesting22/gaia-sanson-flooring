<script>
import "./Certification.css";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      certifications: [
        {
          id: 1,
          name: "Polyester Acoustic Panels 9mm",
          image: "/Images/9MM GreenPro_page-0001.jpg",
          certificationNumber: "GPSFP576001",
        },
        {
          id: 2,
          name: "Polyester Acoustic Panels 12mm",
          image: "/Images/12MM GreenPro_page-0001.jpg",
          certificationNumber: "GPSFP576002",
        },
        {
          id: 3,
          name: "Polyester Acoustic Panels 18mm",
          image: "/Images/18MM GreenPro_page-0001.jpg",
          certificationNumber: "GPSFP576003",
        },
        {
          id: 4,
          name: "Polyester Acoustic Panels 24mm",
          image: "/Images/24MM GreenPro_page-0001.jpg",
          certificationNumber: "GPSFP576004",
        },
      ],
      swiperInstance: null,
      isAnimating: false,
    };
  },
  setup() {
    return {
      modules: [Navigation],
    };
  },
  methods: {
    onSwiper(swiper) {
      this.swiperInstance = swiper;

      // Listen to Swiper's transition events
      swiper.on("slideChangeTransitionStart", () => {
        this.isAnimating = true;
      });

      swiper.on("slideChangeTransitionEnd", () => {
        this.isAnimating = false;
      });
    },
    goToPrevSlide() {
      if (this.swiperInstance && !this.isAnimating) {
        this.swiperInstance.slidePrev();
      }
    },
    goToNextSlide() {
      if (this.swiperInstance && !this.isAnimating) {
        this.swiperInstance.slideNext();
      }
    },
  },
};
</script>

<template>
  <div class="certificationSection paddingTop80 paddingBottom80">
    <div class="certificationsContainer Container">
      <!-- Section Title -->
      <div
        class="qualityFeaturesHeader"
        data-aos="fade-up"
        data-aos-duration="600"
        data-aos-delay="200"
      >
        <h2>GreenPro Certified</h2>
        <p style="text-align: start">
          Our Polyester Acoustic Panels are GreenPro Certified, reflecting our
          commitment to sustainable, safe, and high-performance acoustic
          solutions made in India.
        </p>
      </div>

      <!-- Swiper Carousel -->
      <div
        class="certificationsSwiperContainer"
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="200"
      >
        <swiper
          @swiper="onSwiper"
          :slidesPerView="1"
          :spaceBetween="30"
          :loop="true"
          :speed="800"
          :modules="modules"
          :breakpoints="{
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }"
          class="certificationsSwiper"
        >
          <swiper-slide
            v-for="certification in certifications"
            :key="certification.id"
          >
            <div class="certificationCard">
              <div class="certificationImageContainer">
                <img
                  :src="certification.image"
                  :alt="certification.name"
                  class="certificationImage"
                />
              </div>
              <p class="certificationName">{{ certification.name }}</p>
              <p class="certificationNumber">
                Certificate No: {{ certification.certificationNumber }}
              </p>
            </div>
          </swiper-slide>
        </swiper>

        <!-- Navigation buttons -->
        <div class="certificationsNavigation">
          <button @click="goToPrevSlide" class="navArrow prevArrow">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 18L9 12L15 6"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <button @click="goToNextSlide" class="navArrow nextArrow">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 18L15 12L9 6"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "./Certification.css";
</style>
