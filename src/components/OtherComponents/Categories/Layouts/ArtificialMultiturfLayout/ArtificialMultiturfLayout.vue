<template>
    <div class="width100">
        <!-- <CommonTopLayout heading="Premium Artificial Grass for Every Space"
            imageSrc="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/Acoustic Solutions Image.png"
            imageAlt="Artificial & Multiturf" /> -->

        <CommonTopLayout heading="Premium Artificial Grass for Every Space"
            imageSrc="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/ArtificialGrassImage.png"
            imageAlt="Artificial grass background image" />

        <div class="width100 ArtificialMultiturfLayoutContainer paddingTop80 paddingBottom80 Container">
            <h2>Explore our Artificial Grass collection</h2>
            <div class="ArtificialMultiturfGrid paddingTop80">
                <div class="ArtificialMultiturfGridItem">
                    <div>
                        <img src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/LandScapeMainImage.jpg"
                            alt="">
                        <div class="ArtificialMultiturfGridItemText">
                            <h3>Landscape Grass</h3>
                            <router-link to="/artificial-grass/landscape-grass">
                                <button>View More</button>
                            </router-link>
                        </div>
                    </div>
                    <div>
                        <img src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/Sports Grass.jpg" alt="">
                        <div class="ArtificialMultiturfGridItemText">
                            <h3>Sports Grass</h3>
                            <router-link to="/artificial-grass/sports-grass">
                                <button>View More</button>
                            </router-link>
                        </div>
                    </div>
                </div>
                <div class="ArtificialMultiturfGridItem">
                    <div>
                        <img src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/multisports Grass.jpg"
                            alt="">
                        <div class="ArtificialMultiturfGridItemText">
                            <h3>Multisports Grass</h3>
                            <router-link to="/artificial-grass/multisports-grass">
                                <button>View More</button>
                            </router-link>
                        </div>
                    </div>
                    <div>
                        <img src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/curly Grass.jpg" alt="">
                        <div class="ArtificialMultiturfGridItemText">
                            <h3>Curly Grass</h3>
                            <router-link to="/artificial-grass/curly-grass">
                                <button>View More</button>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="width100 WhyChooseArtificialMultiturf paddingTop80 paddingBottom80 ">
            <div class="why-choose-section Container">
                <h2>Why Choose Our Artificial Grass?</h2>
                <div class="features-grid">
                    <div class="feature-card">
                        <div class="feature-icon">
                            <img src="/Images/WhyChooseIcons/UV-Stabilized.svg" alt="UV-Stabilized" />
                        </div>
                        <h3>UV-Stabilized</h3>
                        <p>Engineered for lasting color</p>
                    </div>

                    <div class="feature-card">
                        <div class="feature-icon">
                            <img src="/Images/WhyChooseIcons/Eco-Conscious.svg" alt="Eco-Conscious" />
                        </div>
                        <h3>Eco-Conscious</h3>
                        <p>Less water, no fertilizers, low maintenance</p>
                    </div>

                    <div class="feature-card">
                        <div class="feature-icon">
                            <img src="/Images/WhyChooseIcons/Pet & Child-Friendly.svg" alt="Pet & Child-Friendly" />
                        </div>
                        <h3>Pet & Child-Friendly</h3>
                        <p>Safe for pets and children, 100% Lead Free</p>
                    </div>

                    <div class="feature-card">
                        <div class="feature-icon">
                            <img src="/Images/WhyChooseIcons/Weatherproof.svg" alt="Weatherproof & Drainage-Ready" />
                        </div>
                        <h3>Weatherproof & Drainage-Ready</h3>
                        <p>Engineered to withstand every climate</p>
                    </div>

                    <div class="feature-card">
                        <div class="feature-icon">
                            <img src="/Images/WhyChooseIcons/Custom Cuts.svg" alt="Custom Cuts & Install Support" />
                        </div>
                        <h3>Custom Cuts & Install Support</h3>
                        <p>Scalable solutions for large projects</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="width100 BroadloomCarpetsLayoutContainer ">
            <!-- <div class="BackgroundColorContainer">
                <div>

                </div>
                <div>

                </div>
            </div> -->
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

const swiperInstance = ref(null)

const onSwiper = (swiper) => {
    swiperInstance.value = swiper
}

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
@import './ArtificialMultiturfLayout.css';
</style>