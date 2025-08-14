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
    }
}
</script>

<template>
    <div class=" paddingTop80 paddingBottom80 HandCraftedCommonContainerParent">
        <div class="HandCraftedCommonContainer">
            <!-- Left Side - Manufacturing Image -->
            <div class="handcrafted-image-container">
                <div class="image-wrapper">
                    <img :src="handcraftedData.image" alt="Handcrafted Manufacturing Process" class="manufacturing-image" />
                    <div class="image-overlay"></div>
                </div>
            </div>

            <!-- Right Side - Content -->
            <div class="handcrafted-content-container">
                <div class="content-wrapper">
                    <h2 class="handcrafted-title">
                        <span class="title-script">Handcrafted</span> with pride in India
                    </h2>
                    
                    <p class="handcrafted-description">
                        <span class="highlighted-text">Our carpets, made from locally sourced materials,</span> reflect 
                        <span class="highlighted-text">India's craftsmanship and commitment to sustainability.</span> 
                        <span class="highlighted-text">By choosing them,</span> you support the 
                        <span class="highlighted-text">Make in India movement, strengthening the local economy and empowering artisans.</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>

</style>