<template>
  <div class="curso-main-container referencias">
    <BannerInterno
      icono="fas fa-book"
      titulo="Referencias bibliográficas"
    ></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div v-for="ref in orderedData" :key="ref.link" class="referencias__item">
        <span v-html="ref.referencia"></span
        ><a v-if="ref.link" class="ms-1" :href="ref.link" target="_blank"
          ><span v-html="ref.link"></span
          ><i class="ms-1 fas fa-external-link-alt"></i
        ></a>
        <hr class="my-3" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Referencias',
  data: () => ({
    referencias: [
      {
        referencia:
          'Andrews, J. (2019). Guía A+ para el Soporte Técnico en TI (Hardware y Software) (9ª ed.). Cengage Learning.',
      },
      {
        referencia:
          'Aranda Córdoba, J. R. (2015). Desarrollo y reutilización de componentes software y multimedia mediante lenguajes de guión. IC Editorial.',
      },
      {
        referencia:
          'Aranda Vera, Á. (2015). Instalación y parametrización del software. IC Editorial.',
      },
      {
        referencia:
          'Caicedo Rendón, A. M., Pino Correa, F. J., & Pino Anacona, A. F. (2018). ISO/IEC 29110 para procesos software en las pequeñas empresas. AENOR.',
      },
      {
        referencia:
          'Dembowski, K. (2003). El Gran Libro de Hardware. Marcombo.',
      },
      {
        referencia:
          'Díaz Coca, M. J. (2016). Desarrollo de componentes software para el manejo de dispositivos. IC Editorial.',
      },
      {
        referencia:
          'Eito Brun, R., & Sicilia Urbán, M. (2020). Gestión de innovación y procesos software: normativa y mejores prácticas. Servicio de Publicaciones, Universidad de Alcalá.',
      },
      {
        referencia:
          'García Bermúdez, J. C. (2016). Diseño de elementos software con tecnologías basadas en componentes. IC Editorial.',
      },
      {
        referencia:
          'Manovich, L. (2014). El software toma el mando. Editorial UOC.',
      },
      {
        referencia:
          'Moreno Pérez, J. C. (2015). Administración de software de un sistema informático. RA-MA Editorial.',
      },
      {
        referencia:
          'Patterson, D. A., & Hennessy, J. L. (2018). Estructura y diseño de computadores: La interfaz hardware/software (4ª ed.). Reverté.',
      },
      {
        referencia:
          'Pérez Carvajal, R. J. (2016). Mantenimiento del software. IC Editorial.',
      },
      {
        referencia:
          'Piattini Velthuis, M., & Garzás Parra, J. (2015). Fábricas de software: experiencias, tecnologías y organización. RA-MA Editorial.',
      },
      {
        referencia:
          'Piattini Velthuis, M., Vizcaíno Barceló, A., & García Rubio, F. O. (2014). Desarrollo global de software. RA-MA Editorial.',
      },
      {
        referencia:
          'Pressman, R. S. (2010). Ingeniería del software: Un enfoque práctico (7ª ed.). McGraw-Hill.',
      },
      {
        referencia:
          'Rodríguez Monje, M. J., Pino, F., & Rodríguez Monje, M. (2018). Modelo de madurez de ingeniería del software Versión 2.0 (MMIS V.2). AENOR.',
      },
      {
        referencia:
          'Rodríguez Villalobos, A. (2017). Grafos: software para la construcción, edición y análisis de grafos. Bubok Publishing S.L.',
      },
      {
        referencia:
          'Saavedra Fernández, T. (2015). Selección, instalación y configuración del software de servidor de mensajería electrónica. IC Editorial.',
      },
      {
        referencia:
          'Salazar Torres, J. A., & Ibañez Olvera, M. (2015). Simulación de una descarga eléctrica a través de software libre. Ediciones y Gráficos Eón.',
      },
      {
        referencia:
          'Silberschatz, A., Galvin, P. B., & Gagne, G. (2014). Fundamentos de sistemas operativos (9ª ed.). McGraw-Hill.',
      },
      {
        referencia:
          'Sommerville, I. (2011). Ingeniería del software (9ª ed.). Pearson Educación.',
      },
      {
        referencia:
          'Stallings, W. (2015). Organización y arquitectura de computadores (9ª ed.). Pearson Educación.',
      },
      {
        referencia:
          'Tanenbaum, A. S., & Bos, H. (2015). Sistemas operativos modernos (4ª ed.). Pearson Educación.',
      },
      {
        referencia:
          'Ullman, J. D., & Widom, J. (2013). Fundamentos de bases de datos (4ª ed.). Pearson Educación.',
      },
      {
        referencia:
          'Villada Romero, J. L. (2016). Instalación y configuración del software de servidor web. IC Editorial.',
      },
      {
        referencia:
          'Villar Cueli, J., & Huércano Ruíz, F. (2014). Implementación e integración de elementos software con tecnologías basadas en componentes. IC Editorial.',
      },
    ],
  }),
  computed: {
    orderedData() {
      return [...this.referencias].sort((a, b) => {
        const afl = this.quitarAcentos(a.referencia.split(' ')[0].toLowerCase())
        const bfl = this.quitarAcentos(b.referencia.split(' ')[0].toLowerCase())
        if (afl < bfl) return -1
        if (afl > bfl) return 1
        return 0
      })
    },
  },
  methods: {
    quitarAcentos(str) {
      return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    },
  },
}
</script>

<style lang="sass">
.referencias
  &__item
    &:last-child
      hr
        display: none
    a
      color: $blue
      text-decoration: underline
      overflow-wrap: break-word
</style>
