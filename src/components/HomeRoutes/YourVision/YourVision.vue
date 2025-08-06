<script>
import "./YourVision.css"

export default {
    data() {
        return {
            visionData: {
                title: "Your Vision, Our Custom Tiles & Acoustic Expertise",
                description: "If you have a specific product or design in mind, we can develop and customize it to match your exact requirements. We offer personalization in backing, pile height, stitch density, and yarn quality. Please note that a minimum order quantity (MOQ) applies for custom orders. We're happy to work with you to create a product that fits your needs. Let us know your ideas, and we'll help turn them into reality.",
                mainImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                secondaryImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
            }
        }
    }
}
</script>

<template>
    <div class="width100 YourVisionContainer marginTop80">
        <div class="Container paddingTop80 paddingBottom80">
            <div class="YourVisionContainer">
                <!-- Main Heading -->
                <div class="vision-header marginBottom80">
                    <h2 class="vision-title">{{ visionData.title }}</h2>
                </div>

                <!-- Main Content Grid -->
                <div class="vision-content-grid">
                    <!-- Left Side - Main Image -->
                    <div class="vision-main-image-container">
                        <div class="main-image-wrapper">
                            <img :src="visionData.mainImage" alt="Custom Tiles & Acoustic Expertise" class="main-image" />
                            <div class="image-overlay"></div>
                        </div>
                    </div>

                    <!-- Right Side - Content -->
                    <div class="vision-content-container">
                        <div class="content-wrapper">
                            <p class="vision-description">{{ visionData.description }}</p>
                            
                            <!-- Know More Button -->
                            <button class="common-btn know-more-btn">
                                Know More
                                <span class="btn-arrow">↗</span>
                            </button>
                        </div>

                        <!-- Bottom Small Image -->
                        <div class="secondary-image-container">
                            <div class="secondary-image-wrapper">
                                <img :src="visionData.secondaryImage" alt="Additional Custom Tiles" class="secondary-image" />
                                <div class="secondary-image-overlay"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>