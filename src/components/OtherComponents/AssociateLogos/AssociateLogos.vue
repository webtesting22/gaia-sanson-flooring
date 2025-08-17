<template>
    <div class="AssociateLogosContainer paddingBottom80">
        <div class="Container">
            <div class="associateLogosHeader">
                <h2>Our Associated Groups</h2>
                <p>A Unified Network of Specialized Groups Delivering Excellence Across Industries</p>
            </div>

            <div class="AssociateLogosGrid">
                <div class="AssociateLogoItem" v-for="logo in associateLogos" :key="logo.id">
                    <div class="logoBox">
                        <img :src="logo.image" :alt="logo.name" />
                        <!-- <div class="logoInfo">
                            <h3>{{ logo.name }}</h3>
                            <p v-if="logo.tagline">{{ logo.tagline }}</p>
                        </div> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import "./AssociateLogos.css";

// Associate logos data - placeholder images that can be replaced later
const associateLogos = [
    {
        id: 1,
        name: 'SEEDO TOYS',
        tagline: 'Innovative Play Solutions',
        image: 'https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/SeedoToys.png'
    },
    {
        id: 2,
        name: 'SanFit',
        tagline: 'Enhancing Safety',
        image: 'https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/SanFitLogo.png'
    },
    {
        id: 3,
        name: 'Sanson Promo Innovations LLP',
        tagline: 'Creative Promotional Solutions',
        image: 'https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/SansonLogo.png'
    },
    {
        id: 4,
        name: 'Make in India',
        tagline: 'Manufacturing Excellence',
        image: 'https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/make-in-india-270037.png'
    },
    {
        id: 5,
        name: 'GAIA',
        tagline: 'Flooring Fashion',
        image: 'https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/GAIA Logo.png'
    }
];
</script>

<style scoped>
@import './AssociateLogos.css';
</style>
