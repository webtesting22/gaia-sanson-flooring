<template>
    <div class="ImageGalleryContainer">
        <div class="Container">
            <div class="galleryHeader">
                <h2>Gallery</h2>
                <!-- <p>Explore our diverse range of interior applications and design solutions</p> -->
            </div>
            
            <div class="ImageGalleryGrid paddingBottom80">
                <!-- First Row - 3 Images -->
                <div class="galleryRow firstRow">
                    <div class="galleryItem" v-for="image in firstRowImages" :key="image.id">
                        <a-image
                            :src="image.src"
                            :alt="image.alt"
                            :preview="{
                                src: image.src,
                                mask: 'Click to view full screen'
                            }"
                            class="galleryImage"
                        />
                    </div>
                </div>
                
                <!-- Second Row - 4 Images -->
                <div class="galleryRow secondRow">
                    <div class="galleryItem" v-for="image in secondRowImages" :key="image.id">
                        <a-image
                            :src="image.src"
                            :alt="image.alt"
                            :preview="{
                                src: image.src,
                                mask: 'Click to view full screen'
                            }"
                            class="galleryImage"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { Image as AImage } from 'ant-design-vue';
import "./ImageGallery.css";

// Gallery data - First row with 3 images
const firstRowImages = [
    {
        id: 1,
        src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
        alt: 'Modern Office Workspace with Carpet Tiles'
    },
    {
        id: 2,
        src: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop',
        alt: 'Hexagonal Acoustic Wall Panels'
    },
    {
        id: 3,
        src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
        alt: 'Collaborative Desk Area with Privacy Screens'
    }
];

// Gallery data - Second row with 4 images
const secondRowImages = [
    {
        id: 4,
        src: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop',
        alt: 'Children\'s Playroom with Colorful Design'
    },
    {
        id: 5,
        src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
        alt: 'Conference Room and Dining Area'
    },
    {
        id: 6,
        src: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop',
        alt: 'Music Studio with Acoustic Panels'
    },
    {
        id: 7,
        src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
        alt: 'Modern Interior with Premium Flooring'
    }
];
</script>

<style scoped>
@import './ImageGallery.css';
</style>
