<template>
    <div class="width100">
        <div class="BackgroundImageSet">
            <div class="CategoriesContainer">
                <div class="CategoriesHeader">
                    <h1>Categories</h1>
                </div>
                <div class="CategoriesContent">
                    <router-link v-for="category in CategoriesData" :key="category.id"
                        :to="`/categories/${category.slug}`" class="CategoryItem">
                        <img :src="category.image" :alt="category.name" />
                        <h2>{{ category.name }}</h2>
                        <div class="category-overlay">
                            <span class="view-details">View Details →</span>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import CategoriesData from './Categories';
</script>

<style scoped>
/* Import the CSS file */
@import './Categories.css';
</style>