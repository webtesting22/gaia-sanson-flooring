<script>
import "./YourVision.css"

export default {
    data() {
        return {
            visionData: {
                title: "Your Vision, Our Custom Tiles & Acoustic Expertise",
                description: "We create custom carpet tiles that are tailored entirely to your vision, delivering results that are exclusive to your requirements.",
                mainImage: "https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/YourVisionImage1.png",
                secondaryImage: "https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/YourVisionImage2.png"
            }
        }
    }
}
</script>

<template>
    <div class="width100 YourVisionContainer paddingTop80">
        <div class="Container paddingBottom80">
            <div class="YourVisionContainer">
                <!-- Main Heading -->
                <div class="vision-header " data-aos="fade-down" data-aos-duration="800"
                    data-aos-delay="100">
                    <h2 class="vision-title">{{ visionData.title }}</h2>
                </div>

                <!-- Main Content Grid -->
                <div class="vision-content-grid marginTop60" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
                    <!-- Left Side - Main Image -->
                    <div class="vision-main-image-container" data-aos="fade-right" data-aos-duration="700"
                        data-aos-delay="300">
                        <div class="main-image-wrapper">
                            <img :src="visionData.mainImage" alt="Custom Tiles & Acoustic Expertise"
                                class="main-image" />
                            <div class="image-overlay"></div>
                        </div>
                    </div>

                    <!-- Right Side - Content -->
                    <div class="vision-content-container">
                        <div class="content-wrapper" data-aos="fade-left" data-aos-duration="700" data-aos-delay="400">
                            <p class="vision-description">{{ visionData.description }}</p>

                            <!-- Know More Button -->
                            <router-link to="/about-us"><button class="common-btn know-more-btn" data-aos="zoom-in"
                                    data-aos-duration="600" data-aos-delay="500">
                                    Know More
                                    <span class="btn-arrow">↗</span>
                                </button></router-link>
                        </div>

                        <!-- Bottom Small Image -->
                        <div class="secondary-image-container" data-aos="fade-up" data-aos-duration="600"
                            data-aos-delay="600">
                            <div class="secondary-image-wrapper">
                                <img :src="visionData.secondaryImage" alt="Additional Custom Tiles"
                                    class="secondary-image" />
                                <div class="secondary-image-overlay"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>