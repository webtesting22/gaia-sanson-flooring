<template>
    <div class="aboutPage">
        <CommonTopLayout heading="About Us"
            imageSrc="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/HeroHome1.png"
            imageAlt="Acoustic Solutions" />
        
        <div class="AboutUsContainerGrid paddingTop80 paddingBottom80">
            <div class="Container">
                <div class="aboutGrid">
                    <!-- Left Column - Content -->
                    <div class="aboutContent">
                        <h2>Introducing GAIA: A New Era in Flooring Fashion</h2>
                        <br>
                        <div class="contentSection">
                            <p>In Greek mythology, Gaia represents the personification of Earth and the source of all life. In Indian traditions, she embodies the divine feminine energy that nurtures and sustains creation. Both cultures recognize her as the fundamental force that brings balance and harmony to our world.</p>
                        </div>
                        <br>
                        
                        <div class="contentSection">
                            <p>At Sanson Group, we honor this legacy by combining innovation with purpose.</p>
                        </div>
                        
                        <div class="contentSection">
                            <h3>GAIA – The New World of Flooring Fashion</h3>
                            <ul class="featureList">
                                <li>Endless Design Possibilities</li>
                                <li>Unmatched Quality</li>
                                <li>Fashion-Forward Aesthetics</li>
                            </ul>
                        </div>
                        
                        <div class="contentSection">
                            <i>GAIA is more than just flooring — it's a movement toward planet-positive design and timeless craftsmanship, brought to life with the precision and quality Sanson is known for.</i>
                        </div>
                    </div>
                    
                    <!-- Right Column - Image -->
                    <div class="aboutImage">
                        <div class="imageContainer">
                            <img src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/AboutUsImage.png" 
                                 alt="Modern Office Space with GAIA Flooring" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <YearsOfExperience />
        <WhatWeDo />
        <OurVision />
        <ImageGallery />  
        <AssociateLogos />
        <GetInTouch />      
     
    </div>
</template>

<script setup>
import CommonTopLayout from '../Categories/CommonTopLayout/CommonTopLayout.vue';
import YearsOfExperience from './YearsOfExperience/YearsOfExperience.vue';
import WhatWeDo from '../WhatWeDo/WhatWeDo.vue';
import OurVision from '../OurVision/OurVision.vue';
import ImageGallery from '../ImageGallery/ImageGallery.vue';
import "./About.css"
import GetInTouch from '../GetInTouch/GetInTouch.vue';
import AssociateLogos from '../AssociateLogos/AssociateLogos.vue';
</script>

<style scoped>
@import './About.css';
</style>