<script setup lang="ts">
import { ref } from 'vue'
import Header from '../components/Header.vue'

import photo1 from '../assets/photo1.webp'
import photo2 from '../assets/photo2.webp'
import photo3 from '../assets/photo3.webp'
import photo4 from '../assets/photo4.webp'
import photo5 from '../assets/photo5.webp'

const photos = [photo1, photo2, photo3, photo4, photo5]

const currentIndex = ref(0)

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + photos.length) % photos.length
}

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % photos.length
}

const goToSlide = (index: number) => {
  currentIndex.value = index
}
</script>

<template>
  <div class="min-h-screen bg-brand-cream text-brand-brown py-12 px-4 sm:px-6 flex flex-col items-center">
    
    <Header />

    <main class="w-full max-w-4xl px-6 py-10 flex flex-col items-center text-center gap-8">
      
      <div class="flex flex-col items-center">
        <img 
          src="/logo.webp" 
          alt="Logo Patas Arriba" 
          class="w-52 h-52 object-contain mb-6 drop-shadow-md rounded-full"
        />
        
        <h1 class="text-5xl font-extrabold text-brand-pink mb-3 tracking-wide">
          Patas Arriba
        </h1>
        
        <h2 class="text-2xl text-brand-lilac mb-4 font-medium">
          Peluquería canina de confianza
        </h2>
        
        <p class="text-lg max-w-2xl text-brand-brown/80 leading-relaxed">
          ¡Nosotros nos encargamos de todo! Recogemos a tu peludo en la puerta de tu casa, 
          lo bañamos y mimamos en nuestras instalaciones adaptadas, y te lo devolvemos 
          limpio, guapo y feliz.
        </p>
      </div>

      <div class="relative w-full max-w-2xl overflow-hidden rounded-3xl shadow-md border border-brand-pink/20 bg-white">
        
        <div 
          class="flex transition-transform duration-500 ease-out" 
          :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
        >
          <div 
            v-for="(photo, index) in photos" 
            :key="index" 
            class="w-full shrink-0 h-80 sm:h-112.5 bg-brand-brown/5 flex items-center justify-center"
          >
            <img 
              :src="photo" 
              :alt="`Trabajo de peluquería ${index + 1}`" 
              class="w-full h-full object-contain"
            />
          </div>
        </div>

        <button 
          @click="prevSlide" 
          class="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-brand-brown w-10 h-10 rounded-full shadow-md flex items-center justify-center transition-all hover:scale-110"
          aria-label="Foto anterior"
        >
          ❮
        </button>

        <button 
          @click="nextSlide" 
          class="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-brand-brown w-10 h-10 rounded-full shadow-md flex items-center justify-center transition-all hover:scale-110"
          aria-label="Foto siguiente"
        >
          ❯
        </button>

        <div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          <button 
            v-for="(_, index) in photos" 
            :key="index"
            @click="goToSlide(index)"
            class="h-2.5 rounded-full transition-all"
            :class="currentIndex === index ? 'bg-brand-pink w-6' : 'bg-white/80 w-2.5 hover:bg-white'"
            :aria-label="`Ir a foto ${index + 1}`"
          />
        </div>

      </div>

      <router-link 
        :to="{ name: 'contact' }" 
        class="bg-brand-pink hover:bg-brand-pink-hover text-white font-bold py-3.5 px-10 rounded-full shadow-lg transition-all transform hover:scale-105 text-lg"
      >
        Pedir Cita
      </router-link>

    </main>
  </div>
</template>