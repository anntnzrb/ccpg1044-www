<template>
  <div class="flex flex-col items-center justify-center min-h-svh gap-10">
    <div class="flex justify-center items-center max-w-[640px]">
      <h1 class="text-4xl font-extrabold leadning-tight text-center">
        Bienvenido al sistema de recomendación de ofertas laborales
      </h1>
    </div>
    <div>
      <router-link to="/form">
        <Button @click="" class="animate-bounce">
          Empezar
          <ArrowRight />
        </Button>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-vue-next'
</script>
