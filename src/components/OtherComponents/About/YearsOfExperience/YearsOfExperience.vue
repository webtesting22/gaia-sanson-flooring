<template>
    <div class="experienceSection paddingTop80 paddingBottom80">
        <div class="Container">
            <!-- Section Header -->
            <div class="experienceHeader" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
                <h2>Our Journey of Growth</h2>
                <p style="text-align: start;">Twenty-five years of innovation, excellence, and unwavering commitment to
                    quality</p>
            </div>

            <div class="experienceContent paddingTop60">
                <div class="experienceGrid">
                    <!-- Left Section - Enhanced Circular Display -->
                    <div class="experienceCircleSection" data-aos="fade-right" data-aos-duration="800"
                        data-aos-delay="200">
                        <div class="circleContainer">
                            <div class="experienceCircle">
                                <div class="circleRing"></div>
                                <div class="circleCenter">
                                    <div class="yearsDisplay">
                                        <span class="yearsNumber" data-count="25">25</span>
                                        <span class="yearsText">Years</span>
                                        <span class="experienceText">of Experience</span>
                                    </div>
                                </div>
                            </div>
                            <div class="floatingBadge">
                                <span>Since 1982</span>
                            </div>
                        </div>
                    </div>

                    <!-- Right Section - Enhanced Statistics -->
                    <div class="statisticsSection" data-aos="fade-left" data-aos-duration="800" data-aos-delay="300">
                        <div class="statsGrid">
                            <div class="statCard" data-aos="fade-up" data-aos-duration="600" data-aos-delay="400">
                                <div class="statIcon">
                                    <i class="fas fa-users"></i>
                                </div>
                                <div class="statContent">
                                    <span class="statNumber" data-count="100">100</span>
                                    <span class="statLabel">Employees</span>
                                    <span class="statDescription">Dedicated team members</span>
                                </div>
                            </div>

                            <div class="statCard" data-aos="fade-up" data-aos-duration="600" data-aos-delay="500">
                                <div class="statIcon">
                                    <i class="fas fa-project-diagram"></i>
                                </div>
                                <div class="statContent">
                                    <span class="statNumber" data-count="1000">1000+ </span>
                                    <span class="statLabel">Projects</span>
                                    <span class="statDescription">Successfully completed</span>
                                </div>
                            </div>

                            <div class="statCard" data-aos="fade-up" data-aos-duration="600" data-aos-delay="600">
                                <div class="statIcon">
                                    <i class="fas fa-handshake"></i>
                                </div>
                                <div class="statContent">
                                    <span class="statNumber" data-count="100">100+</span>
                                    <span class="statLabel">Clients</span>
                                    <span class="statDescription">Satisfied customers</span>
                                </div>
                            </div>

                            <div class="statCard" data-aos="fade-up" data-aos-duration="600" data-aos-delay="700">
                                <div class="statIcon">
                                    <i class="fas fa-trophy"></i>
                                </div>
                                <div class="statContent">
                                    <span class="statNumber" data-count="8">8</span>
                                    <span class="statLabel">Billion Premia</span>
                                    <span class="statDescription">Market value achieved</span>
                                </div>
                            </div>

                            <div class="statCard" data-aos="fade-up" data-aos-duration="600" data-aos-delay="800">
                                <div class="statIcon">
                                    <i class="fas fa-building"></i>
                                </div>
                                <div class="statContent">
                                    <span class="statNumber" data-count="3">3</span>
                                    <span class="statLabel">Offices</span>
                                    <span class="statDescription">Strategic locations</span>
                                </div>
                            </div>

                            <div class="statCard" data-aos="fade-up" data-aos-duration="600" data-aos-delay="900">
                                <div class="statIcon">
                                    <i class="fas fa-industry"></i>
                                </div>
                                <div class="statContent">
                                    <span class="statNumber" data-count="2">2</span>
                                    <span class="statLabel">Factory Units</span>
                                    <span class="statDescription">Manufacturing facilities</span>
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
import { onMounted } from 'vue'
import "./YearsOfExperience.css"

onMounted(() => {
    // Counter animation function
    const animateCounters = () => {
        const counters = document.querySelectorAll('[data-count]')

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counter = entry.target
                    const target = parseInt(counter.getAttribute('data-count'))
                    const duration = 2000 // 2 seconds
                    const step = target / (duration / 16) // 60fps
                    let current = 0

                    const timer = setInterval(() => {
                        current += step
                        if (current >= target) {
                            counter.textContent = target
                            clearInterval(timer)
                        } else {
                            counter.textContent = Math.floor(current)
                        }
                    }, 16)

                    observer.unobserve(counter)
                }
            })
        }, { threshold: 0.5 })

        counters.forEach(counter => observer.observe(counter))
    }

    // Initialize counter animations
    setTimeout(animateCounters, 500)
})
</script>

<style scoped>
@import './YearsOfExperience.css';
</style>