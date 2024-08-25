<template>
  <div class="flex items-center justify-center">
    <div class="flex min-h-svh items-center justify-center min-w-[640px]">
      <Form
        v-slot="{ meta, values, validate, setFieldValue }"
        as=""
        keep-values
        :validation-schema="toTypedSchema(validationSchema[stepIndex - 1])"
      >
        <Stepper
          v-slot="{ isNextDisabled, isPrevDisabled, nextStep, prevStep }"
          v-model="stepIndex"
          class="block w-full"
        >
          <form
            @submit="
              (e) => {
                e.preventDefault()
                validate()

                if (stepIndex === steps.length && meta.valid) {
                  onSubmit(values)
                }
              }
            "
          >
            <div class="flex w-full flex-start gap-2">
              <StepperItem
                v-for="step in steps"
                :key="step.step"
                v-slot="{ state }"
                class="relative flex w-full flex-col items-center justify-center"
                :step="step.step"
              >
                <StepperSeparator
                  v-if="step.step !== steps[steps.length - 1].step"
                  class="absolute left-[calc(50%+20px)] right-[calc(-50%+10px)] top-5 block h-0.5 shrink-0 rounded-full bg-muted group-data-[state=completed]:bg-primary"
                />

                <StepperTrigger as-child>
                  <Button
                    :variant="state === 'completed' || state === 'active' ? 'default' : 'outline'"
                    size="icon"
                    class="z-10 rounded-full shrink-0"
                    :class="[
                      state === 'active' && 'ring-2 ring-ring ring-offset-2 ring-offset-background'
                    ]"
                    :disabled="state !== 'completed' && !meta.valid"
                  >
                    <Check v-if="state === 'completed'" class="size-5" />
                    <Circle v-if="state === 'active'" />
                    <Dot v-if="state === 'inactive'" />
                  </Button>
                </StepperTrigger>

                <div class="mt-5 flex flex-col items-center text-center">
                  <StepperTitle
                    :class="[state === 'active' && 'text-primary']"
                    class="text-sm font-semibold transition lg:text-base"
                  >
                    {{ step.title }}
                  </StepperTitle>
                  <StepperDescription
                    :class="[state === 'active' && 'text-primary']"
                    class="sr-only text-xs text-muted-foreground transition md:not-sr-only lg:text-sm"
                  >
                    {{ step.description }}
                  </StepperDescription>
                </div>
              </StepperItem>
            </div>

            <div class="flex flex-col gap-4 mt-4">
              <template v-if="stepIndex === 1">
                <FormField v-slot="{ componentField }" name="name">
                  <FormItem>
                    <FormLabel>Nombre</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        v-bind="componentField"
                        @dblclick="!values['name'] && setFieldValue('name', 'Laura Pérez')"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                </FormField>

                <FormField v-slot="{ componentField }" name="job_title">
                  <FormItem>
                    <FormLabel>Cargo aspirado</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        v-bind="componentField"
                        placeholder="Ej. Desarrollador de Software"
                        @dblclick="
                          !values['job_title'] &&
                            setFieldValue('job_title', 'Desarrolladora Frontend')
                        "
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                </FormField>

                <FormField v-slot="{ componentField }" name="location">
                  <FormItem>
                    <FormLabel>Ciudad</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        v-bind="componentField"
                        @dblclick="!values['location'] && setFieldValue('location', 'Quito')"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                </FormField>

                <FormField v-slot="{ componentField }" name="disability">
                  <FormItem>
                    <FormLabel>Dispacacidad</FormLabel>

                    <Select v-bind="componentField">
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="¿Tienes alguna discapacidad?" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="discapacidad"> Si </SelectItem>
                          <SelectItem value="no"> No </SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                </FormField>
              </template>

              <template v-if="stepIndex === 2">
                <FormField v-slot="{ componentField }" name="education_level">
                  <FormItem>
                    <FormLabel>Nivel de educación</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        v-bind="componentField"
                        placeholder="Ej. Licenciatura en Administración de Empresas"
                        @dblclick="
                          !values['education_level'] &&
                            setFieldValue('education_level', 'Ingeniería en Sistemas')
                        "
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                </FormField>

                <FormField v-slot="{ componentField }" name="skills">
                  <FormItem>
                    <FormLabel>Habilidades</FormLabel>
                    <FormControl>
                      <Textarea
                        class="resize-none"
                        v-bind="componentField"
                        placeholder="Ej. Gestión de proyectos, Desarrollo web, Comunicación efectiva"
                        @dblclick="
                          !values['skills'] &&
                            setFieldValue(
                              'skills',
                              'HTML, CSS, JavaScript, React, Responsive Design'
                            )
                        "
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                </FormField>

                <FormField v-slot="{ componentField }" name="certifications">
                  <FormItem>
                    <FormLabel>Certificaciones</FormLabel>
                    <FormControl>
                      <Textarea
                        class="resize-none"
                        v-bind="componentField"
                        placeholder="Ej. Scrum Master, TOEFL, Cisco Certified Network Associate (CCNA)"
                        @dblclick="
                          !values['certifications'] &&
                            setFieldValue(
                              'certifications',
                              'Certificación en Desarrollo Web Full Stack, Certificación en ReactJS'
                            )
                        "
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                </FormField>
              </template>

              <template v-if="stepIndex === 3">
                <FormField v-slot="{ componentField }" name="work_experience">
                  <FormItem>
                    <FormLabel>Experiencia laboral</FormLabel>
                    <FormControl>
                      <Textarea
                        class="resize-none"
                        v-bind="componentField"
                        placeholder="Ej. Gerente de marketing en ABC Ltd., 5 años - Estrategias de crecimiento y campañas digitales"
                        @dblclick="
                          !values['work_experience'] &&
                            setFieldValue(
                              'work_experience',
                              '2 años como Desarrolladora Web en una empresa de software, trabajando principalmente en el desarrollo de interfaces de usuario y optimización de sitios web.'
                            )
                        "
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                </FormField>
              </template>

              <template v-if="stepIndex === 4">
                <FormField v-slot="{ componentField }" name="work_mode">
                  <FormItem>
                    <FormLabel>Modalidad de trabajo</FormLabel>

                    <Select v-bind="componentField">
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona una modalidad" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="presencial"> Presencial </SelectItem>
                          <SelectItem value="remoto"> Remoto </SelectItem>
                          <SelectItem value="hibrido"> Híbrido </SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                </FormField>

                <FormField v-slot="{ componentField }" name="contract_type">
                  <FormItem>
                    <FormLabel>Tipo de contrato</FormLabel>

                    <Select v-bind="componentField">
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona una tipo de contrato" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="pasantia"> Pasantía </SelectItem>
                          <SelectItem value="tiempo completo"> Tiempo completo </SelectItem>
                          <SelectItem value="medio tiempo"> Medio tiempo </SelectItem>
                          <SelectItem value="por horas"> Por horas </SelectItem>
                          <SelectItem value="contrato por tiempo determinado">
                            Tiempo determinado
                          </SelectItem>
                          <SelectItem value="nocturno"> Nocturno </SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                </FormField>
              </template>
            </div>

            <div class="flex items-center justify-between mt-4">
              <Button :disabled="isPrevDisabled" variant="outline" size="sm" @click="prevStep()">
                Anterior
              </Button>
              <div class="flex items-center gap-3">
                <Button
                  v-if="stepIndex !== 4"
                  :type="meta.valid ? 'button' : 'submit'"
                  :disabled="isNextDisabled"
                  size="sm"
                  @click="meta.valid && nextStep()"
                >
                  Siguiente
                </Button>
                <Button v-if="stepIndex === 4" size="sm" type="submit"> Submit </Button>
              </div>
            </div>
          </form>
        </Stepper>
      </Form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Check, Circle, Dot } from 'lucide-vue-next'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'
import { h, ref } from 'vue'
import { Textarea } from '@/components/ui/textarea'
import {
  Stepper,
  StepperDescription,
  StepperItem,
  StepperSeparator,
  StepperTitle,
  StepperTrigger
} from '@/components/ui/stepper'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { toast } from '@/components/ui/toast'

const stepIndex = ref(1)
const steps = [
  {
    step: 1,
    title: 'Información personal',
    description: 'Ingresa tus datos personales'
  },
  {
    step: 2,
    title: 'Educación',
    description: 'Cuentanos sobre ti'
  },
  {
    step: 3,
    title: 'Experiencia',
    description: 'Cuéntanos sobre tus experiencias laborales'
  },
  {
    step: 4,
    title: 'Preferencias',
    description: '¿Qué buscas en un trabajo?'
  }
]

const validationSchema = [
  z.object({
    name: z.string().optional(),
    job_title: z.string().optional(),
    location: z.string().optional(),
    disability: z.enum(['discapacidad', 'no']).optional()
  }),
  z.object({
    education_level: z.string().optional(),
    knowledge: z.string().optional(),
    skills: z.string().optional(),
    certifications: z.string().optional()
  }),
  z.object({
    work_experience: z.string().optional()
  }),
  z.object({
    work_mode: z
      .enum(['presencial', 'remoto', 'hibrido'], {
        required_error: 'Por favor, selecciona un modo de trabajo'
      })
      .optional(),
    contract_type: z
      .enum(
        [
          'pasantia',
          'tiempo completo',
          'medio tiempo',
          'por horas',
          'contrato por tiempo determinado',
          'nocturno'
        ],
        {
          required_error: 'Por favor, selecciona un tipo de contrato'
        }
      )
      .optional()
  })
]

import { useProfileStore } from '../stores/profile'
import { useRouter } from 'vue-router'

const router = useRouter()
const profileStore = useProfileStore()

function onSubmit(values: any) {
  Object.assign(profileStore.profile, values)
  router.push({ path: '/jobs' })
}
</script>
