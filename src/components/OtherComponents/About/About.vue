<template>
    <div class="aboutPage paddingBottom80">
        <CommonTopLayout heading="About Us"
            imageSrc="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/HeroHome1.png"
            imageAlt="Acoustic Solutions" />

        <div class="SansonAboutContainer Container paddingTop80">
            <div class="SansonAboutContainerInner">
                <div class="LeftSideImageContainer">
                    <div class="SansonLogoContainer">
                        <img src="./SansonLogo.svg" alt="">
                    </div>
                    <img src="https://plus.unsplash.com/premium_photo-1661767467261-4a4bed92a507?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="">
                </div>
                <div class="RightSideContentContainer">
                    <div>
                        <h3>Since 1982, Sanson Group, India has been on a journey of innovation, growth, and trust. For
                            over 40 years, we've proudly served a diverse range of industries — always focused on
                            delivering quality, value, and long-term impact.
                        </h3>
                    </div>
                </div>
            </div>
        </div>
        <div class="marginTop80 paddingTop80 paddingBottom80 CategoriesClientContainers">
            <div class="expertSolutionsSection Container">
                <div class="expertSolutionsHeader">
                    <h2>Expert Solutions for Every Need</h2>
                    <p>From start to finish, our expert team delivers personalized solutions with a commitment to
                        excellence,
                        ensuring your success and satisfaction.</p>
                </div>
                <div class="expertSolutionsGrid">
                    <div class="expertSolutionCard" data-aos="fade-up" data-aos-delay="200">
                        <div class="expertSolutionCardContent">
                            <div class="expertSolutionLogo">
                                <img src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/GAIA Logo.png"
                                    alt="Quality Assurance">
                            </div>
                            <h3 class="expertSolutionTitle">GAIA</h3>
                            <p class="expertSolutionTagline">Rigorous testing and quality control processes ensure every
                                product meets international standards</p>
                        </div>
                    </div>

                    <div class="expertSolutionCard" data-aos="fade-up" data-aos-delay="400">
                        <div class="expertSolutionCardContent">
                            <div class="expertSolutionLogo">
                                <img src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/SeedoNewUpdatedLogo.jpg"
                                    alt="Innovation">
                            </div>
                            <h3 class="expertSolutionTitle">SEEDO</h3>
                            <p class="expertSolutionTagline">Cutting-edge technology and creative solutions for modern
                                flooring challenges</p>
                        </div>
                    </div>

                    <div class="expertSolutionCard" data-aos="fade-up" data-aos-delay="600">
                        <div class="expertSolutionCardContent">
                            <div class="expertSolutionLogo">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWFuHBtCr1cRvsEIqZjC6HlSTka0C4uXgSxA&s"
                                    alt="Customer Service">
                            </div>
                            <h3 class="expertSolutionTitle">SANFIT</h3>
                            <p class="expertSolutionTagline">Dedicated support team committed to your project's success
                                from concept to completion</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="marginTop80 paddingTop80">
            <div class="Container">
                <div class="AboutGaiaContainer">
                    <div class="AboutGaiaLeftSide">
                        <h2>GAIA: The New World of Flooring Fashion</h2>
                        <br>
                        <p>From Gaia, the Greek goddess representing Mother Earth and the origin of life, to Prithvi,
                            the vast and grounding force in Indian tradition, Earth has always been revered as the
                            ultimate source of creation and balance across cultures.</p>
                        <br>
                        <p>At Sanson Group, we honor this legacy by combining innovation with purpose. Today, we are
                            proud to unveil our newest label: <strong>GAIA – The New World of Flooring Fashion.</strong>
                        </p>
                        <br>
                        <p>GAIA represents endless design possibilities, unmatched quality, and fashion-forward
                            aesthetics that set new industry standards.</p>
                        <br>
                        <p>GAIA is more than just flooring—it is a movement toward planet-positive design and timeless
                            craftsmanship, brought to life with the precision and quality that Sanson Group is renowned
                            for.</p>
                        <br>
                        <p>As early adopters in the industry, we are now redefining what flooring can be: natural,
                            elegant, and future-ready solutions that meet the evolving needs of modern spaces.</p>
                    </div>
                    <div class="AboutGaiaRightSide">
                        <img src="https://images.unsplash.com/photo-1681949101473-9aea8b928a55?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="GAIA Flooring Fashion">
                    </div>
                </div>
            </div>
        </div>
        <div class=" paddingTop80 paddingBottom80">
            <div class="Container aboutGaiaFeatureGrid">
                <div>
                    <span class="checkmark-icon">✓</span>
                    <h3>Endless Design Possibilities</h3>
                </div>
                <div>
                    <span class="checkmark-icon">✓</span>
                    <h3>Unmatched Quality</h3>
                </div>
                <div>
                    <span class="checkmark-icon">✓</span>
                    <h3>Fashion-Forward Aesthetics</h3>
                </div>
            </div>
        </div>
        <SansonTeam />
        <WhatWeMake />
    </div>
</template>

<script setup>
import CommonTopLayout from '../Categories/CommonTopLayout/CommonTopLayout.vue';
import SansonTeam from '../SansonTeam/SansonTeam.vue';
import WhatWeMake from '../WhatWeMake/WhatWeMake.vue';
import "./About.css"
</script>

<style scoped>
@import './About.css';
</style>