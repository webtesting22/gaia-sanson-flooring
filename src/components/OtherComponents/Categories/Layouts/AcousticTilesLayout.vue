<template>
    <div class="width100 acousticTilesLayout">
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

        <!-- Grid Layout Section -->
        <div class="OurColoursCardContainer">
            <div class="Container">
                <div class="ourColorsHeader">
                    <h2>Our Colors</h2>
                    <div class="navigationArrows">
                        <button class="navArrow leftArrow">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" />
                            </svg>
                        </button>
                        <button class="navArrow rightArrow">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div class="colorSwatchesGrid">
                    <div class="colorSwatch" v-for="swatch in colorSwatches" :key="swatch.code">
                        <div class="swatchImage">
                            <img :src="swatch.image" :alt="swatch.name" />
                        </div>
                        <div class="swatchInfo">
                            <span class="colorCode">{{ swatch.code }}</span>
                            <span class="colorName">{{ swatch.name }}</span>
                        </div>
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

// Color swatches data
const colorSwatches = [
    {
        code: 'SF-04',
        name: 'White',
        image: 'https://media.istockphoto.com/id/2148628537/photo/texture-grey-carpet-with-square-ornament.jpg?s=612x612&w=0&k=20&c=k8SKTTnWpGdxSsD4cwu9n0Upkzl28-ulRHjyfOJlQmU='
    },
    {
        code: 'SF-36',
        name: 'Light Grey',
        image: 'https://i.pinimg.com/736x/8a/6d/c6/8a6dc62ae6e37221ae18957fa78b046f.jpg'
    },
    {
        code: 'SF-31',
        name: 'Banana Green',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI4-WIWLHtb6c5WJ2nyX7Lb3304YNiyq0SJ7da98Y_DqebskxisR0YImnnembdtI-zT4M&usqp=CAU'
    },
    {
        code: 'SF-70',
        name: 'Strom Grey',
        image: 'https://media.istockphoto.com/id/2148628537/photo/texture-grey-carpet-with-square-ornament.jpg?s=612x612&w=0&k=20&c=k8SKTTnWpGdxSsD4cwu9n0Upkzl28-ulRHjyfOJlQmU='
    },
    {
        code: 'SF-74',
        name: 'Platinum',
        image: 'https://i.pinimg.com/736x/8a/6d/c6/8a6dc62ae6e37221ae18957fa78b046f.jpg'
    },
    {
        code: 'SF-39',
        name: 'Dove',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI4-WIWLHtb6c5WJ2nyX7Lb3304YNiyq0SJ7da98Y_DqebskxisR0YImnnembdtI-zT4M&usqp=CAU'
    },
    {
        code: 'SF-25',
        name: 'Pewter Gray',
        image: 'https://media.istockphoto.com/id/2148628537/photo/texture-grey-carpet-with-square-ornament.jpg?s=612x612&w=0&k=20&c=k8SKTTnWpGdxSsD4cwu9n0Upkzl28-ulRHjyfOJlQmU='
    },
    {
        code: 'SF-40',
        name: 'T Blue',
        image: 'https://i.pinimg.com/736x/8a/6d/c6/8a6dc62ae6e37221ae18957fa78b046f.jpg'
    }
]


</script>

<style scoped>
@import './AcousticTilesLayout.css';
</style>