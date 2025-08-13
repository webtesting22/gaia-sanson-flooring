# Vue Animation Components

This folder contains reusable animation components built with Vue's native transition system for smooth page transitions and image loading effects.

## Components

### PageTransition.vue
A wrapper component that provides smooth page transitions when navigating between routes using Vue's built-in `<transition>` component.

**Usage:**
```vue
<template>
  <PageTransition>
    <router-view />
  </PageTransition>
</template>

<script setup>
import PageTransition from './components/FramerAnimation/PageTransition.vue'
</script>
```

**Features:**
- Smooth fade-in/fade-out transitions
- Subtle scale and position animations
- 0.4 second duration for optimal performance
- Automatically triggers on route changes
- Built with Vue's native transition system

### ImageLoader.vue
A component that provides smooth image loading with a 0.5 second blur effect and loading placeholder.

**Usage:**
```vue
<template>
  <ImageLoader 
    src="/path/to/image.jpg" 
    alt="Image description"
    class="custom-image-class"
  />
</template>

<script setup>
import ImageLoader from './components/FramerAnimation/ImageLoader.vue'
</script>
```

**Features:**
- 0.5 second blur-to-clear transition
- Loading placeholder with icon and text
- Smooth scale and opacity animations
- Automatic image preloading
- Error handling support
- Uses Vue transitions for smooth animations

**Props:**
- `src` (required): Image source URL
- `alt` (optional): Alt text for accessibility
- `imageClass` (optional): CSS class for the image
- `imageStyle` (optional): Inline styles for the image

## Installation

No external dependencies required! These components use Vue's built-in transition system and CSS animations.

## Performance

- Uses CSS transitions for hardware acceleration
- `will-change` CSS property for optimal rendering
- Efficient image preloading
- Smooth easing curves for natural motion
- No JavaScript animation overhead

## Customization

You can customize the animation parameters by modifying the CSS transition properties in each component:

```css
.page-transition-enter-active,
.page-transition-leave-active {
  transition: all 0.4s cubic-bezier(0.25, 0.1, 0.25, 1);
}
```

## Benefits of Vue Native Transitions

✅ **No external dependencies** - Pure Vue.js implementation  
✅ **Better performance** - CSS transitions are hardware accelerated  
✅ **Smaller bundle size** - No additional libraries to load  
✅ **Better compatibility** - Works with all Vue.js versions  
✅ **Easier debugging** - Standard CSS transitions  
✅ **Customizable** - Full control over animation timing and easing 