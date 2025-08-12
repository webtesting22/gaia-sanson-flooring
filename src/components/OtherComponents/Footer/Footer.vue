<script>
import "./Footer.css"
</script>
<template>
    <footer class="FooterContainer paddingBottom80">
        <div class="footer-content Container paddingBottom20 paddingTop80 ">
            <!-- Logo and Tagline Section -->
            <div class="footer-section logo-section">
                <div class="logo-container">
                    <h2 class="logo">GAIA</h2>
                    <p class="tagline">EXPERTS IN INNOVATIVE FLOOR FASHION</p>
                </div>
            </div>

            <!-- Contact Us Section -->
            <div class="footer-section contact-section">
                <h3 class="section-title">CONTACT US</h3>
                <div class="contact-info">
                    <div class="contact-item">
                        <span class="contact-icon">📞</span>
                        <span class="contact-text">+91-9910921119</span>
                    </div>
                    <div class="contact-item">
                        <span class="contact-icon">✉️</span>
                        <span class="contact-text">contact@sansonfloorings.com</span>
                    </div>
                    <div class="contact-item">
                        <span class="contact-icon">🌐</span>
                        <span class="contact-text">www.sansonfloorings.com</span>
                    </div>
                </div>
            </div>

            <!-- Explore Section -->
            <div class="footer-section explore-section">
                <h3 class="section-title">EXPLORE</h3>
                                            <nav class="footer-nav">
                                <router-link to="/" class="nav-link">Home</router-link>
                                <router-link to="/categories" class="nav-link">Our Products</router-link>
                                <a href="#" class="nav-link">About Us</a>
                                <a href="#" class="nav-link">Contact Us</a>
                            </nav>
            </div>

            <!-- Address Section -->
            <div class="footer-section address-section">
                <h3 class="section-title">ADDRESS</h3>
                <div class="address-info">
                    <div class="address-item">
                        <h4 class="address-subtitle">Corporate Office:</h4>
                        <p class="address-text">B-5B, Plot No. 70, 1st Floor, Rama Road Industrial Area, New Delhi -
                            110015</p>
                    </div>
                    <div class="address-item">
                        <h4 class="address-subtitle">Manufacturing Unit:</h4>
                        <p class="address-text">D-9, Flatted Factory Complex, Jhandewalan, New Delhi - 110055</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Bottom Footer Section -->
        <div class="footer-bottom Container">
            <div class="footer-bottom-content">
                <div class="legal-links">
                    <a href="#" class="legal-link">Terms & Services</a>
                    <a href="#" class="legal-link">Privacy Policy</a>
                </div>
                <div class="copyright">
                    <p>© 2021 All Rights Reserved</p>
                </div>
                <div class="social-links">
                    <a href="#" class="social-link">
                        <svg class="social-icon" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                    </a>
                    <a href="#" class="social-link">
                        <svg class="social-icon" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                        </svg>
                    </a>
                    <a href="#" class="social-link">
                        <svg class="social-icon" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>
// Footer component logic can be added here if needed
</script>

<style scoped>
/* Import the CSS file */
@import './Footer.css';
</style>