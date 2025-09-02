<template>
    <div class="sansonTeamSection paddingTop80 paddingBottom80">
        <div class="Container">
            <!-- Section Header -->
            <div class="teamSectionHeader" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
                <h2>Leadership Excellence</h2>
                <br>
                <p>Meet the visionaries driving innovation and growth at Sanson Group</p>
                <!-- <div class="titleUnderline"></div> -->
            </div>

            <!-- Team Grid -->
            <div class="teamGrid paddingTop60">
                <div 
                    v-for="(team, index) in sansonTeamData" 
                    :key="team.name"
                    class="teamCard"
                    :data-aos="'fade-up'"
                    :data-aos-duration="600"
                    :data-aos-delay="200 + (index * 150)"
                >
                    <div class="teamCardInner">
                        <!-- Image Container -->
                        <div class="teamImageWrapper">
                            <div class="teamImageContainer">
                                <img :src="team.image" :alt="team.name" />
                                <div class="imageOverlay">
                                    <!-- <div class="overlayContent">
                                        <div class="socialLinks">
                                            <div class="socialIcon">
                                                <i class="fas fa-linkedin"></i>
                                            </div>
                                            <div class="socialIcon">
                                                <i class="fas fa-envelope"></i>
                                            </div>
                                        </div>
                                    </div> -->
                                </div>
                            </div>
                            <div class="teamBadge">
                                <span class="badgeText">{{ team.title }}</span>
                            </div>
                        </div>

                        <!-- Content Container -->
                        <div class="teamContent">
                            <div class="teamHeader">
                                <h3 class="teamName">{{ team.name }}</h3>
                                <div class="teamTitle">{{ team.title }}</div>
                            </div>
                            
                            <!-- <div class="teamDescription">
                                <p>{{ team.writup }}</p>
                            </div>

                            <div class="teamStats">
                                <div class="statItem">
                                    <span class="statNumber">{{ team.experience }}+</span>
                                    <span class="statLabel">Years Experience</span>
                                </div>
                                <div class="statItem">
                                    <span class="statNumber">{{ team.projects }}+</span>
                                    <span class="statLabel">Projects Led</span>
                                </div>
                            </div> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import sansonTeamData from "./SansonTeamData";
</script>
<style scoped>
@import "./SansonTeam.css";
</style>