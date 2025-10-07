<template>
  <div class="width100">
    <CommonTopLayout
      heading="Carpet Tiles"
      imageSrc="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/CarprtTiles.png"
      imageAlt="Carpet tiles background image"
    />
    <div class="paddingTop80" style="background-color: white !important">
      <MakeInIndia />
    </div>
    <div class="ChooseDesignsContainer">
      <div class="Container paddingTop80 paddingBottom80">
        <div class="ChooseDesignsContainer">
          <div class="CommonHeader">
            <h2 class="blackColor marginBottom20">
              Choose a design to preview
            </h2>
            <!-- Desktop Arrows -->
            <div class="DesktopArrows">
              <button
                class="common-btn secondary mobile-nav-btn left-arrow swiper-button-prev-custom"
              >
                <span>←</span>
              </button>
              <button
                class="common-btn secondary mobile-nav-btn right-arrow swiper-button-next-custom"
              >
                <span>→</span>
              </button>
            </div>
          </div>

          <div class="SwiperWithAbsoluteArrows">
            <!-- Carousel Container -->
            <div class="SwiperContainer">
              <swiper
                :modules="[SwiperNavigation, Autoplay]"
                :slides-per-view="7"
                :space-between="20"
                :loop="true"
                :speed="700"
                :autoplay="{
                  delay: 2500,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }"
                :navigation="{
                  nextEl: '.swiper-button-next-custom',
                  prevEl: '.swiper-button-prev-custom',
                }"
                :breakpoints="{
                  320: { slidesPerView: 3, spaceBetween: 15 },
                  768: { slidesPerView: 6, spaceBetween: 20 },
                  1024: { slidesPerView: 6, spaceBetween: 20 },
                  1200: { slidesPerView: 8, spaceBetween: 20 },
                }"
                class="DesignSwiper"
              >
                <swiper-slide
                  v-for="(design, index) in designSwatches"
                  :key="index"
                  class="DesignSlide"
                >
                  <div
                    class="DesignSwatch"
                    :class="{
                      clickable: design.pdf && design.pdf.trim() !== '',
                      'non-clickable': !design.pdf || design.pdf.trim() === '',
                    }"
                    @click="
                      design.pdf && design.pdf.trim() !== ''
                        ? openPDF(design.pdf)
                        : null
                    "
                  >
                    <img
                      :src="design.image"
                      :alt="design.name"
                      class="SwatchImage"
                    />
                    <p class="SwatchCode">{{ design.code }}</p>
                    <!-- <div v-if="design.pdf && design.pdf.trim() !== ''" class="pdf-indicator">
                                          <i class="fas fa-file-pdf"></i>
                                      </div> -->
                  </div>
                </swiper-slide>
              </swiper>
            </div>
          </div>

          <!-- Mobile Navigation -->
          <div class="SwiperNavigationContainerMobileOnly">
            <div class="SwiperNavigation">
              <button
                class="common-btn secondary mobile-nav-btn swiper-button-prev-custom"
              >
                <span>←</span>
              </button>
              <button
                class="common-btn secondary mobile-nav-btn swiper-button-next-custom"
              >
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div style="background-color: white">
      <div class="paddingTop80 Container paddingBottom80">
        <h2 class="blackColor marginBottom20">
          Discover Our Carpet Collection
        </h2>
        <div class="AnimatedImageContainerMainContainer">
          <div class="AnimatedImageContainer">
            <div class="FirstImage"></div>
            <div class="SecondImage"></div>
            <div class="ThirdImage"></div>
            <!-- <div class="FourthImage"> </div> -->
            <div class="FifthImage">
              <!-- <div class="FifthFirstImage">

                            </div>
                            <div class="FifthSecondImage">

                            </div>
                            <div class="FifthThirdImage"></div> -->
            </div>
            <div class="SixthImage"></div>
            <div class="SeventhImage"></div>
            <div class="EighthImage"></div>
            <div class="NinthImage"></div>
          </div>
        </div>
      </div>
    </div>

    <div class="propertiesLayoutContainer">
      <div class="Container">
        <h2
          class="properties-title"
          data-aos="fade-down"
          data-aos-duration="800"
          data-aos-delay="100"
        >
          Properties
        </h2>
        <div class="properties-grid paddingTop60">
          <div
            class="property-card"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="200"
          >
            <div class="property-icon">
              <img
                src="/Images/propertiesImages/Multi-Directional.png"
                alt="Multi-Directional"
              />
            </div>
            <p class="property-label">Multi-Directional</p>
          </div>

          <div
            class="property-card"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="300"
          >
            <div class="property-icon">
              <img src="/Images/propertiesImages/Brick.png" alt="Brick" />
            </div>
            <p class="property-label">Brick</p>
          </div>

          <div
            class="property-card"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="400"
          >
            <div class="property-icon">
              <img
                src="/Images/propertiesImages/Quarter Turn.png"
                alt="Quarter Turn"
              />
            </div>
            <p class="property-label">Quarter Turn</p>
          </div>

          <div
            class="property-card"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="500"
          >
            <div class="property-icon">
              <img
                src="/Images/propertiesImages/Anti static.png"
                alt="Anti Static"
              />
            </div>
            <p class="property-label">Anti Static</p>
          </div>

          <div
            class="property-card"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="350"
          >
            <div class="property-icon">
              <img
                src="/Images/propertiesImages/Non-Directional.png"
                alt="Non-Directional"
              />
            </div>
            <p class="property-label">Non-Directional</p>
          </div>

          <div
            class="property-card"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="450"
          >
            <div class="property-icon">
              <img
                src="/Images/propertiesImages/Underfloor Heating.png"
                alt="Underfloor Heating"
              />
            </div>
            <p class="property-label">Underfloor Heating</p>
          </div>

          <div
            class="property-card"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="550"
          >
            <div class="property-icon">
              <img
                src="/Images/propertiesImages/Fire Resistant.png"
                alt="Fire Resistant"
              />
            </div>
            <p class="property-label">Fire Resistant</p>
          </div>
        </div>
      </div>
    </div>

    <div class="BackgrounStylesAppling">
      <div class="paddingTop80 Container paddingBottom80">
        <div>
          <h2
            class="blackColor marginBottom20"
            data-aos="fade-down"
            data-aos-duration="800"
            data-aos-delay="100"
          >
            Where Your Vision Meets Our Design Expertise
          </h2>
          <br />
          <p
            style="font-weight: 400"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="300"
          >
            If you have a specific product or design in mind, we can develop and
            customize it to match your exact requirements. We offer
            personalization in backing, pile height, stitch density, and yarn
            quality. Please note that a minimum order quantity (MOQ) applies for
            custom orders. We're happy to work with you to create a product that
            fits your needs. Let us know your ideas, and we'll help turn them
            into reality.
          </p>
        </div>
      </div>
    </div>
    <!-- <div class="gridImagesContainer paddingTop80 paddingBottom80">
            <div class="Container">
                <div class="gridImagesContainerText">
                    <h2 class="blackColor" data-aos="fade-down" data-aos-duration="800" data-aos-delay="100">Transform
                        Your Workspace</h2>
                  
                </div>
                <div class="girdImagesContainer paddingTop60">
                    <div data-aos="zoom-in" data-aos-duration="600" data-aos-delay="300">
                        <img src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/WorKSpace1.jpg" alt="">
                    </div>
                    <div data-aos="zoom-in" data-aos-duration="600" data-aos-delay="400">
                        <img src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/WorKSpace2.jpg  " alt="">
                    </div>
                    <div data-aos="zoom-in" data-aos-duration="600" data-aos-delay="500">
                        <img src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/WorKSpace3.jpg" alt="">
                    </div>
                    <div data-aos="zoom-in" data-aos-duration="600" data-aos-delay="600">
                        <img src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/WorKSpace4.jpg" alt="">
                    </div>
                </div>
            </div>
        </div> -->
  </div>
  <GetInTouch
    title="Get In Touch!"
    subtitle="Tell Us What You Need for Your Perfect Carpet"
    description="Connect with our team to discuss premium carpet tile solutions — including fully customizable options to meet your project requirements."
  />
  <BackToTop />
</template>

<script setup>
import { computed, onMounted, onUnmounted } from "vue";
import { useRoute } from "vue-router";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation as SwiperNavigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import CategoriesData from "../../CategoriesLayout/Categories";
import CommonTopLayout from "../../CommonTopLayout/CommonTopLayout.vue";
import GetInTouch from "../../../GetInTouch/GetInTouch.vue";
import MakeInIndia from "../MakeInIndia/MakeInIndia.vue";
import BackToTop from "../../../BackToTop/BackToTop.vue";
// Scroll animation variables
let animationContainers = [];

// Initialize AOS-style fade-in animations
onMounted(() => {
  // Get all animated containers
  animationContainers = document.querySelectorAll(
    ".AnimatedImageContainer > div"
  );

  // Set initial offsets (responsive based on screen size)
  const isMobile = window.innerWidth <= 768;
  const isSmallMobile = window.innerWidth <= 480;

  const offsets = isMobile
    ? [
        // Mobile offsets - smaller values for compact layout
        { x: -30, y: -20 }, // FirstImage
        { x: 25, y: -35 }, // SecondImage
        { x: -25, y: 20 }, // ThirdImage
        { x: 30, y: 15 }, // FourthImage
        { x: -20, y: -25 }, // FifthImage
        { x: 20, y: 30 }, // SixthImage
        { x: -35, y: -15 }, // SeventhImage
        { x: 25, y: -20 }, // EighthImage
        { x: -20, y: 25 }, // NinthImage
      ]
    : [
        // Desktop offsets - original values
        { x: -50, y: -30 }, // FirstImage
        { x: 40, y: -50 }, // SecondImage
        { x: -45, y: 35 }, // ThirdImage
        { x: 50, y: 25 }, // FourthImage
        { x: -30, y: -40 }, // FifthImage
        { x: 35, y: 50 }, // SixthImage
        { x: -55, y: -25 }, // SeventhImage
        { x: 45, y: -35 }, // EighthImage
        { x: -40, y: 45 }, // NinthImage
      ];

  // Apply initial transforms
  animationContainers.forEach((container, index) => {
    if (offsets[index]) {
      container.style.transform = `translate(${offsets[index].x}px, ${offsets[index].y}px)`;
      container.style.opacity = "0";
      container.style.transition =
        "all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
    }
  });

  // Create intersection observer for viewport-based animations (AOS style)
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const container = entry.target;
          const index = Array.from(animationContainers).indexOf(container);

          // Animate to final position with delay based on index
          setTimeout(() => {
            container.style.transform = "translate(0px, 0px)";
            container.style.opacity = "1";
          }, index * 100); // Stagger animation by 100ms per container
        }
      });
    },
    {
      threshold: 0.3, // Trigger when 30% of container is visible
      rootMargin: "0px 0px -50px 0px", // Trigger slightly before container enters viewport
    }
  );

  // Observe all containers
  animationContainers.forEach((container) => {
    observer.observe(container);
  });

  // Cleanup function
  return () => {
    observer.disconnect();
  };
});

onUnmounted(() => {
  // Cleanup scroll listeners
  window.removeEventListener("scroll", () => {});
});

const route = useRoute();
const category = computed(() => {
  const slug = route.params.slug;
  return CategoriesData.find((cat) => cat.slug === slug);
});

// Sample design swatches data
const designSwatches = [
  {
    image: "/Images/CarpetCircleImages/90020052.png",
    name: "Heritage Collection",
    code: "90020052",
    pdf: "/Images/CarpetCircleImages/Documents/Sanson Floorings_ 90020052.pdf",
  },
  {
    image: "/Images/CarpetCircleImages/90020055.svg",
    name: "Heritage Collection",
    code: "90020055",
    pdf: "/Images/CarpetCircleImages/Documents/90020055.pdf",
  },
  {
    image: "/Images/CarpetCircleImages/90020059.png",
    name: "Heritage Collection",
    code: "90020059",
    pdf: "/Images/CarpetCircleImages/Documents/Sanson Floorings_ _2 Colour Design-90020059.pdf",
  },
  {
    image: "/Images/CarpetCircleImages/90020061.png",
    name: "Heritage Collection",
    code: "90020061",
    pdf: "/Images/CarpetCircleImages/Documents/90020061.pdf",
  },
  {
    image: "/Images/CarpetCircleImages/90020062.svg",
    name: "Signature Line",
    code: "90020062",
    pdf: "/Images/CarpetCircleImages/Documents/90020062.pdf",
  },
  // { image: '/Images/CarpetCircleImages/90020064.png', name: 'Heritage Collection', code: '90020064', pdf: '' },
  {
    image: "/Images/CarpetCircleImages/90020065.png",
    name: "Heritage Collection",
    code: "90020065",
    pdf: "/Images/CarpetCircleImages/Documents/Sanson Floorings_90020065.pdf",
  },
  {
    image: "/Images/CarpetCircleImages/90020066.svg",
    name: "Artisan Craft",
    code: "90020066",
    pdf: "/Images/CarpetCircleImages/Documents/90020066.pdf",
  },
  {
    image: "/Images/CarpetCircleImages/90020067.svg",
    name: "Designer Series",
    code: "90020067",
    pdf: "/Images/CarpetCircleImages/Documents/90020067.pdf",
  },
  {
    image: "/Images/CarpetCircleImages/90020070.png",
    name: "Heritage Collection",
    code: "90020070",
    pdf: "/Images/CarpetCircleImages/Documents/Sanson Floorings_ _2 Colour Design-90020070.pdf",
  },
  {
    image: "/Images/CarpetCircleImages/90020071.png",
    name: "Heritage Collection",
    code: "90020071",
    pdf: "/Images/CarpetCircleImages/Documents/2 Color- 90020071.pdf",
  },
  {
    image: "/Images/CarpetCircleImages/90020072.png",
    name: "Heritage Collection",
    code: "90020072",
    pdf: "/Images/CarpetCircleImages/Documents/Sanson Floorings_ _2 Colour Design-90020072.pdf",
  },
  {
    image: "/Images/CarpetCircleImages/90020074.png",
    name: "Heritage Collection",
    code: "90020074",
    pdf: "/Images/CarpetCircleImages/Documents/2 Color- 90020074.pdf",
  },
  {
    image: "/Images/CarpetCircleImages/90020080.png",
    name: "Heritage Collection",
    code: "90020080",
    pdf: "/Images/CarpetCircleImages/Documents/Sanson Floorings_  Design-90020080.pdf",
  },
  {
    image: "/Images/CarpetCircleImages/90020081.png",
    name: "Heritage Collection",
    code: "90020081",
    pdf: "/Images/CarpetCircleImages/Documents/90020081.pdf",
  },
  {
    image: "/Images/CarpetCircleImages/90020086.png",
    name: "Heritage Collection",
    code: "90020086",
    pdf: "/Images/CarpetCircleImages/Documents/Sanson Floorings_  Design-90020086.pdf",
  },
  {
    image: "/Images/CarpetCircleImages/90020087.png",
    name: "Heritage Collection",
    code: "90020087",
    pdf: "/Images/CarpetCircleImages/Documents/Sanson Floorings_  Design-90020087.pdf",
  },
  {
    image: "/Images/CarpetCircleImages/90020088.svg",
    name: "Innovation Series",
    code: "90020088",
    pdf: "/Images/CarpetCircleImages/Documents/90020088.pdf",
  },
  {
    image: "/Images/CarpetCircleImages/90020089.svg",
    name: "Premium Collection",
    code: "90020089",
    pdf: "/Images/CarpetCircleImages/Documents/90020089.pdf",
  },
  {
    image: "/Images/CarpetCircleImages/90020090.svg",
    name: "Contemporary Style",
    code: "90020090",
    pdf: "/Images/CarpetCircleImages/Documents/90020090.pdf",
  },
  {
    image: "/Images/CarpetCircleImages/90020094.png",
    name: "Heritage Collection",
    code: "90020094",
    pdf: "/Images/CarpetCircleImages/Documents/Sanson Floorings_ _2 Colour Design-90020094.pdf",
  },
  {
    image: "/Images/CarpetCircleImages/90020095.png",
    name: "Heritage Collection",
    code: "90020095",
    pdf: "/Images/CarpetCircleImages/Documents/90020095.pdf",
  },
  {
    image: "/Images/CarpetCircleImages/90020097.png",
    name: "Heritage Collection",
    code: "90020097",
    pdf: "/Images/CarpetCircleImages/Documents/90020097.pdf",
  },
  {
    image: "/Images/CarpetCircleImages/90020101.png",
    name: "Heritage Collection",
    code: "90020101",
    pdf: "/Images/CarpetCircleImages/Documents/Sanson Floorings_  Design-90020101.pdf",
  },
  {
    image: "/Images/CarpetCircleImages/90020103.png",
    name: "Heritage Collection",
    code: "90020103",
    pdf: "/Images/CarpetCircleImages/Documents/Sanson Floorings_ _2 Colour Design-90020103.pdf",
  },
  {
    image: "/Images/CarpetCircleImages/90020106.png",
    name: "Heritage Collection",
    code: "90020106",
    pdf: "/Images/CarpetCircleImages/Documents/2 Color- 90020106.pdf",
  },
  // { image: '/Images/CarpetCircleImages/90020107.svg', name: 'Modern Luxury', code: '90020107', pdf: '/Images/CarpetCircleImages/Documents/90020107.pdf' },
  {
    image: "/Images/CarpetCircleImages/90020108.png",
    name: "Heritage Collection",
    code: "90020108",
    pdf: "/Images/CarpetCircleImages/Documents/Sanson Floorings_ _2 Colour Design-90020108.pdf",
  },
  {
    image: "/Images/CarpetCircleImages/90020112.png",
    name: "Heritage Collection",
    code: "90020112",
    pdf: "/Images/CarpetCircleImages/Documents/Sanson Floorings_  Design-90020112.pdf",
  },
  {
    image: "/Images/CarpetCircleImages/90020138.png",
    name: "Heritage Collection",
    code: "90020138",
    pdf: "/Images/CarpetCircleImages/Documents/Sanson Floorings_  Design-90020138.pdf",
  },
  {
    image: "/Images/CarpetCircleImages/Drizzle plank.png",
    name: "Drizzle Plank",
    code: "Tiles/Planks",
    pdf: "/Images/CarpetCircleImages/Documents/Tiles_Planks.pdf",
  },
  {
    image: "/Images/CarpetCircleImages/New Design.png",
    name: "New Design.png",
    code: "New Design",
    pdf: "/Images/CarpetCircleImages/Documents/Sanson Floorings_New Design.pdf",
  },
  // { image: '/Images/CarpetCircleImages/AIR GLOW 2015 PLANK.png', name: 'Heritage Collection', code: 'AIR GLOW 2015 PLANK', pdf: '/Images/CarpetCircleImages/Documents/Sanson Floorings_AIR GLOW 2015.pdf' },
];

// Function to open PDF in new tab
const openPDF = (pdfPath) => {
  if (pdfPath && pdfPath.trim() !== "") {
    window.open(pdfPath, "_blank");
  }
};
</script>

<style scoped>
/* Import the CSS file */
@import "./CarpetTilesLayout.css";
</style>
