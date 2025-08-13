# Framer Motion Components

This folder contains reusable components that use Framer Motion for smooth animations and transitions.

## Components

### 1. PageTransition.vue
A wrapper component for individual page content with customizable transition effects.

**Usage:**
```vue
<template>
  <PageTransition type="slide">
    <div class="your-page-content">
      <!-- Your content here -->
    </div>
  </PageTransition>
</template>

<script>
import PageTransition from '@/components/OtherComponents/PageTransition.vue'

export default {
  components: {
    PageTransition
  }
}
</script>
```

**Available transition types:**
- `fade` - Simple fade in/out (default)
- `slide` - Slide from left/right
- `scale` - Scale up/down
- `slideUp` - Slide up/down

### 2. AnimatedImage.vue
An image component with blur effect during loading and smooth fade-in animation.

**Usage:**
```vue
<template>
  <AnimatedImage
    src="/path/to/image.jpg"
    alt="Description"
    width="300px"
    height="200px"
    :showSkeleton="true"
  />
</template>

<script>
import AnimatedImage from '@/components/OtherComponents/AnimatedImage.vue'

export default {
  components: {
    AnimatedImage
  }
}
</script>
```

**Props:**
- `src` (required) - Image source URL
- `alt` - Alt text for accessibility
- `width` - Container width (default: 100%)
- `height` - Container height (default: auto)
- `imageClass` - Additional CSS classes for the image
- `imageStyle` - Additional inline styles for the image
- `showSkeleton` - Show loading skeleton (default: true)

### 3. RouteTransition.vue
Automatically handles route transitions with different animation types based on the route.

**Usage:**
```vue
<!-- In App.vue -->
<template>
  <NavigationBar />
  <RouteTransition />
  <Footer />
</template>
```

**Features:**
- Automatic transition selection based on route
- Smooth page transitions
- Different animations for different route types

### 4. LoadingSpinner.vue
An animated loading spinner with optional bouncing dots.

**Usage:**
```vue
<template>
  <LoadingSpinner 
    size="60px" 
    color="#8B8B3A" 
    :showDots="true" 
  />
</template>

<script>
import LoadingSpinner from '@/components/OtherComponents/LoadingSpinner.vue'

export default {
  components: {
    LoadingSpinner
  }
}
</script>
```

**Props:**
- `size` - Spinner size (default: 40px)
- `color` - Spinner color (default: #8B8B3A)
- `showDots` - Show bouncing dots below spinner (default: false)

## Integration Examples

### Using in Category Layouts
```vue
<template>
  <PageTransition type="slide">
    <div class="category-layout">
      <AnimatedImage
        src="/category-image.jpg"
        alt="Category"
        width="100%"
        height="400px"
      />
      <!-- Rest of your content -->
    </div>
  </PageTransition>
</template>
```

### Loading States
```vue
<template>
  <div v-if="loading" class="loading-container">
    <LoadingSpinner size="80px" :showDots="true" />
  </div>
  <div v-else>
    <!-- Your content -->
  </div>
</template>
```

## Benefits

1. **Smooth Animations** - All transitions use Framer Motion's optimized animation engine
2. **Performance** - Hardware-accelerated animations for smooth 60fps performance
3. **Accessibility** - Proper ARIA attributes and reduced motion support
4. **Customizable** - Easy to modify animation types, durations, and easing
5. **Responsive** - All animations work perfectly on mobile devices

## Notes

- All components are fully responsive
- Animations are optimized for performance
- Components use Vue 3 Composition API
- Framer Motion is already installed in your project
- All animations respect user's motion preferences 