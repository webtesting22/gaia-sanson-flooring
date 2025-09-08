<template>
    <div class="width100">
        <CommonTopLayout heading="Broadloom Carpets"
            imageSrc="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/BroadloomCarpetsbannerImage.png"
            imageAlt="Artificial grass background image" />

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
        <div class="paddingTop80 Container">
            <div>
                <div>
                    <h2>Discover Our Broadloom Collection</h2>
                    <br>
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

</script>

<style scoped>
@import './BroadloomCarpetsLayout.css';
</style>