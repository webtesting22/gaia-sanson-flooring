<template>
    <div class="width100">
        <CommonTopLayout heading="Premium Artificial Grass for Every Space"
            imageSrc="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/Acoustic Solutions Image.png"
            imageAlt="Acoustic Solutions" />

        <div class="BlueBackContainer paddingTop80 paddingBottom80">
            <div class="Container">
                <h2 class="whiteColor">Coming Soon – Explore Our New Arrivals</h2>
                <br>
                <p class="whiteColor">Get ready for our latest additions: <strong>Non-Woven (Felt)</strong> and
                    <strong>Machine Woven
                        Carpets</strong>.
                </p>
                <!-- <br> -->
                <p class="whiteColor">Stay tuned and be the first to experience them!</p>
            </div>
            <div class="Container paddingTop80">

            </div>
        </div>

        <!-- Grid Layout Section -->
        <div class="gridSection paddingTop80 paddingBottom80">
            <div class="Container">
                <div class="gridContainer">
                    <div class="leftImage">
                        <img src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/SpecificationImage.png"
                            alt="Specification Image" />
                    </div>
                    <div class="rightContent">
                        <h2>Specification</h2>
                        <ul>
                            <li><b>Acoustic Panel boards</b> are made from Recycled Polyester Fiber and are meant to be
                                used
                                for Wall Claddings, Ceilings and Paneling.</li>
                            <li><b>More than</b> 54 Colors Bank</li>
                            <li>Density: 1350-4000 g/m3</li>
                            <li><b>Acoustic Panel boards can absorb</b> 30% of Sound (0.3 NRC) when the panel is
                                directly fixed
                                onto the wall.</li>
                            <li><b>Acoustic Panel boards can absorb</b> 85% to 90% (0.85 to 0.9) of the sound when the
                                Acoustic
                                Panel is installed correctly keeping a gap between the wall and the Acoustic Panels.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <GetInTouch />
</template>

<script setup>
import { ref } from 'vue'
import 'swiper/css'
import 'swiper/css/navigation'
import CommonTopLayout from '../CommonTopLayout/CommonTopLayout.vue'
import GetInTouch from '../../GetInTouch/GetInTouch.vue'

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
        image: 'https://images.unsplash.com/photo-1715934514075-06f0dbda1c09?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Kids at Play',
        description: 'Soft, safe, and always green – perfect turf for endless fun.'
    },
    {
        image: 'https://images.unsplash.com/photo-1715934514075-06f0dbda1c09?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Indoor Play Zone',
        description: 'Bring the playground indoors with vibrant, cushioned grass.'
    },
    {
        image: 'https://images.unsplash.com/photo-1715934514075-06f0dbda1c09?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Colorful Outdoor Playground',
        description: 'A splash of color and comfort for big adventures under the sun.'
    },
    {
        image: 'https://images.unsplash.com/photo-1715934514075-06f0dbda1c09?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Colorful Outdoor Playground',
        description: 'A splash of color and comfort for big adventures under the sun.'
    },
]
</script>

<style scoped>
@import './AcousticTilesLayout.css';
</style>