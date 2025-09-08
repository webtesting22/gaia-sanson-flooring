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
                                <p>90020088</p>
                                <hr>
                                <br>
                                <div>
                                    <img src="https://images.unsplash.com/photo-1757120386310-96afbd9bab86?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                        alt="">
                                </div>
                            </div>
                        </div>
                        <div class="RightSideDesigns">
                            <div class="RelativeContainer">
                                <div class="CirclesContainer">
                                    <div>

                                    </div>
                                    <div>

                                    </div>
                                    <div>

                                    </div>
                                    <div>

                                    </div>
                                    <div>

                                    </div>
                                </div>
                                <img src="https://images.unsplash.com/photo-1755371034010-51c25321312d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="BroadLoomDesignsContainer paddingTop80">
                    <div class="BroadLoomDesignsContainerInner">
                        <div class="LeftSideDesigns">
                            <div>
                                <p>90020088</p>
                                <hr>
                                <br>
                                <div>
                                    <img src="https://images.unsplash.com/photo-1757120386310-96afbd9bab86?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                        alt="">
                                </div>
                            </div>
                        </div>
                        <div class="RightSideDesigns">
                            <div class="RelativeContainer">
                                <div class="CirclesContainer">
                                    <div>

                                    </div>
                                    <div>

                                    </div>
                                    <div>

                                    </div>
                                    <div>

                                    </div>
                                    <div>

                                    </div>
                                </div>
                                <img src="https://images.unsplash.com/photo-1755371034010-51c25321312d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
const swiperInstance = ref(null)

</script>

<style scoped>
@import './BroadloomCarpetsLayout.css';
</style>