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
                <div class="AnimatedImageContainerMainContainer">
                    <div class="AnimatedImageContainer">
                        <div class="FirstImage">

                        </div>
                        <div class="SecondImage">

                        </div>
                        <div class="ThirdImage">

                        </div>
                        <div class="FourthImage"> </div>
                        <div class="FifthImage">
                            <div class="FifthFirstImage">

                            </div>
                            <div class="FifthSecondImage">

                            </div>
                            <div class="FifthThirdImage"></div>
                        </div>
                        <div class="SixthImage">

                        </div>
                        <div class="SeventhImage">

                        </div>
                        <div class="EighthImage">

                        </div>
                        <div class="NinthImage">

                        </div>
                    </div>
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
                        <p class="property-label">Multi-Directional</p>
                    </div>

                    <div class="property-card">
                        <div class="property-icon">
                            <img src="/Images/propertiesImages/Brick.png" alt="Brick" />
                        </div>
                        <p class="property-label">Brick</p>
                    </div>

                    <div class="property-card">
                        <div class="property-icon">
                            <img src="/Images/propertiesImages/Quarter Turn.png" alt="Quarter Turn" />
                        </div>
                        <p class="property-label">Quarter Turn</p>
                    </div>

                    <div class="property-card">
                        <div class="property-icon">
                            <img src="/Images/propertiesImages/Anti static.png" alt="Anti Static" />
                        </div>
                        <p class="property-label">Anti Static</p>
                    </div>

                    <div class="property-card">
                        <div class="property-icon">
                            <img src="/Images/propertiesImages/Non-Directional.png" alt="Non-Directional" />
                        </div>
                        <p class="property-label">Non-Directional</p>
                    </div>

                    <div class="property-card">
                        <div class="property-icon">
                            <img src="/Images/propertiesImages/Underfloor Heating.png" alt="Underfloor Heating" />
                        </div>
                        <p class="property-label">Underfloor Heating</p>
                    </div>

                    <div class="property-card">
                        <div class="property-icon">
                            <img src="/Images/propertiesImages/Fire Resistant.png" alt="Fire Resistant" />
                        </div>
                        <p class="property-label">Fire Resistant</p>
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
import { computed, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation as SwiperNavigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import CategoriesData from '../../CategoriesLayout/Categories'
import CommonTopLayout from '../../CommonTopLayout/CommonTopLayout.vue'
import GetInTouch from '../../../GetInTouch/GetInTouch.vue'

// Scroll animation variables
let animationContainers = []

// Initialize AOS-style fade-in animations
onMounted(() => {
    // Get all animated containers
    animationContainers = document.querySelectorAll('.AnimatedImageContainer > div')
    
    // Set initial offsets (responsive based on screen size)
    const isMobile = window.innerWidth <= 768
    const isSmallMobile = window.innerWidth <= 480
    
    const offsets = isMobile ? [
        // Mobile offsets - smaller values for compact layout
        { x: -30, y: -20 },  // FirstImage
        { x: 25, y: -35 },   // SecondImage  
        { x: -25, y: 20 },   // ThirdImage
        { x: 30, y: 15 },    // FourthImage
        { x: -20, y: -25 },  // FifthImage
        { x: 20, y: 30 },    // SixthImage
        { x: -35, y: -15 },  // SeventhImage
        { x: 25, y: -20 },   // EighthImage
        { x: -20, y: 25 }    // NinthImage
    ] : [
        // Desktop offsets - original values
        { x: -50, y: -30 },  // FirstImage
        { x: 40, y: -50 },   // SecondImage  
        { x: -45, y: 35 },   // ThirdImage
        { x: 50, y: 25 },    // FourthImage
        { x: -30, y: -40 },  // FifthImage
        { x: 35, y: 50 },    // SixthImage
        { x: -55, y: -25 },  // SeventhImage
        { x: 45, y: -35 },   // EighthImage
        { x: -40, y: 45 }    // NinthImage
    ]
    
    // Apply initial transforms
    animationContainers.forEach((container, index) => {
        if (offsets[index]) {
            container.style.transform = `translate(${offsets[index].x}px, ${offsets[index].y}px)`
            container.style.opacity = '0'
            container.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        }
    })
    
    // Create intersection observer for viewport-based animations (AOS style)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const container = entry.target
                const index = Array.from(animationContainers).indexOf(container)
                
                // Animate to final position with delay based on index
                setTimeout(() => {
                    container.style.transform = 'translate(0px, 0px)'
                    container.style.opacity = '1'
                }, index * 100) // Stagger animation by 100ms per container
            }
        })
    }, {
        threshold: 0.3, // Trigger when 30% of container is visible
        rootMargin: '0px 0px -50px 0px' // Trigger slightly before container enters viewport
    })
    
    // Observe all containers
    animationContainers.forEach(container => {
        observer.observe(container)
    })
    
    // Cleanup function
    return () => {
        observer.disconnect()
    }
})

onUnmounted(() => {
    // Cleanup scroll listeners
    window.removeEventListener('scroll', () => {})
})

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