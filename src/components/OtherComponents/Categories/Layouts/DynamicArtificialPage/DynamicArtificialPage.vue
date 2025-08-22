<template>
    <div>
        <CommonTopLayout :heading="grassData.heading" :imageSrc="grassData.imageSrc" :imageAlt="grassData.imageAlt" />

        <div class="Container paddingTop80 paddingBottom80">
            <div class="grassDetailLayout">
                <!-- Left Side - Main Image with Inset -->
                <div class="grassImageSection">
                    <div class="mainImageContainer">
                        <img :src="grassData.mainImage" :alt="grassData.title" class="mainImage" />
                        <div class="productInset">
                            <img :src="grassData.insetImage" :alt="grassData.title + ' Detail'" class="insetImage" />
                        </div>
                    </div>
                </div>

                <!-- Right Side - Content Sections -->
                <div class="grassContentSection">
                    <!-- Overview Section -->
                    <div class="contentSection">
                        <h3 class="sectionTitle">Overview</h3>
                        <p class="sectionContent">{{ grassData.overview }}</p>
                    </div>

                    <!-- Ideal For Section -->
                    <div class="contentSection">
                        <h3 class="sectionTitle">Ideal For</h3>
                        <div class="idealForTags">
                            <div v-for="application in grassData.idealFor" :key="application" class="tag">
                                {{ application }}
                            </div>
                        </div>
                    </div>

                    <!-- Specifications Section -->
                    <div class="contentSection">
                        <h3 class="sectionTitle">Specifications</h3>
                        <ul class="specificationsList">
                            <li v-for="spec in grassData.specifications" :key="spec" class="specItem">
                                <span class="checkmark">✓</span>
                                {{ spec }}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <!-- Second Container - Designed for Every Landscape -->
        <div class="Container paddingTop80 paddingBottom80">
            <div class="landscapeHeader">
                <div class="headerLeft">
                    <h2 class="landscapeTitle">Designed for Every Landscape</h2>
                </div>
                <div class="headerRight">
                    <p class="landscapeDescription">See how our grasses redefine outdoor spaces — creating vibrant,
                        low-maintenance landscapes across diverse applications.</p>
                </div>
            </div>

            <div class="landscapeCarousel paddingTop80">
                <swiper @swiper="onSwiper" :slidesPerView="4" :spaceBetween="10" :loop="true" :speed="700"
                    :modules="[SwiperNavigation, Autoplay]" :breakpoints="{
                        320: { slidesPerView: 1, spaceBetween: 10 },
                        768: { slidesPerView: 2, spaceBetween: 10 },
                        1024: { slidesPerView: 3, spaceBetween: 10 },
                        1200: { slidesPerView: 4, spaceBetween: 10 }
                    }">
                    <swiper-slide v-for="(image, index) in landscapeImages" :key="index" class="landscapeSlide">
                        <div class="landscapeImageContainer">
                            <img :src="image.src" :alt="image.alt" />
                        </div>
                    </swiper-slide>
                </swiper>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation as SwiperNavigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import CommonTopLayout from '../../CommonTopLayout/CommonTopLayout.vue'

const route = useRoute()
const swiperInstance = ref(null)

const onSwiper = (swiper) => {
    swiperInstance.value = swiper
}

// Landscape Images for Carousel
const landscapeImages = [
    {
        src: 'https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/Landscape Grass.png',
        alt: 'Garden Landscape with Artificial Grass'
    },
    {
        src: 'https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/Sports Grass.jpg',
        alt: 'Outdoor Dining Area with Artificial Grass'
    },
    {
        src: 'https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/multisports Grass.jpg',
        alt: 'Outdoor Living Room with Artificial Grass'
    },
    {
        src: 'https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/curly Grass.jpg',
        alt: 'Leisure Space with Artificial Grass'
    },
    {
        src: 'https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/multisports Grass.jpg',
        alt: 'Outdoor Living Room with Artificial Grass'
    },
    {
        src: 'https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/curly Grass.jpg',
        alt: 'Leisure Space with Artificial Grass'
    }
]

// Artificial Grass Data based on type
const grassTypesData = {
    'landscape-grass': {
        heading: 'Landscape Grass - Natural Beauty for Outdoor Spaces',
        imageSrc: 'https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/Landscape Grass.png',
        imageAlt: 'Landscape Grass',
        title: 'Landscape Grass',
        mainImage: 'https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/Landscape Grass.png',
        insetImage: 'https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/Landscape Grass.png',
        overview: 'Perfect for lush gardens, terraces, and outdoor aesthetics, our Landscape Grass combines premium softness with lasting durability.',
        idealFor: ['Villas', 'Rooftops', 'Hotel Lawns', 'Public Parks'],
        specifications: [
            'Available in multiple stitch options (13-30) for varied density and feel.',
            'Wide range of pile heights (20mm-55mm) to match all design intents - from minimalist or luxurious lawns.',
            'Customizable single/double layers & color backing (black or green).',
            'Made with 5500 ± 5% twisted yarn for a natural look and longer life.',
            'Other Stitch types available upon request for bespoke projects.'
        ]
    },
    'sports-grass': {
        heading: 'Sports Grass - Professional Performance for Athletic Fields',
        imageSrc: 'https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/Sports Grass.jpg',
        imageAlt: 'Sports Grass',
        title: 'Sports Grass',
        mainImage: 'https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/Sports Grass.jpg',
        insetImage: 'https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/Sports Grass.jpg',
        overview: 'Engineered for maximum performance and resilience, our Sports Grass is the go-to solution for athletic surfaces.',
        idealFor: ['Football', 'Rugby', 'Athletic Training Fields', 'School Grounds'],
        specifications: [
            '23-stitch density at 50mm pile height for enhanced shock absorption and playbility ',
            'Made with 5% Dtex, ensuring turf durability and under intensive use',
            // 'Shock-absorbing technology for player safety and comfort.',
            // 'UV-stabilized fibers for long-lasting color and performance.',
            // 'Professional installation support and maintenance guidelines included.'
        ]
    },
    'multisports-grass': {
        heading: 'Multisports Grass - Versatile Solution for Multiple Activities',
        imageSrc: 'https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/multisports Grass.jpg',
        imageAlt: 'Multisports Grass',
        title: 'Multisports Grass',
        mainImage: 'https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/multisports Grass.jpg',
        insetImage: 'https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/multisports Grass.jpg',
        overview: 'For multi-use surfaces that demand versatility and safety, our  Multi Sports Grass balances performance with value.',
        idealFor: ['Tennies', 'Badminton', 'Gym Floors', 'Skating Zones'],
        specifications: [
            'compact 10-12.5-15mm pile height for fast-paced sports.',
            '5000 upwards +5% Dtex mono yarn for even texture and wear resistance.'
        ]
    },
    'curly-grass': {
        heading: 'Curly Grass - Unique Texture for Specialized Applications',
        imageSrc: 'https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/curly Grass.jpg',
        imageAlt: 'Curly Grass',
        title: 'Curly Grass',
        mainImage: 'https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/curly Grass.jpg',
        insetImage: 'https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/curly Grass.jpg',
        overview: 'With a textured, "thatched" look, Curly Grass is a great base for low-maintenance areas or accent zones.',
        idealFor: ['Walkways', 'Balcony Layers', 'Retail Display Zones', 'Garden Borders'],
        specifications: [
            '10mm pile height offers a soft but firm surface',
            '3000+ 5% Dtex mono yarn ideal for decorative & underlayer use',
            'Low friction surface reduces dust and wear'
        ]
    }
}

// Get grass type from route params and compute data
const grassData = computed(() => {
    const grassType = route.params.grassType || 'landscape-grass'
    return grassTypesData[grassType] || grassTypesData['landscape-grass']
})
</script>

<style scoped>
@import './DynamicArtificialPage.css';
</style>