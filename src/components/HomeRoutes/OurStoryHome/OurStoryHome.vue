<script>
import "./OurStoryHome.css"
import OurStoryHomeData from "./OurStoryHomeData"

export default {
    data() {
        return {
            storyData: OurStoryHomeData,
            currentSlide: 0,
            isAnimating: false
        }
    },
    computed: {
        currentStoryItem() {
            return this.storyData[this.currentSlide] || this.storyData[0];
        }
    },
    methods: {
        goToPrevSlide() {
            if (this.isAnimating) return;
            this.triggerAnimation();
            this.currentSlide = this.currentSlide > 0 ? this.currentSlide - 1 : this.storyData.length - 1;
        },
        goToNextSlide() {
            if (this.isAnimating) return;
            this.triggerAnimation();
            this.currentSlide = this.currentSlide < this.storyData.length - 1 ? this.currentSlide + 1 : 0;
        },
        triggerAnimation() {
            this.isAnimating = true;
            setTimeout(() => {
                this.isAnimating = false;
            }, 600);
        }
    }
}
</script>

<template>
    <div class="width100">
        <div class="Container">
            <div class="OurStoryHomeContainer">
                <!-- Left Side - Image with Animation -->
                <div class="story-image-container">
                    <div class="story-header">
                        <h2 class="story-main-title">Our<br>Story</h2>
                        <div class="story-arrow-icon">↗</div>
                    </div>
                    
                    <transition name="slide-image" mode="out-in">
                        <div :key="currentSlide" class="story-image-wrapper" :class="{ 'animating': isAnimating }">
                            <img :src="currentStoryItem.image" :alt="currentStoryItem.title" class="story-image" />
                            <div class="image-overlay"></div>
                        </div>
                    </transition>
                </div>

                <!-- Right Side - Content with Navigation -->
                <div class="story-content-container">
                    <!-- Navigation Buttons -->
                    <div class="story-navigation">
                        <button @click="goToPrevSlide" class="nav-btn prev-btn" :disabled="isAnimating">
                            PREV
                        </button>
                        <button @click="goToNextSlide" class="nav-btn next-btn" :disabled="isAnimating">
                            NEXT
                        </button>
                    </div>

                    <!-- Content with Animation -->
                    <div class="story-content">
                        <transition name="slide-content" mode="out-in">
                            <div :key="currentSlide" class="content-wrapper" :class="{ 'animating': isAnimating }">
                                <h3 class="story-title">{{ currentStoryItem.title }}</h3>
                                <p class="story-description">{{ currentStoryItem.description }}</p>
                                
                                <!-- Progress Indicator -->
                                <div class="progress-indicator">
                                    <span class="current-slide">{{ String(currentSlide + 1).padStart(2, '0') }}</span>
                                    <span class="divider">/</span>
                                    <span class="total-slides">{{ String(storyData.length).padStart(2, '0') }}</span>
                                </div>
                            </div>
                        </transition>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>