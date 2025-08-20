<script>
import "./HandCraftedCommon.css"

export default {
    data() {
        return {
            handcraftedData: {
                title: "Handcrafted with pride in India",
                description: "Our carpets, made from locally sourced materials, reflect India's craftsmanship and commitment to sustainability. By choosing them, you support the Make in India movement, strengthening the local economy and empowering artisans.",
                image: "https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/HandcraftedWith Image.png"
            }
        }
    },
    mounted() {
        // Initialize AOS if it's available
        if (typeof AOS !== 'undefined') {
            AOS.init({
                duration: 800,
                easing: 'ease-in-out',
                once: true
            });
        }
    }
}
</script>

<template>
    <div class=" paddingTop80 paddingBottom80 HandCraftedCommonContainerParent">
        <div class="HandCraftedCommonContainer">
            <!-- Left Side - Manufacturing Image -->
            <div class="handcrafted-image-container" data-aos="fade-right" data-aos-delay="200">
                <div class="image-wrapper">
                    <img :src="handcraftedData.image" alt="Handcrafted Manufacturing Process" class="manufacturing-image" />
                    <div class="image-overlay"></div>
                </div>
            </div>

            <!-- Right Side - Content -->
            <div class="handcrafted-content-container" data-aos="fade-left" data-aos-delay="400">
                <div class="content-wrapper">
                    <h2 class="handcrafted-title" data-aos="fade-up" data-aos-delay="600">
                        <span class="title-script">Manufactured</span> in India
                    </h2>
                    
                    <p class="handcrafted-description" data-aos="fade-up" data-aos-delay="800">
                        Our carpets, made from locally sourced materials using advanced manufacturing processes, reflect India's quality and commitment to sustainability. By choosing them, you support the Make in India movement and strengthen the local economy.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>

</style>