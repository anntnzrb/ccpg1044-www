<template>
  <div class="p-6 bg-gray-100 min-h-screen">
    <h1 class="text-3xl font-bold mb-6 text-black">Recolección de Información Profesional</h1>
    <form class="space-y-8">
      <!-- Sección de Educación -->
      <section class="bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-2xl font-semibold mb-4 text-black">Educación</h2>
        <div class="mb-4">
          <label for="nivel-estudios" class="block text-sm font-medium text-gray-700">Nivel de estudios:</label>
          <input type="text" id="nivel-estudios" v-model="educacion.nivelEstudios"
            class="mt-1 block w-full border-gray-500 bg-gray-100 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
        </div>
        <button @click="cargarDatosEducacion" type="button"
          class="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-700">
          Cargar
        </button>
      </section>

      <!-- Sección de Experiencia Laboral -->
      <section class="bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-2xl font-semibold mb-4 text-black">Experiencia Laboral</h2>
        <div class="mb-4">
          <label for="titulo-puesto" class="block text-sm font-medium text-gray-700">Título del Puesto:</label>
          <input type="text" id="titulo-puesto" v-model="experiencia.tituloPuesto"
            class="mt-1 block w-full border-gray-500 bg-gray-100 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
        </div>
        <button @click="cargarDatosExperiencia" type="button"
          class="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-700">
          Cargar
        </button>
      </section>

      <section class="bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-2xl font-semibold mb-4 text-black">Habilidades</h2>

        <!-- Habilidades Técnicas -->
        <div class="mb-4">
          <label for="habilidades-tecnicas" class="block text-sm font-medium text-gray-700">
            Lista de Habilidades Técnicas:
          </label>
          <textarea id="habilidades-tecnicas" v-model="habilidades.tecnicas"
            class="mt-1 block w-full border-gray-500 bg-gray-100 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"></textarea>
          <button @click="cargarDatosHabilidadesTecnicas" type="button"
            class="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-700">
            Cargar
          </button>
        </div>

        <!-- Habilidades Blandas -->
        <div class="mb-4">
          <label for="habilidades-blandas" class="block text-sm font-medium text-gray-700">
            Lista de Habilidades Blandas:
          </label>
          <textarea id="habilidades-blandas" v-model="habilidades.blandas"
            class="mt-1 block w-full border-gray-500 bg-gray-100 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"></textarea>
          <button @click="cargarDatosHabilidadesBlandas" type="button"
            class="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-700">
            Cargar
          </button>
        </div>
      </section>

      <!-- Sección de Preferencia de Trabajo -->
      <section class="bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-2xl font-semibold mb-4 text-black">Preferencia de Trabajo</h2>
        <div class="mb-4">
          <label for="preferencia" class="block text-sm font-medium text-gray-700">Preferencia de trabajo:</label>
          <select id="preferencia" v-model="preferencia"
            class="mt-1 block w-full border-gray-500 bg-gray-100 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500">
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
          <input type="text" id="nombre" v-model="nombre"
            class="mt-1 block w-full border-gray-500 bg-gray-100 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
          <button @click="cargarDatosNombre" type="button"
            class="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-700">
            Cargar
          </button>
        </div>
      </section>

      <!-- Sección de Ubicación -->
      <section class="bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-2xl font-semibold mb-4 text-black">Ubicación</h2>
        <div class="mb-4">
          <label for="ubicacion" class="block text-sm font-medium text-gray-700">Ubicación:</label>
          <input type="text" id="ubicacion" v-model="ubicacion"
            class="mt-1 block w-full border-gray-500 bg-gray-100 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
          <button @click="cargarDatosUbicacion" type="button"
            class="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-700">
            Cargar
          </button>
        </div>
      </section>

      <!-- Sección de Certificaciones -->
      <section class="bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-2xl font-semibold mb-4 text-black">Certificaciones</h2>
        <div class="mb-4">
          <label for="certificaciones" class="block text-sm font-medium text-gray-700">Certificaciones:</label>
          <input type="text" id="certificaciones" v-model="certificaciones"
            class="mt-1 block w-full border-gray-500 bg-gray-100 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
          <button @click="cargarDatosCertificaciones" type="button"
            class="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-700">
            Cargar
          </button>
        </div>
      </section>

      <!-- Sección de Conocimientos -->
      <section class="bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-2xl font-semibold mb-4 text-black">Conocimientos</h2>
        <div class="mb-4">
          <label for="conocimientos" class="block text-sm font-medium text-gray-700">Conocimientos:</label>
          <input type="text" id="conocimientos" v-model="conocimientos"
            class="mt-1 block w-full border-gray-500 bg-gray-100 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
          <button @click="cargarDatosConocimientos" type="button"
            class="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-700">
            Cargar
          </button>
        </div>
      </section>

      <!-- Sección de Tipo de Postulante -->
      <section class="bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-2xl font-semibold mb-4 text-black">Tipo de Postulante</h2>
        <div class="mb-4">
          <label for="tipo_de_postulante" class="block text-sm font-medium text-gray-700">Tipo de Contrato:</label>
          <select id="tipo_de_postulante" v-model="tipo_de_postulante"
            class="mt-1 block w-full border-gray-500 bg-gray-100 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500">
            <option value="pasantia">Pasantía</option>
            <option value="tiempo completo">Tiempo Completo</option>
            <option value="medio tiempo">Medio Tiempo</option>
            <option value="por horas">Por Horas</option>
            <option value="contrato por tiempo determinado">Contrato por Tiempo Determinado</option>
            <option value="nocturno">Nocturno</option>
          </select>
          <button @click="cargarDatosTipoDePostulante" type="button"
            class="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-700">
            Cargar
          </button>
        </div>
      </section>

      <!-- Sección de Discapacidad -->
      <section class="bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-2xl font-semibold mb-4 text-black">Discapacidad</h2>
        <div class="mb-4">
          <input type="checkbox" id="discapacidad" v-model="discapacidad"
            class="mt-1 block border-gray-500 bg-gray-100 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
        </div>
      </section>

      <!-- send btn -->
      <button @click="sendData" type="button" :disabled="!isFormValid"
        class="bg-green-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-green-700">
        Send
      </button>

    </form>
  </div>
</template>

<script>
import axios from 'axios';

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
  },
  computed: {
    isFormValid() {
      return (
        this.nombre &&
        this.ubicacion &&
        this.educacion.nivelEstudios &&
        this.certificaciones &&
        this.conocimientos &&
        this.habilidades.tecnicas &&
        this.habilidades.blandas &&
        this.experiencia.tituloPuesto &&
        this.tipo_de_postulante &&
        this.preferencia !== ''
      );
    }
  },
  methods: {
    obtenerOpcionAleatoria(opciones, valorActual) {
      let nuevaOpcion
      do {
        nuevaOpcion = opciones[Math.floor(Math.random() * opciones.length)]
      } while (nuevaOpcion === valorActual && opciones.length > 1)
      return nuevaOpcion
    },
    cargarDatosEducacion() {
      this.educacion.nivelEstudios = this.obtenerOpcionAleatoria(
        [
          'Licenciatura en Ciencias de la Computación',
          'Ingeniería en Sistemas',
          'Maestría en Inteligencia Artificial',
          'Doctorado en Matemáticas Aplicadas'
        ],
        this.educacion.nivelEstudios
      )
    },
    cargarDatosExperiencia() {
      this.experiencia.tituloPuesto = this.obtenerOpcionAleatoria(
        [
          'Desarrollador de Software',
          'Ingeniero de Datos',
          'Administrador de Sistemas',
          'Analista de Seguridad'
        ],
        this.experiencia.tituloPuesto
      )
    },
    cargarDatosHabilidadesTecnicas() {
      this.habilidades.tecnicas = this.obtenerOpcionAleatoria(
        [
          'Programación en Python, Java, C++',
          'Desarrollo Web con HTML, CSS, JavaScript',
          'Bases de Datos SQL y NoSQL',
          'Machine Learning y Data Science'
        ],
        this.habilidades.tecnicas
      )
    },
    cargarDatosHabilidadesBlandas() {
      this.habilidades.blandas = this.obtenerOpcionAleatoria(
        ['Comunicación Efectiva', 'Trabajo en Equipo', 'Liderazgo', 'Resolución de Problemas'],
        this.habilidades.blandas
      )
    },
    cargarDatosNombre() {
      this.nombre = this.obtenerOpcionAleatoria(
        ['Juan Pérez', 'María García', 'Carlos López', 'Ana Martínez'],
        this.nombre
      )
    },
    cargarDatosUbicacion() {
      this.ubicacion = this.obtenerOpcionAleatoria(
        ['Quito', 'Guayaquil', 'Cuenca', 'Santa Elena', 'Machala'],
        this.ubicacion
      )
    },
    cargarDatosCertificaciones() {
      this.certificaciones = this.obtenerOpcionAleatoria(
        [
          'Certified Scrum Master',
          'AWS Certified Solutions Architect',
          'Cisco Certified Network Associate',
          'Microsoft Certified: Azure Fundamentals',
          'Google Cloud Professional Data Engineer'
        ],
        this.certificaciones
      )
    },
    cargarDatosConocimientos() {
      this.conocimientos = this.obtenerOpcionAleatoria(
        ['JavaScript', 'Python', 'Docker', 'Kubernetes', 'CI/CD'],
        this.conocimientos
      )
    },
    cargarDatosTipoDePostulante() {
      this.tipo_de_postulante = this.obtenerOpcionAleatoria(
        [
          'pasantia',
          'tiempo completo',
          'medio tiempo',
          'por horas',
          'contrato por tiempo determinado',
          'nocturno'
        ],
        this.tipo_de_postulante
      )
    },
    sendData() {
      const data = {
        name: this.nombre,
        education_level: this.educacion.nivelEstudios,
        job_title: this.experiencia.tituloPuesto,
        skills: `${this.habilidades.tecnicas}, ${this.habilidades.blandas}`,
        work_mode: this.preferencia,
        location: this.ubicacion,
        certifications: this.certificaciones,
        knowledge: this.conocimientos,
        work_experience: this.experiencia.tituloPuesto,
        contract_type: this.tipo_de_postulante,
        disability: this.discapacidad ? 'si' : 'no'
      }

      axios
        .post('https://api.example.com/submit', data)
        .then((response) => {
          console.log('Data sent successfully:', response.data)
        })
        .catch((error) => {
          console.error('Error sending data:', error)
        })
    }
  }
}
</script>
