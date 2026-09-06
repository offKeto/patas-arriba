<script setup lang="ts">
interface Props {
  title?: string
}

withDefaults(defineProps<Props>(), {
  title: 'Patas arriba'
})
</script>

<template>
  <header class="w-full max-w-4xl px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-brand-pink/10">
    
      <router-link :to="{ name: 'home' }" class="flex items-center gap-3 hover:cursor-pointer hover:scale-110 transition-all">
          <img 
          src="/logo.webp" 
          alt="Logo Patas Arriba" 
          class="w-12 h-12 object-cover drop-shadow-sm rounded-full"
          />
          <h1 class="text-2xl font-extrabold text-brand-pink tracking-wide">
            {{ title }}
          </h1>
      </router-link>

    <nav class="flex items-center gap-6 text-base sm:text-lg font-medium text-brand-lilac">
      <router-link :to="{ name: 'home' }" class="hover:text-brand-pink transition-colors">
        Inicio
      </router-link>

      <router-link :to="{ name: 'services' }" class="hover:text-brand-pink transition-colors">
        Servicios
      </router-link>

      <router-link :to="{ name: 'contact' }" class="hover:text-brand-pink transition-colors">
        Contacto
      </router-link>
    </nav>

  </header>
</template>