<template>
    <div class="WhatWeDoContainer paddingTop80 paddingBottom80">
        <div class="Container">
            <div class="whatWeDoHeader">
                <h2>What We Do</h2>
            </div>
            
            <div class="whatWeDoGrid">
                <div class="serviceCard" v-for="service in services" :key="service.id">
                    <div class="cardIcon">
                        <img :src="service.icon" :alt="service.title" width="48" height="48" />
                    </div>
                    
                    <h3>{{ service.title }}</h3>
                    
                    <ul class="serviceFeatures">
                        <li v-for="feature in service.features" :key="feature">{{ feature }}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
// Services data array
const services = [
    {
        id: 1,
        title: 'Product Development',
        features: [
            'Modern & Innovative designs',
            'Indigenous Production @Kundli',
            'Prototype Production in short time',
            'Global Sourcing network',
            'Concept based Premia'
        ],
        icon: '/Images/WhatWeDoIcons/Product Developmet.png'
    },
    {
        id: 2,
        title: 'Quality & Testing',
        features: [
            'High Quality Safe Premiums',
            'Full measures taken-quality team',
            'American & European safety standards',
            'Foodgrade kids friendly'
        ],
        icon: '/Images/WhatWeDoIcons/Quality & Testing.png'
    },
    {
        id: 3,
        title: 'Production',
        features: [
            'Quality Assurance Standards',
            'Production Modularity',
            'American & European safety standards',
            'Mechanized production & packing'
        ],
        icon: '/Images/WhatWeDoIcons/Production.png'
    },
    {
        id: 4,
        title: 'Supply Chain Management',
        features: [
            'Timely Delivery Assurance',
            'Integrated logistics support system',
            'Freight & Forwarding Network',
            'Turnkey end to end Solutions'
        ],
        icon: '/Images/WhatWeDoIcons/Supply chain Management.png'
    }
]
</script>

<style scoped>
@import "./WhatWeDo.css";
</style>