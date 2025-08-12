<template>
    <div class="width100">
        <CommonTopLayout 
            :heading="`${category?.name} - Where Luxury Meets Comfort`"
            :backgroundImage="category?.image || 'https://images.unsplash.com/photo-1706553397756-07063648e11a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'"
        />
        <div class="BackgroundImageSet">
            <div class="BroadloomCarpetsLayoutContainer">
                <!-- Luxury Header Section -->
                <div class="luxury-header">
                    <div class="header-content">
                        <div class="header-text">
                            <h1>{{ category.name }}</h1>
                            <p class="luxury-tagline">Where Luxury Meets Comfort</p>
                            <div class="luxury-badges">
                                <span class="badge premium">Premium Quality</span>
                                <span class="badge handmade">Handcrafted</span>
                                <span class="badge warranty">25 Year Warranty</span>
                            </div>
                        </div>
                        <div class="header-image">
                            <img :src="category.image" :alt="category.name" />
                        </div>
                    </div>
                </div>

                <!-- Material Showcase -->
                <div class="material-showcase">
                    <h2>Premium Materials</h2>
                    <div class="materials-grid">
                        <div class="material-card" v-for="material in materials" :key="material.name">
                            <div class="material-icon">{{ material.icon }}</div>
                            <h4>{{ material.name }}</h4>
                            <p>{{ material.description }}</p>
                            <div class="material-properties">
                                <span class="property">{{ material.property1 }}</span>
                                <span class="property">{{ material.property2 }}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Room Applications -->
                <div class="room-applications">
                    <h2>Perfect For Every Room</h2>
                    <div class="rooms-carousel">
                        <div class="room-item" v-for="room in roomTypes" :key="room.name">
                            <div class="room-image">
                                <img :src="room.image" :alt="room.name" />
                                <div class="room-overlay">
                                    <h4>{{ room.name }}</h4>
                                    <p>{{ room.description }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Care Instructions -->
                <div class="care-instructions">
                    <div class="care-content">
                        <div class="care-text">
                            <h3>Care & Maintenance</h3>
                            <div class="care-tips">
                                <div class="tip-item" v-for="tip in careTips" :key="tip.title">
                                    <div class="tip-icon">{{ tip.icon }}</div>
                                    <div class="tip-content">
                                        <h4>{{ tip.title }}</h4>
                                        <p>{{ tip.description }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="care-visual">
                            <div class="care-demo">
                                <div class="demo-circle">
                                    <span class="demo-text">Easy Care</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import CategoriesData from '../CategoriesLayout/Categories'

const route = useRoute()
const category = computed(() => {
    const slug = route.params.slug
    return CategoriesData.find(cat => cat.slug === slug)
})

const materials = [
    {
        name: 'New Zealand Wool',
        icon: '🐑',
        description: 'Premium wool blend for ultimate luxury',
        property1: 'Natural Fiber',
        property2: 'Hypoallergenic'
    },
    {
        name: 'Silk Blend',
        icon: '🕸️',
        description: 'Silk fibers for exceptional softness',
        property1: 'Luxury Feel',
        property2: 'Durable'
    },
    {
        name: 'Bamboo Silk',
        icon: '🎋',
        description: 'Sustainable bamboo silk alternative',
        property1: 'Eco-Friendly',
        property2: 'Antibacterial'
    }
]

const roomTypes = [
    {
        name: 'Living Room',
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        description: 'Create a warm, inviting atmosphere'
    },
    {
        name: 'Bedroom',
        image: 'https://images.unsplash.com/photo-1594040226829-7f251ab46d80?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description: 'Soft underfoot comfort for peaceful sleep'
    },
    {
        name: 'Office',
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        description: 'Professional appearance with comfort'
    }
]

const careTips = [
    {
        icon: '🧹',
        title: 'Regular Vacuuming',
        description: 'Vacuum 2-3 times per week to remove dirt and debris'
    },
    {
        icon: '💧',
        title: 'Spot Cleaning',
        description: 'Blot spills immediately with clean, white cloth'
    },
    {
        icon: '🔄',
        title: 'Professional Cleaning',
        description: 'Schedule professional cleaning every 12-18 months'
    }
]
</script>

<style scoped>
/* Import the CSS file */
@import './BroadloomCarpetsLayout.css';
</style>