<template>
    <div class="width100">
        <CommonTopLayout heading="Premium Artificial Grass for Every Space"
            imageSrc="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/ArtificialGrassImage.png"
            imageAlt="Artificial grass background image" />

        <div class="Container paddingTop80 paddingBottom80">
            <h1 style="color: black;">Updating.......</h1>
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