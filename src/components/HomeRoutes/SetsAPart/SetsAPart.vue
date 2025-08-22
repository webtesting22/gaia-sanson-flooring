<script>
import "./SetsAPart.css"

export default {
    data() {
        return {
            setsApartData: {
                subtitle: "WHAT SETS US APART?",
                title: "India's first startup offering integrated solutions in floorings and acoustic panels for high-performance interiors.",
                image: "https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/WhatsSeAPart.png"
            }
        }
    }
}
</script>

<template>
    <div class="paddingTop80 paddingBottom80 SetsApartContainerParent">
        <div class="SetsApartContainer">
            <!-- Left Side - Content -->
            <div class="sets-apart-content" data-aos="fade-right" data-aos-delay="200">
                <div class="content-wrapper">
                    <h3 class="sets-apart-subtitle text-center" data-aos="fade-up" data-aos-delay="400">{{ setsApartData.subtitle }}</h3>
                    <h2 class="sets-apart-title text-center" data-aos="fade-up" data-aos-delay="600">{{ setsApartData.title }}</h2>
                </div>
            </div>

            <!-- Right Side - Smaller Image -->
            <!-- <div class="sets-apart-image" data-aos="fade-left" data-aos-delay="300">
                <div class="image-wrapper">
                    <img :src="setsApartData.image" alt="High-performance interiors" class="office-image" />
                    <div class="image-overlay"></div>
                </div>
            </div> -->
        </div>
    </div>
</template>
<style scoped></style>