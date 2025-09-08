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

</script>

<style scoped>
@import './BroadloomCarpetsLayout.css';
</style>