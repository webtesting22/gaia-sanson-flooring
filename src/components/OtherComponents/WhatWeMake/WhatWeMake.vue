<template>
    <div class="whatWeMakeContainer paddingTop80 paddingBottom80">
        <div class="Container">
            <div>
                <div>
                    <h2>What We Make</h2>
                    <p>Discover our comprehensive range of innovative flooring products that combine cutting-edge
                        technology with timeless design. From acoustic PET panels to luxury carpets, we craft solutions
                        that
                        transform spaces and enhance lives.</p>
                </div>
                <div class="CategoriesGrid paddingTop80">
                    <div v-for="item in HomeProductsData" :key="item.title">
                        <!-- <img :src="item.image" alt="What We Make"> -->
                        <h3>{{ item.title }}</h3>
                        <span>↗</span>
                        <!-- <p>{{ item.description }}</p> -->
                    </div>
                </div>
            </div>
        </div>
        <HomeProducts title="WHAT WE MANUFACTURE"
            subtitle="Explore our diverse range of innovative flooring products crafted with precision and excellence" />
    </div>
</template>

<script setup>
import whatWeMakeData from "./WhatWeMakeData";
import HomeProductsData from "../../HomeRoutes/HomeProducts/HomeProductsData";
import HomeProducts from "../../HomeRoutes/HomeProducts/HomeProducts.vue";
</script>

<style scoped>
@import "./WhatWeMake.css";
</style>