<template>
    <div class="width100 acousticTilesLayout">
        <CommonTopLayout heading="Acoustic Solutions"
            imageSrc="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/Acoustic Solutions Image.png"
            imageAlt="Acoustic Solutions" />

        <div class="BlueBackContainer paddingTop80 paddingBottom80">
            <div class="Container">
                <h2 class="whiteColor" style="color: #E4D8C8 !important;">Coming Soon – Explore Our New Arrivals</h2>
                <br>
                <h3 class="whiteColor">Get ready for our latest additions: Non-Woven (Felt) and
                    Machine Woven
                    Carpets.
                </h3>
                <!-- <br> -->
                <h3 class="whiteColor">Stay tuned and be the first to experience them!</h3>
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
                            <li>Acoustic Panel boards are made from Recycled Polyester Fiber and are meant to be
                                used
                                for Wall Claddings, Ceilings and Paneling.</li>
                            <li>More than 54 Colors Bank</li>
                            <li>Density: 1350-4000 g/m3</li>
                            <li>Acoustic Panel boards can absorb 30% of Sound (0.3 NRC) when the panel is
                                directly fixed
                                onto the wall.</li>
                            <li>Acoustic Panel boards can absorb 85% to 90% (0.85 to 0.9) of the sound when the
                                Acoustic
                                Panel is installed correctly keeping a gap between the wall and the Acoustic Panels.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="AcousticBenefitsContainer">
            <div class="acoustic-benefits-wrapper">
                <!-- Left Side - Title Section -->
                <div class="acoustic-title-section">
                    <h2>Acoustic Benefits</h2>
                    <br>
                    <p>Designed for modern, harmonious spaces.</p>
                </div>

                <!-- Right Side - Benefits Grid -->
                <div class="acoustic-benefits-grid">
                    <div class="benefit-item">
                        <div class="benefit-icon">
                            <img src="/Images/AcousticBenifitsIcons/Balanced Sound Field.svg" alt="Balanced Sound Field"
                                class="acoustic-icon">
                        </div>
                        <h3>Balanced Sound Field</h3>
                        <p>Even sound distribution across the entire space.</p>
                    </div>

                    <div class="benefit-item">
                        <div class="benefit-icon">
                            <img src="/Images/AcousticBenifitsIcons/Reduce Echo.svg" alt="Reduce Echo"
                                class="acoustic-icon">
                        </div>
                        <h3>Reduce Echo</h3>
                        <p>Minimizing sound reflections for clearer audio.</p>
                    </div>

                    <div class="benefit-item">
                        <div class="benefit-icon">
                            <img src="/Images/AcousticBenifitsIcons/Reduce Noise.svg" alt="Reduce Noise"
                                class="acoustic-icon">
                        </div>
                        <h3>Reduce Noise</h3>
                        <p>Lowering unwanted sound for improved comfort.</p>
                    </div>

                    <div class="benefit-item">
                        <div class="benefit-icon">
                            <img src="/Images/AcousticBenifitsIcons/Solve Standing Waves.svg" alt="Solve Standing Waves"
                                class="acoustic-icon">
                        </div>
                        <h3>Solve Standing Waves</h3>
                        <p>Eliminating sound distortions for accurate acoustics.</p>
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
        <div class="VariousApplicationsContainer paddingTop80 paddingBottom80">
            <div class="Container">
                <h2 class="text-center">Various Applications</h2>
                <br>
                <br>
                <div class="VariousApplicationsGridContainer marginTop20">
                    <div class="VariousApplicationsGridItem" v-for="feature in applicationFeatures" :key="feature.id">
                        <div class="featureIcon">
                            <img :src="feature.image" :alt="feature.name" class="application-icon">
                        </div>
                        <div class="featureText">
                            <span>{{ feature.name }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="SurfaceContainer paddingTop80 paddingBottom80">
            <div class="Container">
                <h2>Surface</h2>
                <div class="SurfaceGridContainer paddingTop80">
                    <div class="SurfaceImageContainer">
                        <img src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/acoustic panel element.png"
                            alt="">
                    </div>
                    <div class="SurfaceContentContainer">
                        <div>
                            <div>
                                <h2>Eco-Friendly & Versatile</h2>
                                <p>Acoustic Panel boards are made from Recycled Polyester Fiber and are meant to be used
                                    for Wall Claddings, Ceilings and Paneling.</p>
                            </div>
                            <div>
                                <h2>Performance</h2>
                                <p>It can absorb 30% of Sound (0.3 NRC) when the panel is directly fixed onto the wall.
                                </p>
                            </div>
                            <div>
                                <h2>Features</h2>
                                <p>Acoustical, Recycle, Fire-Rated, Printable, Ventilate, Decorative, Insulation, Light
                                    Weight, Buffered,
                                    Tack able, Easy Install, No Voc</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="LastGridImagesContainer">
            <div>
                <div class="LastGridImagesGridContainer">
                    <div class="LastGridImagesGridItem" v-for="space in interiorSpaces" :key="space.id">
                        <div class="LastGridImagesImageContainer">
                            <img :src="space.image" :alt="space.name">
                        </div>
                        <!-- <div class="LastGridImagesContentContainer">
                            <h2>{{ space.name }}</h2>
                            <p>{{ space.description }}</p>
                        </div> -->
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
        code: 'SF-01',
        name: 'Classic Beige',
        image: '/Images/FramesImages/Frame1.png'
    },
    {
        code: 'SF-02',
        name: 'Modern Grey',
        image: '/Images/FramesImages/Frame2.svg'
    },
    {
        code: 'SF-03',
        name: 'Rich Brown',
        image: '/Images/FramesImages/Frame3.svg'
    },
    {
        code: 'SF-04',
        name: 'Elegant Black',
        image: '/Images/FramesImages/Frame4.svg'
    },
    {
        code: 'SF-05',
        name: 'Soft Cream',
        image: '/Images/FramesImages/Frame5.svg'
    },
    {
        code: 'SF-06',
        name: 'Warm Tan',
        image: '/Images/FramesImages/Frame6.svg'
    },
    {
        code: 'SF-07',
        name: 'Cool Blue',
        image: '/Images/FramesImages/Frame7.svg'
    },
    {
        code: 'SF-08',
        name: 'Deep Green',
        image: '/Images/FramesImages/Frame8.svg'
    }
]

// Application features data
const applicationFeatures = [
    { id: 1, name: 'Decorative', image: '/Images/VariousApplicationsIcons/DecorativeIcon.svg' },
    { id: 2, name: 'Acoustic', image: '/Images/VariousApplicationsIcons/AcousticIcon.svg' },
    { id: 3, name: 'Recycle', image: '/Images/VariousApplicationsIcons/RecycleIcon.svg' },
    { id: 4, name: 'Insulation', image: '/Images/VariousApplicationsIcons/insulationIcon.svg' },
    { id: 5, name: 'Light Weight', image: '/Images/VariousApplicationsIcons/lightweightIcon.svg' },
    { id: 6, name: 'Stackable', image: '/Images/VariousApplicationsIcons/stackableIcon.svg' },
    { id: 7, name: 'No-VOC', image: '/Images/VariousApplicationsIcons/novocIcon.svg' },
    { id: 8, name: 'Fire - Rated', image: '/Images/VariousApplicationsIcons/fireratedIcon.svg' },
    { id: 9, name: 'Printable', image: '/Images/VariousApplicationsIcons/printableIcon.svg' },
    { id: 10, name: 'Ventilate', image: '/Images/VariousApplicationsIcons/ventilateIcon.svg' },
    { id: 11, name: 'Create Buffer', image: '/Images/VariousApplicationsIcons/createbufferIcon.svg' },
    { id: 12, name: 'Easy Install', image: '/Images/VariousApplicationsIcons/easyInstallICon.svg' },
    { id: 13, name: 'STC', image: '/Images/VariousApplicationsIcons/STCIcon.svg' },
    { id: 14, name: 'NRC', image: '/Images/VariousApplicationsIcons/NRCICon.svg' }
]
const interiorSpaces = [
    {
        id: 1,
        name: 'Home Office',
        description: 'Create a peaceful and productive environment for work and study.',
        image: 'https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/LastImage1.png'
    },
    {
        id: 2,
        name: 'Living Room',
        description: 'Transform your living space into a sanctuary for relaxation and entertainment.',
        image: 'https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/LastImage2.png'
    },
    {
        id: 3,
        name: 'Home Theater',
        description: 'Enjoy immersive sound and a cinematic experience in your own home.',
        image: 'https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/LastImage3.png'
    },
    {
        id: 4,
        name: 'Music Room',
        description: 'Perfect for practicing, recording, or just enjoying your favorite tunes.',
        image: 'https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/LastImage4.png'
    }
]
</script>

<style scoped>
@import './AcousticTilesLayout.css';
</style>
