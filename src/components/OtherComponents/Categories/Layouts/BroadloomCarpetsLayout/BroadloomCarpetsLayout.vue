<template>
    <div class="width100">
        <CommonTopLayout heading="Broadloom Carpets"
            imageSrc="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/BroadloomCarpetsbannerImage.png"
            imageAlt="Artificial grass background image" />
        <div class="paddingTop80 ">
            <MakeInIndia />
        </div>
        <div class=" paddingTop80 paddingBottom80 BackGroundColorBroadloom">
            <div class="max-width-800 ">
                <h2 class="text-center">Engineered Broadloom: Process &
                    Performance</h2>
                <br>
                <p class="text-center">We manufacture tufted broadloom carpets in wide rolls for seamless wall-to-wall
                    installation.
                    Using advanced tufting machinery, our process provides precise control over pile height,
                    density and pattern—ensuring both performance and design flexibility. Broadloom delivers
                    a continuous surface with fewer seams, enhancing durability and aesthetics in large
                    spaces.</p>
            </div>

        </div>
        <div class="paddingTop80 Container paddingBottom80">
            <div>
                <div>
                    <h2>Discover Our Broadloom Collection</h2>
                    <br>
                </div>
                <div class="BroadLoomDesignsContainer paddingTop80">
                    <div class="BroadLoomDesignsContainerInner">
                        <div class="LeftSideDesigns">
                            <div>
                                <p>90020115</p>
                                <hr>
                                <br>
                                <div>
                                    <img src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/90020115.png"
                                        alt="">
                                </div>
                            </div>
                        </div>
                        <div class="RightSideDesigns">
                            <div class="RelativeContainer">
                                <div class="CirclesContainer">
                                    <div>
                                        <img src="/Images/BroadLoomCircleImages/90020115/image 229.png"
                                            alt="90020115 circle 1">
                                    </div>
                                    <div>
                                        <img src="/Images/BroadLoomCircleImages/90020115/image 230.png"
                                            alt="90020115 circle 2">
                                    </div>
                                    <div>
                                        <img src="/Images/BroadLoomCircleImages/90020115/image 231.png"
                                            alt="90020115 circle 3">
                                    </div>
                                    <div>
                                        <img src="/Images/BroadLoomCircleImages/90020115/image 232.png"
                                            alt="90020115 circle 4">
                                    </div>
                                    <div>
                                        <img src="/Images/BroadLoomCircleImages/90020115/image 233.png"
                                            alt="90020115 circle 5">
                                    </div>
                                </div>
                                <img src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/90020115 broadloom2.png"
                                    alt="">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="BroadLoomDesignsContainer paddingTop80">
                    <div class="BroadLoomDesignsContainerInner">
                        <div class="LeftSideDesigns">
                            <div>
                                <p>90020099</p>
                                <hr>
                                <br>
                                <div>
                                    <img src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/90020099.png"
                                        alt="">
                                </div>
                            </div>
                        </div>
                        <div class="RightSideDesigns">
                            <div class="RelativeContainer">
                                <div class="CirclesContainer">
                                    <div>
                                        <img src="/Images/BroadLoomCircleImages/90020099/image 223.png"
                                            alt="90020099 circle 1">
                                    </div>
                                    <div>
                                        <img src="/Images/BroadLoomCircleImages/90020099/image 224.png"
                                            alt="90020099 circle 2">
                                    </div>
                                    <div>
                                        <img src="/Images/BroadLoomCircleImages/90020099/image 226.png"
                                            alt="90020099 circle 3">
                                    </div>
                                    <div>
                                        <img src="/Images/BroadLoomCircleImages/90020099/image 227.png"
                                            alt="90020099 circle 4">
                                    </div>
                                    <div>
                                        <img src="/Images/BroadLoomCircleImages/90020099/image 228.png"
                                            alt="90020099 circle 5">
                                    </div>
                                </div>
                                <img src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/NewBroadLoomImage0099.jpeg"
                                    alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="ImageGridContainer paddingTop80 paddingBottom80">
            <div class="gridContainer Container">
                <div>
                    <img src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/NewBroadLoomImage0099.jpeg"
                        alt="">
                </div>
                <div>
                    <h2 class="text-center">Bespoke Carpets — Customised to Your Project</h2>
                    <p class="text-center">From fibre selection and backing options to textures, colours, and patterns,
                        we tailor carpets to
                        specific project requirements, whether residential, hospitality, or commercial. Every roll is
                        engineered for consistency, longevity, and ease of installation.</p>
                </div>
                <div class="DoubleImageContainer">
                    <img src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/NewBroadLoomImage0099.jpeg"
                        alt="">
                    <img src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/NewBroadLoomImage0099.jpeg"
                        alt="">
                </div>
            </div>
        </div>
        <div class="SwiperSliderContainer paddingTop80 paddingBottom80">
            <div class="Container">
                <div class="swiperHeader">
                    <div class="headerLeft">
                        <h2 class="swiperTitle">Elevating Interiors with Broadloom</h2>
                    </div>
                    <div class="headerRight">
                        <p class="swiperDescription">Explore our installations that blend durability, design, and seamless elegance.</p>
                    </div>
                </div>

                <div class="swiperCarousel paddingTop80">
                    <swiper @swiper="onSwiper" :slidesPerView="4" :spaceBetween="10" :autoplay="{
                        delay: 2500,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }" :loop="true" :speed="700" :modules="[SwiperNavigation, Autoplay]" :breakpoints="{
                        320: { slidesPerView: 1, spaceBetween: 10 },
                        768: { slidesPerView: 2, spaceBetween: 10 },
                        1024: { slidesPerView: 3, spaceBetween: 10 },
                        1200: { slidesPerView: 4, spaceBetween: 10 }
                    }">
                        <swiper-slide v-for="(image, index) in broadloomImages" :key="index" class="swiperSlide">
                            <div class="swiperImageContainer">
                                <img :src="image.src" :alt="image.alt" />
                            </div>
                        </swiper-slide>
                    </swiper>
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
import MakeInIndia from '../MakeInIndia/MakeInIndia.vue'

const swiperInstance = ref(null)

const onSwiper = (swiper) => {
    swiperInstance.value = swiper
}

// Broadloom images data
const broadloomImages = [
    {
        src: 'https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/broadloom gallery2.png',
        alt: 'Premium Broadloom Carpet - Residential'
    },
    {
        src: 'https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/broadloom gallery3.png',
        alt: 'Commercial Broadloom Installation'
    },
    {
        src: 'https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/broadloom gallery6.png',
        alt: 'Luxury Broadloom Design'
    },
    {
        src: 'https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/broadloom gallery4.png',
        alt: 'Modern Broadloom Pattern'
    },
    {
        src: 'https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/broadloom gallery5.png',
        alt: 'Executive Office Broadloom'
    },
    {
        src: 'https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/broadloom gallery1.png',
        alt: 'Hospitality Broadloom Solution'
    }
]

</script>

<style scoped>
@import './BroadloomCarpetsLayout.css';
</style>