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
            <div class="sets-apart-content">
                <div class="content-wrapper">
                    <h3 class="sets-apart-subtitle">{{ setsApartData.subtitle }}</h3>
                    <h2 class="sets-apart-title">{{ setsApartData.title }}</h2>
                </div>
            </div>

            <!-- Right Side - Smaller Image -->
            <div class="sets-apart-image">
                <div class="image-wrapper">
                    <img :src="setsApartData.image" alt="High-performance interiors" class="office-image" />
                    <div class="image-overlay"></div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped></style>