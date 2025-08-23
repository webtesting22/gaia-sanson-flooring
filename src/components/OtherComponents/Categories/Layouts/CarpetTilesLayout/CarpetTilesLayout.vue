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
                        <div class="SwiperNavigationContainerDesktopOnly">
                            <div class="SwiperNavigation">
                                <button class="common-btn secondary swiper-button-prev-custom">
                                    <span>←</span>
                                </button>
                                <button class="common-btn secondary swiper-button-next-custom">
                                    <span>→</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="paddingTop60">
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
                    <div class="SwiperNavigationContainerMobileOnly">
                        <div class="SwiperNavigation">
                            <button class="common-btn secondary swiper-button-prev-custom">
                                <span>←</span>
                            </button>
                            <button class="common-btn secondary swiper-button-next-custom">
                                <span>→</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div style="background-color: white;">
            <div class="paddingTop80 Container paddingBottom80">
                <h2 class="blackColor marginBottom20">Discover Our Carpet Collection</h2>
                <div class="paddingTop60 CarpertTilesImage">
                    <img src="/Images/CarpetImages/carpet.svg" alt="">
                </div>
            </div>
        </div>

        <div class="propertiesLayoutContainer">
            <div class="Container">
                <h2 class="properties-title">Properties</h2>
                <div class="properties-grid paddingTop60">
                    <div class="property-card">
                        <div class="property-icon">
                            <img src="/Images/propertiesImages/Multi-Directional.png" alt="Multi-Directional" />
                        </div>
                        <span class="property-label">Multi-Directional</span>
                    </div>

                    <div class="property-card">
                        <div class="property-icon">
                            <img src="/Images/propertiesImages/Brick.png" alt="Brick" />
                        </div>
                        <span class="property-label">Brick</span>
                    </div>

                    <div class="property-card">
                        <div class="property-icon">
                            <img src="/Images/propertiesImages/Quarter Turn.png" alt="Quarter Turn" />
                        </div>
                        <span class="property-label">Quarter Turn</span>
                    </div>

                    <div class="property-card">
                        <div class="property-icon">
                            <img src="/Images/propertiesImages/Anti static.png" alt="Anti Static" />
                        </div>
                        <span class="property-label">Anti Static</span>
                    </div>

                    <div class="property-card">
                        <div class="property-icon">
                            <img src="/Images/propertiesImages/Non-Directional.png" alt="Non-Directional" />
                        </div>
                        <span class="property-label">Non-Directional</span>
                    </div>

                    <div class="property-card">
                        <div class="property-icon">
                            <img src="/Images/propertiesImages/Underfloor Heating.png" alt="Underfloor Heating" />
                        </div>
                        <span class="property-label">Underfloor Heating</span>
                    </div>

                    <div class="property-card">
                        <div class="property-icon">
                            <img src="/Images/propertiesImages/Fire Resistant.png" alt="Fire Resistant" />
                        </div>
                        <span class="property-label">Fire Resistant</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="BackgrounStylesAppling">
            <div class="paddingTop80 Container paddingBottom80">
                <div>
                    <h2 class="blackColor marginBottom20">Where Your Vision Meets Our Design Expertise</h2>
                    <br>
                    <h3 style="font-weight: 400;">If you have a specific product or design in mind, we can develop and
                        customize it to match your exact requirements. We offer personalization in backing, pile height,
                        stitch density, and yarn quality. Please note that a minimum order quantity (MOQ) applies for
                        custom
                        orders. We're happy to work with you to create a product that fits your needs. Let us know your
                        ideas, and we’ll help turn them into reality.</h3>
                </div>
            </div>
        </div>
        <div class="gridImagesContainer paddingTop80 paddingBottom80">
            <div class="Container">
                <div class="gridImagesContainerText">
                    <h2 class="blackColor ">Our Work in Spaces</h2>
                    <p>Transform your workspace with carpet tiles that <br> combine design, comfort, and durability.</p>
                </div>
                <div class="girdImagesContainer paddingTop60">
                    <div>
                        <img src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/WorKSpace1.jpg" alt="">
                    </div>
                    <div>
                        <img src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/WorKSpace2.jpg  " alt="">
                    </div>
                    <div>
                        <img src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/WorKSpace3.jpg" alt="">
                    </div>
                    <div>
                        <img src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/WorKSpace4.jpg" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <GetInTouch title="Get In Touch!" subtitle="Tell Us What You Need for Your Perfect Carpet"
        description="Connect with our team to discuss premium carpet tile solutions — including fully customizable options to meet your project requirements." />
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation as SwiperNavigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import CategoriesData from '../../CategoriesLayout/Categories'
import CommonTopLayout from '../../CommonTopLayout/CommonTopLayout.vue'
import GetInTouch from '../../../GetInTouch/GetInTouch.vue'
const route = useRoute()
const category = computed(() => {
    const slug = route.params.slug
    return CategoriesData.find(cat => cat.slug === slug)
})

// Sample design swatches data
const designSwatches = [
    { image: '/Images/CarpetFrames/CarpetFrame1.svg', name: 'Classic Elegance', code: '90020066' },
    { image: '/Images/CarpetFrames/CarpetFrame2.svg', name: 'Modern Luxury', code: '90020066' },
    { image: '/Images/CarpetFrames/CarpetFrame3.svg', name: 'Contemporary Style', code: '90020066' },
    { image: '/Images/CarpetFrames/CarpetFrame4.svg', name: 'Premium Collection', code: '90020066' },
    { image: '/Images/CarpetFrames/CarpetFrame5.svg', name: 'Designer Series', code: '90020066' },
    { image: '/Images/CarpetFrames/CarpetFrame6.svg', name: 'Artisan Craft', code: '90020066' },
    { image: '/Images/CarpetFrames/CarpetFrame7.svg', name: 'Signature Line', code: '90020066' },
    { image: '/Images/CarpetFrames/CarpetFrame8.svg', name: 'Heritage Collection', code: '90020066' },
    { image: '/Images/CarpetFrames/CarpetFrame9.svg', name: 'Innovation Series', code: '90020066' },
    { image: '/Images/CarpetFrames/CarpetFrame10.svg', name: 'Exclusive Edition', code: '90020066' }
]
</script>

<style scoped>
/* Import the CSS file */
@import './CarpetTilesLayout.css';
</style>