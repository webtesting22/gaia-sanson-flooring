<script>
import "./HomeImageComparison.css"

export default {
    data() {
        return {
            comparisonData: {
                title: "SHOWCASING OUR CARPETS IN VARIOUS SETTINGS FOR EASY COMPARISON",
                leftImage: {
                    src: "https://images.unsplash.com/photo-1594040226829-7f251ab46d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    label: "CARPET TILE"
                },
                rightImage: {
                    src: "https://images.unsplash.com/photo-1551371669-99df523c8850?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    label: "ACOUSTIC PANEL"
                }
            },
            dividerPosition: 50,
            isDragging: false
        }
    },
    mounted() {
        this.addEventListeners();
    },
    beforeUnmount() {
        this.removeEventListeners();
    },
    methods: {
        addEventListeners() {
            document.addEventListener('mousemove', this.handleMouseMove);
            document.addEventListener('mouseup', this.handleMouseUp);
            document.addEventListener('touchmove', this.handleTouchMove);
            document.addEventListener('touchend', this.handleTouchEnd);
        },
        removeEventListeners() {
            document.removeEventListener('mousemove', this.handleMouseMove);
            document.removeEventListener('mouseup', this.handleMouseUp);
            document.removeEventListener('touchmove', this.handleTouchMove);
            document.removeEventListener('touchend', this.handleTouchEnd);
        },
        handleMouseDown(e) {
            this.isDragging = true;
            this.addDraggingClass();
            e.preventDefault();
        },
        handleTouchStart(e) {
            this.isDragging = true;
            this.addDraggingClass();
            e.preventDefault();
        },
        handleMouseMove(e) {
            if (!this.isDragging) return;
            this.updateDividerPosition(e.clientX);
        },
        handleTouchMove(e) {
            if (!this.isDragging) return;
            e.preventDefault();
            const touch = e.touches[0];
            this.updateDividerPosition(touch.clientX);
        },
        handleMouseUp() {
            this.isDragging = false;
            this.removeDraggingClass();
        },
        handleTouchEnd() {
            this.isDragging = false;
            this.removeDraggingClass();
        },
        updateDividerPosition(clientX) {
            const container = this.$refs.comparisonContainer;
            if (!container) return;

            const rect = container.getBoundingClientRect();
            const position = ((clientX - rect.left) / rect.width) * 100;

            this.dividerPosition = Math.max(0, Math.min(100, position));
        },
        addDraggingClass() {
            const divider = this.$refs.comparisonDivider;
            const rightImage = this.$refs.rightImage;
            if (divider) {
                divider.classList.add('dragging');
            }
            if (rightImage) {
                rightImage.classList.add('dragging');
            }
        },
        removeDraggingClass() {
            const divider = this.$refs.comparisonDivider;
            const rightImage = this.$refs.rightImage;
            if (divider) {
                divider.classList.remove('dragging');
            }
            if (rightImage) {
                rightImage.classList.remove('dragging');
            }
        }
    }
}
</script>

<template>
    <div class="HomeImageComparisonContainerParent">
        <div class="Container paddingTop80 paddingBottom80">
        <div class="HomeImageComparisonContainer">
            <!-- Header -->
            <div class="comparison-header">
                <h3 class="comparison-title">{{ comparisonData.title }}</h3>
            </div>

            <!-- Image Comparison Container -->
            <div class="comparison-wrapper" ref="comparisonContainer">
                <!-- Left Image (Background) -->
                <div class="image-container left-image">
                    <img :src="comparisonData.leftImage.src" :alt="comparisonData.leftImage.label"
                        class="comparison-image" />
                    <div class="image-label left-label">{{ comparisonData.leftImage.label }}</div>
                </div>

                <!-- Right Image (Overlay) -->
                <div ref="rightImage" class="image-container right-image"
                    :style="{ clipPath: `inset(0 ${100 - dividerPosition}% 0 0)` }">
                    <img :src="comparisonData.rightImage.src" :alt="comparisonData.rightImage.label"
                        class="comparison-image" />
                    <div class="image-label right-label">{{ comparisonData.rightImage.label }}</div>
                </div>

                <!-- Draggable Divider -->
                <div ref="comparisonDivider" class="comparison-divider" :style="{ left: `${dividerPosition}%` }" @mousedown="handleMouseDown"
                    @touchstart="handleTouchStart">
                    <div class="divider-line"></div>
                    <div class="divider-handle">
                        <span class="arrow-left">‹</span>
                        <span class="arrow-right">›</span>
                    </div>
                </div>

                <!-- Divider Overlay for Better UX -->
                <div class="divider-overlay" :style="{ left: `${dividerPosition}%` }" @mousedown="handleMouseDown"
                    @touchstart="handleTouchStart"></div>
            </div>
        </div>
    </div>
    </div>
</template>
<style scoped></style>