<script setup lang="ts">
    import Header from '../components/Header.vue';
</script>

<template>
  <div class="min-h-screen bg-brand-cream text-brand-brown py-12 px-4 sm:px-6 flex flex-col items-center">
    
    <Header title="Servicios" />

    <div class="max-w-4xl w-full flex flex-col gap-10">
      
      <div class="flex flex-col items-center text-center gap-3">
        <span class="text-3xl">✂️</span>
        <h1 class="text-4xl font-extrabold text-brand-pink tracking-wide">
          Tarifas de Peluquería Canina
        </h1>
        <p class="text-brand-lilac font-medium text-lg">
          Trato con amor, paciencia y adaptado a las necesidades de cada peludo.
        </p>
      </div>

      <div class="flex flex-col md:flex-row gap-6">
        
        <div class="w-full md:w-1/2 bg-white rounded-3xl p-6 shadow-sm border border-brand-pink/20 hover:shadow-md transition-shadow flex flex-col justify-between">
          <div>
            <div class="flex items-center gap-3 mb-4">
              <span class="text-2xl bg-brand-pink/10 p-2 rounded-2xl">🐶</span>
              <h2 class="text-2xl font-bold text-brand-brown">Baño + Corte</h2>
            </div>
            
            <ul class="flex flex-col gap-4 my-6">
              <li class="flex justify-between items-center pb-2 border-b border-gray-100">
                <span class="text-gray-600 font-medium">Perro pequeño</span>
                <span class="text-2xl font-extrabold text-brand-pink">35 €</span>
              </li>
              <li class="flex justify-between items-center">
                <span class="text-gray-600 font-medium">Perro grande</span>
                <span class="text-2xl font-extrabold text-brand-pink">45 €</span>
              </li>
            </ul>
          </div>

          <div class="mt-4 pt-4 border-t border-gray-100 text-xs text-gray-500 text-center">
            Incluye corte a tijera o máquina según la raza y preferencia.
          </div>
        </div>

        <div class="w-full md:w-1/2 bg-white rounded-3xl p-6 shadow-sm border border-brand-pink/20 hover:shadow-md transition-shadow flex flex-col justify-between">
          <div>
            <div class="flex items-center gap-3 mb-4">
              <span class="text-2xl bg-brand-lilac/10 p-2 rounded-2xl">🛁</span>
              <h2 class="text-2xl font-bold text-brand-brown">Solo Baño</h2>
            </div>

            <ul class="flex flex-col gap-4 my-6">
              <li class="flex justify-between items-center pb-2 border-b border-gray-100">
                <span class="text-gray-600 font-medium">Perro pequeño</span>
                <span class="text-2xl font-extrabold text-brand-pink">25 €</span>
              </li>
              <li class="flex justify-between items-center">
                <span class="text-gray-600 font-medium">Perro grande</span>
                <span class="text-2xl font-extrabold text-brand-pink">30 €</span>
              </li>
            </ul>
          </div>

          <div class="mt-4 pt-4 border-t border-gray-100 text-xs text-gray-500 text-center">
            Ideal para mantenimientos entre cortes y refrescar el manto.
          </div>
        </div>

      </div>

      <div class="bg-white rounded-3xl p-6 shadow-sm border border-brand-pink/20 flex flex-col gap-6">
        <div class="flex items-center gap-3">
          <span class="text-2xl bg-brand-pink/10 p-2 rounded-2xl">🐾</span>
          <h2 class="text-2xl font-bold text-brand-brown">Servicios Adicionales</h2>
        </div>

        <div class="flex flex-col sm:flex-row gap-4">
          
          <div class="flex-1 bg-brand-cream/50 p-4 rounded-2xl flex flex-col items-center justify-center text-center">
            <p class="font-semibold text-brand-brown mb-1">Deslanado</p>
            <p class="text-xl font-extrabold text-brand-pink">+5 €</p>
          </div>

          <div class="flex-1 bg-brand-cream/50 p-4 rounded-2xl flex flex-col items-center justify-center text-center">
            <p class="font-semibold text-brand-brown mb-1">Desenredado / Nudos</p>
            <p class="text-xl font-extrabold text-brand-pink">+7 €</p>
          </div>

          <div class="flex-1 bg-brand-cream/50 p-4 rounded-2xl flex flex-col items-center justify-center text-center">
            <p class="font-semibold text-brand-brown mb-1">Nudos severos / Extra</p>
            <p class="text-sm font-bold text-brand-lilac mt-2">Consultar</p>
          </div>

        </div>
      </div>

      <div class="bg-brand-lilac/10 border border-brand-lilac/30 rounded-2xl p-5 flex items-center gap-4">
        <span class="text-3xl shrink-0">✨</span>
        <p class="text-sm sm:text-base text-brand-brown font-medium leading-relaxed">
          <strong>Todos los servicios incluyen:</strong> baño completo, secado, vaciado de plantares, corte de uñas y cuidado adaptado al tipo de pelo de tu peludo.
        </p>
      </div>

      <div class="bg-amber-50 border border-amber-200/80 rounded-2xl p-4 flex items-start gap-3 text-amber-900 text-xs sm:text-sm">
        <span class="text-lg shrink-0">ℹ️</span>
        <p class="leading-relaxed">
          <strong>Nota sobre las tarifas:</strong> El precio final puede variar ligeramente en función del tamaño exacto, el tipo y estado del manto (enredos o suciedad excesiva) y el tiempo requerido para realizar el servicio con total seguridad y calma para el perrito.
        </p>
      </div>

      <div class="flex justify-center pt-4">
        <router-link 
          :to="{ name: 'contact' }" 
          class="bg-brand-pink hover:bg-brand-pink-hover text-white font-bold py-3.5 px-10 rounded-full shadow-lg transition-all transform hover:scale-105 text-lg"
        >
          Consultar para mi perrito
        </router-link>
      </div>

    </div>

  </div>
</template>