<script setup lang="ts">
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="min-h-screen bg-brand-cream text-brand-brown flex flex-col justify-between">
    
    <router-view class="grow" />
    
    <Footer />
  </div>
</template>