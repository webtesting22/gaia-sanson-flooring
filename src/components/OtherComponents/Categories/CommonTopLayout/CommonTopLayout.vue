<template>
    <div class="width100">
        <div class="CommonTopLayoutContainer">
            <img :src="imageSrc" :alt="imageAlt">
            <div class="OverlayHeadingContainer">
                <h1>{{ heading }}</h1>
            </div>
        </div>
    </div>
</template>

<script setup>
import "./CommonTopLayout.css"

// Define props for dynamic content
const props = defineProps({
    imageSrc: {
        type: String,
        default: "https://images.unsplash.com/photo-1706553397756-07063648e11a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    imageAlt: {
        type: String,
        default: "Category background image"
    },
    heading: {
        type: String,
        default: "Carpet Tiles Crafted for Modern Spaces"
    }
})
</script>