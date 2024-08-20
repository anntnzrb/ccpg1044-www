<template>
  <div class="p-6 bg-gray-100 min-h-screen">
    <h1 class="text-3xl font-bold mb-6 text-black">Recolección de Información Profesional</h1>
    <form class="space-y-8">
      <!-- Sección de Educación -->
      <section class="bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-2xl font-semibold mb-4 text-black">Educación</h2>
        <div class="mb-4">
          <label for="nivel-estudios" class="block text-sm font-medium text-gray-700"
            >Nivel de estudios:</label
          >
          <input
            type="text"
            id="nivel-estudios"
            v-model="educacion.nivelEstudios"
            class="mt-1 block w-full border-gray-500 bg-gray-100 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
      </section>

      <!-- Sección de Experiencia Laboral -->
      <section class="bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-2xl font-semibold mb-4 text-black">Experiencia Laboral</h2>
        <div class="mb-4">
          <label for="titulo-puesto" class="block text-sm font-medium text-gray-700"
            >Título del Puesto:</label
          >
          <input
            type="text"
            id="titulo-puesto"
            v-model="experiencia.tituloPuesto"
            class="mt-1 block w-full border-gray-500 bg-gray-100 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div class="mb-4">
          <label for="duracion" class="block text-sm font-medium text-gray-700"
            >Duración en el empleo (Mes/Año de inicio y fin):</label
          >
          <input
            type="text"
            id="duracion"
            v-model="experiencia.duracion"
            class="mt-1 block w-full border-gray-500 bg-gray-100 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div class="mb-4">
          <label for="responsabilidades" class="block text-sm font-medium text-gray-700"
            >Responsabilidades principales:</label
          >
          <textarea
            id="responsabilidades"
            v-model="experiencia.responsabilidades"
            class="mt-1 block w-full border-gray-500 bg-gray-100 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          ></textarea>
        </div>
      </section>

      <!-- Sección de Habilidades -->
      <section class="bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-2xl font-semibold mb-4 text-black">Habilidades</h2>

        <!-- Habilidades Técnicas -->
        <div class="mb-4">
          <label for="habilidades-tecnicas" class="block text-sm font-medium text-gray-700">
            Lista de Habilidades Técnicas:
          </label>
          <textarea
            id="habilidades-tecnicas"
            v-model="habilidades.tecnicas"
            class="mt-1 block w-full border-gray-500 bg-gray-100 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          ></textarea>
        </div>

        <!-- Habilidades Blandas -->
        <div class="mb-4">
          <label for="habilidades-blandas" class="block text-sm font-medium text-gray-700">
            Lista de Habilidades Blandas:
          </label>
          <textarea
            id="habilidades-blandas"
            v-model="habilidades.blandas"
            class="mt-1 block w-full border-gray-500 bg-gray-100 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          ></textarea>
        </div>
      </section>

      <!-- Sección de Sueldo Esperado -->
      <section class="bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-2xl font-semibold mb-4 text-black">Sueldo Esperado</h2>
        <div class="mb-4">
          <label for="sueldo" class="block text-sm font-medium text-gray-700"
            >Rango Salarial <b>(USD)</b>:</label
          >
          <input
            type="text"
            id="sueldo"
            v-model="sueldo"
            class="mt-1 block w-full border-gray-500 bg-gray-100 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
      </section>

      <!-- Sección de Preferencia de Trabajo -->
      <section class="bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-2xl font-semibold mb-4 text-black">Preferencia de Trabajo</h2>
        <div class="mb-4">
          <label for="preferencia" class="block text-sm font-medium text-gray-700"
            >Preferencia de trabajo:</label
          >
          <select
            id="preferencia"
            v-model="preferencia"
            class="mt-1 block w-full border-gray-500 bg-gray-100 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="remoto">Remoto</option>
            <option value="hibrido">Híbrido</option>
            <option value="presencial">Presencial</option>
          </select>
        </div>
      </section>

      <!-- Sección de Nombre -->
      <section class="bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-2xl font-semibold mb-4 text-black">Nombre</h2>
        <div class="mb-4">
          <label for="nombre" class="block text-sm font-medium text-gray-700">Nombre:</label>
          <input
            type="text"
            id="nombre"
            v-model="nombre"
            class="mt-1 block w-full border-gray-500 bg-gray-100 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
      </section>

      <!-- Sección de Ubicación -->
      <section class="bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-2xl font-semibold mb-4 text-black">Ubicación</h2>
        <div class="mb-4">
          <label for="ubicacion" class="block text-sm font-medium text-gray-700">Ubicación:</label>
          <input
            type="text"
            id="ubicacion"
            v-model="ubicacion"
            class="mt-1 block w-full border-gray-500 bg-gray-100 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
      </section>

      <!-- Sección de Nivel de Educación -->
      <section class="bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-2xl font-semibold mb-4 text-black">Nivel de Educación</h2>
        <div class="mb-4">
          <label for="nivel_de_educacion" class="block text-sm font-medium text-gray-700">Nivel de Educación:</label>
          <input
            type="text"
            id="nivel_de_educacion"
            v-model="nivel_de_educacion"
            class="mt-1 block w-full border-gray-500 bg-gray-100 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
      </section>

      <!-- Sección de Certificaciones -->
      <section class="bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-2xl font-semibold mb-4 text-black">Certificaciones</h2>
        <div class="mb-4">
          <label for="certificaciones" class="block text-sm font-medium text-gray-700">Certificaciones:</label>
          <input
            type="text"
            id="certificaciones"
            v-model="certificaciones"
            class="mt-1 block w-full border-gray-500 bg-gray-100 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
      </section>

      <!-- Sección de Conocimientos -->
      <section class="bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-2xl font-semibold mb-4 text-black">Conocimientos</h2>
        <div class="mb-4">
          <label for="conocimientos" class="block text-sm font-medium text-gray-700">Conocimientos:</label>
          <input
            type="text"
            id="conocimientos"
            v-model="conocimientos"
            class="mt-1 block w-full border-gray-500 bg-gray-100 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
      </section>

      <!-- Sección de Disponibilidad Horaria -->
      <section class="bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-2xl font-semibold mb-4 text-black">Disponibilidad Horaria</h2>
        <div class="mb-4">
          <label for="disponibilidad_horaria" class="block text-sm font-medium text-gray-700">Disponibilidad Horaria:</label>
          <input
            type="text"
            id="disponibilidad_horaria"
            v-model="disponibilidad_horaria"
            class="mt-1 block w-full border-gray-500 bg-gray-100 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
      </section>



      <!-- Sección de Tipo de Postulante -->
      <section class="bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-2xl font-semibold mb-4 text-black">Tipo de Postulante</h2>
        <div class="mb-4">
          <label for="tipo_de_postulante" class="block text-sm font-medium text-gray-700">Tipo de Postulante:</label>
          <input
            type="text"
            id="tipo_de_postulante"
            v-model="tipo_de_postulante"
            class="mt-1 block w-full border-gray-500 bg-gray-100 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
      </section>

      <!-- Sección de Discapacidad -->
      <section class="bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-2xl font-semibold mb-4 text-black">Discapacidad</h2>
        <div class="mb-4">
          <label for="discapacidad" class="block text-sm font-medium text-gray-700">Discapacidad:</label>
          <input
            type="text"
            id="discapacidad"
            v-model="discapacidad"
            class="mt-1 block w-full border-gray-500 bg-gray-100 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
      </section>

      <!-- Sección de Modo de Trabajo -->
      <section class="bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-2xl font-semibold mb-4 text-black">Modo de Trabajo</h2>
        <div class="mb-4">
          <label for="modo_de_trabajo" class="block text-sm font-medium text-gray-700">Modo de Trabajo:</label>
          <input
            type="text"
            id="modo_de_trabajo"
            v-model="modo_de_trabajo"
            class="mt-1 block w-full border-gray-500 bg-gray-100 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
      </section>

      <!-- Sección de Preferencia de Contrato -->
      <section class="bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-2xl font-semibold mb-4 text-black">Preferencia de Contrato</h2>
        <div class="mb-4">
          <label for="preferencia_de_contrato" class="block text-sm font-medium text-gray-700">Preferencia de Contrato:</label>
          <input
            type="text"
            id="preferencia_de_contrato"
            v-model="preferencia_de_contrato"
            class="mt-1 block w-full border-gray-500 bg-gray-100 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
      </section>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nombre: '',
      ubicacion: '',
      nivel_de_educacion: '',
      certificaciones: '',
      conocimientos: '',
      disponibilidad_horaria: '',
      habilidades: '',
      experiencia_laboral: '',
      tipo_de_postulante: '',
      discapacidad: '',
      modo_de_trabajo: '',
      preferencia_de_contrato: '',
      educacion: {
        nivelEstudios: ''
      },
      experiencia: {
        tituloPuesto: '',
        duracion: '',
        responsabilidades: ''
      },
      habilidades: {
        tecnicas: '',
        blandas: ''
      },
      sueldo: '',
      preferencia: ''
    }
  }
}
</script>
