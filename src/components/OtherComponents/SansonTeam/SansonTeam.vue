<template>
    <div class="sansonTeamContainer paddingTop80 paddingBottom80">
        <div class="Container">
            <h2 class="text-center">Meet the Team</h2>
            <div class="Container paddingTop80 ">
                <div class="sansonTeamGrid">
                    <div v-for="team in sansonTeamData" :key="team.name">
                        <div class="sansonTeamImageContainer">
                            <img :src="team.image" alt="Sanson Team">
                        </div>
                        <br>
                        <div style="display: flex; gap: 10px; align-items: center;">
                            <h3>{{ team.name }} </h3>
                            <h4>({{ team.title }})</h4>
                        </div>
                        <br>
                        <p>{{ team.writup }}</p>
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