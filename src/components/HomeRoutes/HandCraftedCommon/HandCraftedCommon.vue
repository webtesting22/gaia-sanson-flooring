<script>
import "./HandCraftedCommon.css"

export default {
    data() {
        return {
            handcraftedData: {
                title: "Handcrafted with pride in India",
                description: "Our carpets, made from locally sourced materials, reflect India's craftsmanship and commitment to sustainability. By choosing them, you support the Make in India movement, strengthening the local economy and empowering artisans.",
                image: "https://images.unsplash.com/photo-1594040226829-7f251ab46d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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