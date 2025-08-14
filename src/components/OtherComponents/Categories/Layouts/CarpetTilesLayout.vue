<template>
    <div class="width100">
        <CommonTopLayout heading="Carpet Tiles Crafted for Modern Spaces"
            imageSrc="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/CarprtTiles.png"
            imageAlt="Carpet tiles background image" />
        <div class="ChooseDesignsContainer">
            <div class="Container paddingTop80 paddingBottom80 ">
                <div class="ChooseDesignsContainer">
                    <div class="CommonHeader">
                        <h2 class="blackColor marginBottom20">Choose a design to preview</h2>
                        <div class="SwiperNavigation">
                            <button class="common-btn secondary swiper-button-prev-custom">
                                <span>&lt;</span>
                            </button>
                            <button class="common-btn secondary swiper-button-next-custom">
                                <span>&gt;</span>
                            </button>
                        </div>
                    </div>

                    <swiper :modules="[SwiperNavigation, Autoplay]" :slides-per-view="7" :space-between="20"
                        :loop="true" :speed="700" :autoplay="{
                            delay: 2500,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }" :navigation="{
                            nextEl: '.swiper-button-next-custom',
                            prevEl: '.swiper-button-prev-custom'
                        }" :breakpoints="{
                            320: { slidesPerView: 3, spaceBetween: 15 },
                            768: { slidesPerView: 6, spaceBetween: 20 },
                            1024: { slidesPerView: 6, spaceBetween: 20 },
                            1200: { slidesPerView: 8, spaceBetween: 20 }
                        }" class="DesignSwiper">
                        <swiper-slide v-for="(design, index) in designSwatches" :key="index" class="DesignSlide">
                            <div class="DesignSwatch">
                                <img :src="design.image" :alt="design.name" class="SwatchImage">
                                <p class="SwatchCode">{{ design.code }}</p>
                            </div>
                        </swiper-slide>
                    </swiper>
                </div>
            </div>
        </div>
        <div class="paddingTop80 Container paddingBottom80">
            <h2 class="blackColor marginBottom20">Discover Our Carpet Collection</h2>
            <div class="paddingTop80 CarpertTilesImage">
                <img src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/carpet collection.png" alt="">
            </div>
        </div>
        <div class="paddingTop80 Container paddingBottom80">
            <div>
                <h2 class="blackColor marginBottom20">Where Your Vision Meets Our Design Expertise</h2>
                <h3>We create custom carpet tiles that are tailored entirely to your vision, delivering results that are
                    exclusive to your requirements.</h3>
            </div>
        </div>
        <div class="girdImagesContainer">
            <div>
                <img src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/CarpetTilesLayoutImage1.png" alt="">
            </div>
            <div>
                <img src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/CarpetTilesLayoutImage2.png" alt="">
            </div>
        </div>
    </div>
    <GetInTouch />
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation as SwiperNavigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import CategoriesData from '../CategoriesLayout/Categories'
import CommonTopLayout from '../CommonTopLayout/CommonTopLayout.vue'
import GetInTouch from '../../GetInTouch/GetInTouch.vue'
const route = useRoute()
const category = computed(() => {
    const slug = route.params.slug
    return CategoriesData.find(cat => cat.slug === slug)
})

// Sample design swatches data
const designSwatches = [
    { image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=150&h=150&fit=crop', name: 'Light Beige', code: '90020066' },
    { image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=150&h=150&fit=crop', name: 'Dark Grey', code: '90020066' },
    { image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=150&h=150&fit=crop', name: 'Muted Blue', code: '90020066' },
    { image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=150&h=150&fit=crop', name: 'Dark Blue', code: '90020066' },
    { image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=150&h=150&fit=crop', name: 'Mustard Gold', code: '90020066' },
    { image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=150&h=150&fit=crop', name: 'Olive Green', code: '90020066' },
    { image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=150&h=150&fit=crop', name: 'Deep Red', code: '90020066' },
    { image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=150&h=150&fit=crop', name: 'Multi-colored', code: '90020066' },
    { image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=150&h=150&fit=crop', name: 'Brown Orange', code: '90020066' },
    { image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=150&h=150&fit=crop', name: 'Dark Grey Black', code: '90020066' },
    { image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=150&h=150&fit=crop', name: 'Dark Grey Black', code: '90020066' }
]
</script>

<style scoped>
/* Import the CSS file */
@import './CarpetTilesLayout.css';
</style>