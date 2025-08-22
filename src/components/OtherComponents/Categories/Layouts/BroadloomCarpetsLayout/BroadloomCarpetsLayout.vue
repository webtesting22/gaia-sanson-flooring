<template>
    <div class="width100">
        <CommonTopLayout heading="Premium Artificial Grass for Every Space"
            imageSrc="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/ArtificialGrassImage.png"
            imageAlt="Artificial grass background image" />

        <div class="Container paddingTop80 paddingBottom80">
            <div>
                <div class="CommonHeader">
                    <h2>Choose a design to preview</h2>
                    <div class="SwiperNavigation">
                        <button class="common-btn secondary swiper-button-prev-custom">
                            <span>&lt;</span>
                        </button>
                        <button class="common-btn secondary swiper-button-next-custom">
                            <span>&gt;</span>
                        </button>
                    </div>
                </div>

                <div class="swiper-container paddingTop80 BroadloomCarpetsLayoutSwiper">
                    <swiper @swiper="onSwiper" :slidesPerView="3" :spaceBetween="30" :centeredSlides="true" :loop="true"
                        :speed="700" :modules="[SwiperNavigation, Autoplay]" class="artificial-grass-swiper"
                        id="AnimateSwiper" :autoplay="{
                            delay: 2500,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }" :breakpoints="{
                            320: { slidesPerView: 4, spaceBetween: 10 },
                            768: { slidesPerView: 4, spaceBetween: 10 },
                            1024: { slidesPerView: 2, spaceBetween: 30 },
                            1200: { slidesPerView: 3, spaceBetween: 30 }
                        }" :navigation="{
                            nextEl: '.swiper-button-next-custom',
                            prevEl: '.swiper-button-prev-custom'
                        }">
                        <swiper-slide v-for="(design, index) in designSwatches" :key="index" class="DesignSlide">
                            <div class="DesignSwatch">
                                <div class="swatch-image">
                                    <img :src="design.image" :alt="design.name" />
                                    <div class="ImageOverlayText">
                                        <h3 class="whiteColor">{{ design.name }}</h3>
                                    </div>
                                </div>
                                <div class="swatch-info">
                                    <div class="FlexEndContainer">
                                        <div class="story-arrow-icon">↗</div>
                                        <div>
                                            <h3 class="whiteColor">{{ design.name }}</h3>
                                            <br>
                                            <div class="swatch-description">
                                                <p class="whiteColor">{{ design.specifications }}</p>
                                                <br>
                                                <p class="whiteColor">{{ design.pileHeights }}</p>
                                                <br>
                                                <ul>
                                                    <li v-for="feature in design.features" :key="feature"
                                                        class="whiteColor">{{ feature }}
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </swiper-slide>
                    </swiper>
                </div>

            </div>
        </div>
        <div class="width100 BroadloomCarpetsLayoutContainer ">
            <div class="BackgroundColorContainer">
                <div>

                </div>
                <div>

                </div>
            </div>
            <div class="CommonHeader paddingTop80 paddingBottom80 Container">
                <div class="width100">
                    <div class="max-width-800">
                        <h2 class="text-center">Designed for Every Space</h2>
                        <p class="text-center">Our artificial grass enhances environments of all sizes, offering
                            durability, comfort, and
                            year-round greenery</p>
                    </div>
                    <div class="paddingTop80">
                        <swiper @swiper="onSwiper" :slidesPerView="3" :spaceBetween="50" :loop="true" :speed="700"
                            :modules="[SwiperNavigation, Autoplay]" :breakpoints="{
                                320: { slidesPerView: 1, spaceBetween: 15 },
                                768: { slidesPerView: 2, spaceBetween: 20 },
                                1024: { slidesPerView: 2, spaceBetween: 30 },
                                1200: { slidesPerView: 3, spaceBetween: 100 }
                            }" :navigation="{
                                nextEl: '.swiper-button-next-custom',
                                prevEl: '.swiper-button-prev-custom'
                            }">
                            <swiper-slide v-for="(design, index) in DesignedData" :key="index" class="DesignSlide">
                                <div class="DesignedContainer">
                                    <div class="DesignedImage">
                                        <img :src="design.image" :alt="design.name" />
                                    </div>
                                    <div class="DesignedText">
                                        <h3 class="text-center">{{ design.title }}</h3>
                                        <p class="text-center" style="color: #525252;">{{ design.description }}</p>
                                    </div>
                                </div>
                            </swiper-slide>
                        </swiper>
                    </div>
                </div>

            </div>
        </div>
    </div>
    <GetInTouch />
</template>

<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation as SwiperNavigation, Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import CommonTopLayout from '../../CommonTopLayout/CommonTopLayout.vue'
import GetInTouch from '../../../GetInTouch/GetInTouch.vue'
import "./BroadloomCarpetsLayout.css"
const swiperInstance = ref(null)

const onSwiper = (swiper) => {
    swiperInstance.value = swiper
}

const designSwatches = [
    {
        image: 'https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/GrassCard1.png',
        name: 'Landscape Grass',
        specifications: 'Available in 13,14,15,18,24 Stitches, other stitches also available on request in following Pile Height.',
        pileHeights: '20mm, 25mm, 30mm, 35mm, 40mm, 45mm, 50mm, 55mm',
        features: [
            'Single / Double Layered',
            'Black / Green Backing',
            '6000 ± 5% Twisted yarn'
        ]
    },
    {
        image: 'https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/GrassCard2.png',
        name: 'Sports Grass',
        specifications: 'Professional sports turf solutions with enhanced durability and performance.',
        pileHeights: '15mm, 20mm, 25mm, 30mm',
        features: [
            'High-performance sports turf',
            'UV resistant',
            'Drainage optimized'
        ]
    },
    {
        image: 'https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/GrassCard3.png',
        name: 'Curly Grass',
        specifications: 'Decorative artificial grass with natural curly texture for aesthetic appeal.',
        pileHeights: '25mm, 30mm, 35mm, 40mm',
        features: [
            'Natural curly texture',
            'Low maintenance',
            'Perfect for landscaping'
        ]
    },
    {
        image: 'https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/GrassCard1.png',
        name: 'Premium Grass',
        specifications: 'Luxury artificial grass with premium feel and exceptional quality.',
        pileHeights: '30mm, 35mm, 40mm, 45mm, 50mm',
        features: [
            'Premium quality material',
            'Soft underfoot',
            'Long-lasting durability'
        ]
    },
]


const DesignedData = [
    {
        image: 'https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/Kids at Play.png',
        title: 'Child-Friendly Play Lounge',
        description: 'Soft, safe, and always green – perfect turf for endless fun.'
    },
    {
        image: 'https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/Indoor Play Zone.png',
        title: 'Indoor Play Zone',
        description: 'Bring the playground indoors with vibrant, cushioned grass.'
    },
    {
        image: 'https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/Colorful Outdoor Playground.png',
        title: 'Colorful Outdoor Playground',
        description: 'A splash of color and comfort for big adventures under the sun.'
    },
]
</script>

<style scoped>
@import './BroadloomCarpetsLayout.css';
</style>