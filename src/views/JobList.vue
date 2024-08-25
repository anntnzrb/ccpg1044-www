<template>
  <div class="flex flex-col items-center justify-center pb-20">
    <div class="flex flex-col items-center justify-center p-8 gap-12 pt-20 max-w-[1024px]">
      <h1 class="text-4xl font-extrabold leading-none tracking-tight text-center">
        Mejores ofertas de acuerdo a tu perfil
      </h1>

      <div v-if="loading">
        <h3>Cargando...</h3>
      </div>

      <div v-if="recommendations && !loading" class="flex flex-col gap-8">
        <div
          v-for="job in recommendations"
          :key="job.title"
          class="flex flex-col p-4 border shadow-sm rounded-md gap-2"
        >
          <h3 class="text-2xl font-bold leading-none text-center">
            {{ capitalize(job.title) }}
          </h3>
          <p><span class="font-semibold"> Empresa: </span>{{ capitalize(job.company) }}</p>
          <p><span class="font-semibold"> Ubicación: </span>{{ capitalize(job.location) }}</p>
          <p>
            <span class="font-semibold"> Modo de trabajo: </span>
            {{ job.mode && job.mode !== '' ? capitalize(job.mode) : 'No se especifica' }}
          </p>
          <p>
            <span class="font-semibold"> Tipo de contrato: </span>
            {{
              job.schedule && job.schedule !== '' ? capitalize(job.schedule) : 'No se especifica'
            }}
          </p>
          <div>
            <span class="font-semibold"> Descripción: </span>
            <p>{{ capitalize(job.description) }}</p>
          </div>
          <div class="flex flex-row gap-2">
            <span class="font-semibold"> Enlace: </span>
            <a :href="job.url" target="_blank" class="underline text-blue-500">{{ job.url }}</a>
          </div>
        </div>
      </div>
      <div v-if="!recommendations && !loading">
        <p class="text-2xl tracking-tight">No hay ofertas disponibles.</p>
      </div>
    </div>

    <Button @click="router.push('/')">Llévame al inicio</Button>
  </div>
</template>

<script lang="ts" setup>
import { capitalize, onMounted, ref } from 'vue'
import { useProfileStore } from '../stores/profile'
import { useRouter } from 'vue-router'
import { Button } from '@/components/ui/button'

const router = useRouter()
const profileStore = useProfileStore()
const loading = ref(false)

type Job = {
  title: string
  company: string
  location: string
  mode: string
  schedule: string
  description: string
  url: string
}

const recommendations = ref<Job[]>([])

onMounted(async () => {
  const p = {
    name: profileStore.profile.name,
    education_level: profileStore.profile.education_level,
    job_title: profileStore.profile.job_title,
    skills: profileStore.profile.skills,
    work_mode: profileStore.profile.work_mode,
    location: profileStore.profile.location,
    certifications: profileStore.profile.certifications,
    knowledge: profileStore.profile.knowledge,
    work_experience: profileStore.profile.work_experience,
    contract_type: profileStore.profile.contract_type,
    disability: profileStore.profile.disability === 'si' ? 'discapacidad' : ''
  }

  loading.value = true
  const response = await fetch('http://localhost:8000/api/get-job-recommendations/?n=5', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(p)
  })

  const data = await response.json()

  loading.value = false
  recommendations.value = data.recommendations
})
</script>
