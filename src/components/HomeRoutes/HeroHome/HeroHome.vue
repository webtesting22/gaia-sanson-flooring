<script>
import "./HeroHome.css"
import CarousalData from "./CarousalData.jsx"
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import ImageLoader from '../../FramerAnimation/ImageLoader.vue'

export default {
    components: {
        Swiper,
        SwiperSlide,
        ImageLoader,
    },
    data() {
        return {
            carouselData: CarousalData,
            swiperInstance: null,
            currentSlide: 0,
            isAnimating: false,
        };
    },
    setup() {
        return {
            modules: [Autoplay, Pagination, Navigation],
        };
    },
    computed: {
        currentSlideData() {
            return this.carouselData[this.currentSlide] || this.carouselData[0];
        }
    },
    methods: {
        onSwiper(swiper) {
            this.swiperInstance = swiper;
            // Listen to slide change events
            swiper.on('slideChange', () => {
                this.currentSlide = swiper.realIndex;
                this.triggerTextAnimation();
            });
        },
        triggerTextAnimation() {
            this.isAnimating = true;
            setTimeout(() => {
                this.isAnimating = false;
            }, 600);
        },
        goToPrevSlide() {
            if (this.swiperInstance && !this.isAnimating) {
                this.triggerTextAnimation();
                this.swiperInstance.slidePrev();
            }
        },
        goToNextSlide() {
            if (this.swiperInstance && !this.isAnimating) {
                this.triggerTextAnimation();
                this.swiperInstance.slideNext();
            }
        }
    }
}; 
</script>

<template>
    <div class="HomePageHeroContainer  ">
        <div class="hero-carousel-wrapper">
            <!-- Left side text content with animations -->
            <div class="SwiperDetailsContentContainer">
                <div class="Container hero-text-content">
                    <transition name="slide-text" mode="out-in">
                        <div :key="currentSlide" class="text-content-wrapper" :class="{ 'animating': isAnimating }">
                            <h1 class="hero-title animated-title">
                                {{ currentSlideData.title || 'FLOORING &' }}<br>
                                {{ currentSlideData.description || 'ACOUSTIC SOLUTION' }}
                            </h1>
                            <button class="hero-cta-btn animated-button">CONTACT US</button>
                        </div>
                    </transition>
                </div>
            </div>

            <!-- Carousel container -->
            <div class="carousel-container">
                <swiper @swiper="onSwiper" :spaceBetween="0" :centeredSlides="true" :loop="true" :autoplay="{
                    delay: 2500,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }" :modules="modules" :speed="800" class="mySwiper">
                    <swiper-slide v-for="item in carouselData" :key="item.id">
                        <div class="slide-content">
                            <ImageLoader :src="item.image" :alt="item.title" />
                        </div>
                    </swiper-slide>
                </swiper>

                <!-- Navigation buttons -->
                <div class="carousel-navigation">
                    <button @click="goToPrevSlide" class="carousel-nav-btn prev-btn">
                        <span>‹</span>
                    </button>
                    <button @click="goToNextSlide" class="carousel-nav-btn next-btn">
                        <span>›</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
