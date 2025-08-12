<template>
    <div class="width100">
        <div class="BackgroundImageSet">
            <div class="AcousticTilesLayoutContainer">
                <!-- Technical Header -->
                <div class="technical-header">
                    <div class="header-content">
                        <div class="header-text">
                            <h1>{{ category.name }}</h1>
                            <p class="technical-subtitle">Advanced Sound Management Solutions</p>
                            <div class="technical-specs">
                                <div class="spec-item">
                                    <span class="spec-value">0.95</span>
                                    <span class="spec-label">NRC Rating</span>
                                </div>
                                <div class="spec-item">
                                    <span class="spec-value">25-50mm</span>
                                    <span class="spec-label">Thickness</span>
                                </div>
                                <div class="spec-item">
                                    <span class="spec-value">Class A</span>
                                    <span class="spec-label">Fire Rating</span>
                                </div>
                            </div>
                        </div>
                        <div class="header-visual">
                            <div class="sound-wave-animation">
                                <div class="wave" v-for="i in 5" :key="i" :style="{ animationDelay: `${i * 0.1}s` }">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Performance Metrics -->
                <div class="performance-metrics">
                    <h2>Acoustic Performance</h2>
                    <div class="metrics-grid">
                        <div class="metric-card" v-for="metric in performanceMetrics" :key="metric.name">
                            <div class="metric-circle">
                                <span class="metric-value">{{ metric.value }}</span>
                                <span class="metric-unit">{{ metric.unit }}</span>
                            </div>
                            <h4>{{ metric.name }}</h4>
                            <p>{{ metric.description }}</p>
                        </div>
                    </div>
                </div>

                <!-- Installation Types -->
                <div class="installation-types">
                    <h2>Installation Methods</h2>
                    <div class="installation-tabs">
                        <div class="tab-content">
                            <div class="tab-panel active" v-for="method in installationMethods" :key="method.name">
                                <div class="method-content">
                                    <div class="method-image">
                                        <img :src="method.image" :alt="method.name" />
                                    </div>
                                    <div class="method-details">
                                        <h3>{{ method.name }}</h3>
                                        <p>{{ method.description }}</p>
                                        <ul class="method-features">
                                            <li v-for="feature in method.features" :key="feature">{{ feature }}</li>
                                        </ul>
                                        <div class="method-specs">
                                            <span class="spec">{{ method.spec1 }}</span>
                                            <span class="spec">{{ method.spec2 }}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Applications Gallery -->
                <div class="applications-gallery">
                    <h2>Perfect Applications</h2>
                    <div class="gallery-grid">
                        <div class="gallery-item" v-for="app in applications" :key="app.name">
                            <div class="app-image">
                                <img :src="app.image" :alt="app.name" />
                                <div class="app-overlay">
                                    <h4>{{ app.name }}</h4>
                                    <p>{{ app.description }}</p>
                                    <div class="app-benefits">
                                        <span class="benefit">{{ app.benefit1 }}</span>
                                        <span class="benefit">{{ app.benefit2 }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Technical Specifications -->
                <div class="technical-specifications">
                    <h2>Technical Data</h2>
                    <div class="specs-table">
                        <div class="spec-row" v-for="spec in technicalSpecs" :key="spec.property">
                            <div class="spec-property">{{ spec.property }}</div>
                            <div class="spec-value">{{ spec.value }}</div>
                            <div class="spec-description">{{ spec.description }}</div>
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

const performanceMetrics = [
    {
        name: 'Noise Reduction',
        value: '95%',
        unit: 'NRC',
        description: 'Superior sound absorption performance'
    },
    {
        name: 'Sound Transmission',
        value: '45',
        unit: 'dB',
        description: 'Excellent sound blocking capability'
    },
    {
        name: 'Reverberation',
        value: '0.3',
        unit: 's',
        description: 'Optimal room acoustics control'
    }
]

const installationMethods = [
    {
        name: 'Suspended Grid System',
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        description: 'Professional ceiling grid installation for optimal performance',
        features: ['Easy access to utilities', 'Professional finish', 'Maximum acoustic performance'],
        spec1: 'Grid: 600x600mm',
        spec2: 'Drop: 50-200mm'
    }
]

const applications = [
    {
        name: 'Recording Studios',
        image: 'https://images.unsplash.com/photo-1594040226829-7f251ab46d80?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description: 'Professional audio recording environments',
        benefit1: 'Sound Isolation',
        benefit2: 'Acoustic Control'
    },
    {
        name: 'Conference Rooms',
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        description: 'Clear communication spaces',
        benefit1: 'Speech Clarity',
        benefit2: 'Noise Reduction'
    },
    {
        name: 'Open Offices',
        image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        description: 'Productive work environments',
        benefit1: 'Focus Enhancement',
        benefit2: 'Privacy Control'
    }
]

const technicalSpecs = [
    {
        property: 'Material Composition',
        value: 'Mineral Wool + Glass Fiber',
        description: 'High-density acoustic core with fire-resistant properties'
    },
    {
        property: 'Density',
        value: '80-120 kg/m³',
        description: 'Optimal density for maximum sound absorption'
    },
    {
        property: 'Thermal Conductivity',
        value: '0.035 W/mK',
        description: 'Excellent thermal insulation properties'
    },
    {
        property: 'Fire Resistance',
        value: 'Class A1',
        description: 'Highest fire safety rating'
    }
]
</script>

<style scoped>
/* Import the CSS file */
@import './AcousticTilesLayout.css';
</style>