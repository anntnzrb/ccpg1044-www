import { defineStore } from 'pinia'
import { reactive } from 'vue'

export const useProfileStore = defineStore('profileStore', () => {
  const profile = reactive({
    name: '',
    job_title: '',
    location: '',
    disability: '',
    education_level: '',
    knowledge: '',
    skills: '',
    certifications: '',
    work_experience: '',
    work_mode: '',
    contract_type: ''
  })

  return { profile }
})
