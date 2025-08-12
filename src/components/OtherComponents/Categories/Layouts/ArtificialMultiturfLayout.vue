<template>
    <div class="width100">
        <div class="BackgroundImageSet">
            <div class="ArtificialMultiturfLayoutContainer">
                <!-- Outdoor Hero Section -->
                <div class="outdoor-hero">
                    <div class="hero-content">
                        <div class="hero-text">
                            <h1>{{ category.name }}</h1>
                            <p class="hero-subtitle">Transform Your Outdoor Spaces</p>
                            <div class="hero-features">
                                <span class="feature">🌱 Natural Look</span>
                                <span class="feature">💧 Low Maintenance</span>
                                <span class="feature">☀️ UV Resistant</span>
                                <span class="feature">🏃 Sports Ready</span>
                            </div>
                        </div>
                        <div class="hero-image">
                            <img :src="category.image" :alt="category.name" />
                            <div class="weather-overlay">
                                <div class="weather-icon">☀️</div>
                                <span>All Weather</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Sports Applications -->
                <div class="sports-applications">
                    <h2>Sports & Recreation</h2>
                    <div class="sports-grid">
                        <div class="sport-card" v-for="sport in sportsTypes" :key="sport.name">
                            <div class="sport-image">
                                <img :src="sport.image" :alt="sport.name" />
                                <div class="sport-overlay">
                                    <h4>{{ sport.name }}</h4>
                                    <p>{{ sport.description }}</p>
                                    <div class="sport-specs">
                                        <span class="spec">{{ sport.spec1 }}</span>
                                        <span class="spec">{{ sport.spec2 }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Installation Process -->
                <div class="installation-process">
                    <h2>Professional Installation</h2>
                    <div class="process-timeline">
                        <div class="timeline-item" v-for="(step, index) in installationSteps" :key="index">
                            <div class="timeline-marker">{{ index + 1 }}</div>
                            <div class="timeline-content">
                                <h4>{{ step.title }}</h4>
                                <p>{{ step.description }}</p>
                                <div class="step-duration">{{ step.duration }}</div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Maintenance Guide -->
                <div class="maintenance-guide">
                    <div class="maintenance-content">
                        <div class="maintenance-text">
                            <h3>Care & Maintenance</h3>
                            <div class="maintenance-tips">
                                <div class="tip-item" v-for="tip in maintenanceTips" :key="tip.title">
                                    <div class="tip-icon">{{ tip.icon }}</div>
                                    <div class="tip-content">
                                        <h4>{{ tip.title }}</h4>
                                        <p>{{ tip.description }}</p>
                                        <span class="frequency">{{ tip.frequency }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="maintenance-visual">
                            <div class="maintenance-demo">
                                <div class="demo-grass">
                                    <div class="grass-blade" v-for="i in 8" :key="i"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Environmental Benefits -->
                <div class="environmental-benefits">
                    <h2>Environmental Impact</h2>
                    <div class="benefits-grid">
                        <div class="benefit-card" v-for="benefit in environmentalBenefits" :key="benefit.title">
                            <div class="benefit-icon">{{ benefit.icon }}</div>
                            <h4>{{ benefit.title }}</h4>
                            <p>{{ benefit.description }}</p>
                            <div class="impact-level">
                                <span class="impact-label">Impact:</span>
                                <span class="impact-value">{{ benefit.impact }}</span>
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

const sportsTypes = [
    {
        name: 'Football Fields',
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        description: 'Professional-grade football surfaces',
        spec1: 'FIFA Approved',
        spec2: 'All Weather'
    },
    {
        name: 'Tennis Courts',
        image: 'https://images.unsplash.com/photo-1594040226829-7f251ab46d80?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description: 'Premium tennis court surfaces',
        spec1: 'ITF Standard',
        spec2: 'Low Bounce'
    },
    {
        name: 'Golf Putting Greens',
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        description: 'Professional putting practice areas',
        spec1: 'USGA Specs',
        spec2: 'True Roll'
    }
]

const installationSteps = [
    {
        title: 'Site Preparation',
        description: 'Excavation and base preparation',
        duration: '2-3 days'
    },
    {
        title: 'Base Installation',
        description: 'Crushed stone and compaction',
        duration: '3-4 days'
    },
    {
        title: 'Turf Installation',
        description: 'Rolling and securing artificial grass',
        duration: '2-3 days'
    },
    {
        title: 'Final Details',
        description: 'Infill, brushing, and finishing',
        duration: '1-2 days'
    }
]

const maintenanceTips = [
    {
        icon: '🧹',
        title: 'Regular Brushing',
        description: 'Keep grass blades upright and natural looking',
        frequency: 'Weekly'
    },
    {
        icon: '💧',
        title: 'Rinsing',
        description: 'Remove dust and debris with water',
        frequency: 'Monthly'
    },
    {
        icon: '🌿',
        title: 'Infill Top-up',
        description: 'Maintain proper infill levels',
        frequency: 'Quarterly'
    }
]

const environmentalBenefits = [
    {
        icon: '💧',
        title: 'Water Conservation',
        description: 'Eliminates need for irrigation and watering',
        impact: 'High'
    },
    {
        icon: '🌱',
        title: 'No Pesticides',
        description: 'Chemical-free maintenance requirements',
        impact: 'Medium'
    },
    {
        icon: '♻️',
        title: 'Recyclable',
        description: 'Made from recyclable materials',
        impact: 'Medium'
    }
]
</script>

<style scoped>
/* Import the CSS file */
@import './ArtificialMultiturfLayout.css';
</style>