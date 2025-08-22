<template>
    <div class="HomeGalleryParentContainer">
        <div class="Container paddingTop80 paddingBottom80">
            <div class="HomeGalleryContainer">
                <!-- Header Section -->
                <div class="gallery-header marginBottom80" data-aos="fade-down" data-aos-duration="800"
                    data-aos-delay="100">
                    <h2>Gallery</h2>
                    <!-- <p>Explore our diverse portfolio of flooring installations across various
                        applications</p> -->
                </div>

                <!-- Swiper Gallery Container -->
                <div class="gallery-swiper-container" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
                    <swiper @swiper="onSwiper" :slidesPerView="3" :spaceBetween="20" :loop="true" :speed="600"
                        :modules="modules" class="gallery-swiper" :breakpoints="{
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 15
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 20
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 20
                            }
                        }">
                        <swiper-slide v-for="(image, index) in galleryImages" :key="index" class="gallery-slide">
                            <div class="gallery-item">
                                <div class="image-container">
                                    <img :src="image.src" :alt="image.alt" class="gallery-image" />
                                    <!-- <div class="image-overlay">
                                        <div class="overlay-content">
                                            <span class="view-icon">🔍</span>
                                            <p class="image-caption">{{ image.caption }}</p>
                                        </div>
                                    </div> -->
                                </div>
                            </div>
                        </swiper-slide>
                    </swiper>

                    <!-- Navigation Buttons -->
                    <div class="gallery-navigation" data-aos="fade-up" data-aos-duration="600" data-aos-delay="400">
                        <button @click="goToPrevSlide" class="nav-btn prev-btn">
                            <span>‹</span>
                        </button>
                        <button @click="goToNextSlide" class="nav-btn next-btn">
                            <span>›</span>
                        </button>
                    </div>
                </div>

                <!-- Lightbox Modal -->
                <!-- <div v-if="lightboxOpen" class="lightbox-overlay" @click="closeLightbox">
                    <div class="lightbox-content" @click.stop>
                        <button class="lightbox-close" @click="closeLightbox">×</button>
                        <div class="lightbox-image-container">
                            <img :src="currentImage.src" :alt="currentImage.alt" class="lightbox-image" />
                            <div class="lightbox-caption">
                                <h3>{{ currentImage.caption }}</h3>
                                <p>{{ currentImage.description }}</p>
                            </div>
                        </div>
                        <div class="lightbox-navigation">
                            <button @click="previousImage" class="lightbox-nav-btn prev">‹</button>
                            <button @click="nextImage" class="lightbox-nav-btn next">›</button>
                        </div>
                    </div>
                </div> -->
            </div>
        </div>
    </div>
</template>

<script>
import "./HomeGallery.css"
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    data() {
        return {
            swiperInstance: null,
            lightboxOpen: false,
            currentImageIndex: 0,
            galleryImages: [
                {
                    src: '/Images/GalleryImages/Gallery1.png',
                    alt: 'Professional Flooring Installation',
                    caption: 'Premium Installation',
                    description: 'High-quality flooring installation showcasing our commitment to excellence and attention to detail.'
                },
                {
                    src: '/Images/GalleryImages/Gallery2.png',
                    alt: 'Modern Interior Design',
                    caption: 'Contemporary Design',
                    description: 'Modern interior flooring solutions that blend functionality with sophisticated aesthetics.'
                },
                {
                    src: '/Images/GalleryImages/Gallery3.png',
                    alt: 'Commercial Flooring Project',
                    caption: 'Commercial Excellence',
                    description: 'Durable commercial flooring installations designed for high-traffic environments and lasting performance.'
                },
                {
                    src: '/Images/GalleryImages/Gallery4.png',
                    alt: 'Residential Flooring Solution',
                    caption: 'Residential Beauty',
                    description: 'Elegant residential flooring that transforms living spaces with comfort and style.'
                },
                {
                    src: '/Images/GalleryImages/Gallery5.png',
                    alt: 'Innovative Flooring Design',
                    caption: 'Innovation & Quality',
                    description: 'Cutting-edge flooring solutions that push the boundaries of design and functionality.'
                }
            ]
        };
    },
    computed: {
        currentImage() {
            return this.galleryImages[this.currentImageIndex];
        }
    },
    setup() {
        return {
            modules: [Autoplay, Pagination, Navigation],
        };
    },
    methods: {
        onSwiper(swiper) {
            this.swiperInstance = swiper;
        },
        goToPrevSlide() {
            if (this.swiperInstance) {
                this.swiperInstance.slidePrev();
            }
        },
        goToNextSlide() {
            if (this.swiperInstance) {
                this.swiperInstance.slideNext();
            }
        },
        openLightbox(index) {
            this.currentImageIndex = index;
            this.lightboxOpen = true;
            document.body.style.overflow = 'hidden';
        },
        closeLightbox() {
            this.lightboxOpen = false;
            document.body.style.overflow = 'auto';
        },
        nextImage() {
            this.currentImageIndex = (this.currentImageIndex + 1) % this.galleryImages.length;
        },
        previousImage() {
            this.currentImageIndex = this.currentImageIndex === 0
                ? this.galleryImages.length - 1
                : this.currentImageIndex - 1;
        }
    }
};
</script>

<style scoped></style>