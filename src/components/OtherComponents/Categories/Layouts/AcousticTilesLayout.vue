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
        <div class="AcousticBenefitsContainer">

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


</script>

<style scoped>
@import './AcousticTilesLayout.css';
</style>