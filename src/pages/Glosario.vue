<template>
  <div class="curso-main-container glosario">
    <BannerInterno icono="fas fa-atlas" titulo="Glosario"></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div
        v-for="letra in orderedData"
        :key="'letra-' + letra.letra"
        class="glosario__letra-item mb-2"
      >
        <div class="glosario__letra-item__letra me-4">
          <div class="glosario__letra-item__letra__icono">
            <span>{{ letra.letra }}</span>
          </div>
        </div>
        <div class="glosario__letra-item__texto">
          <p
            v-for="termino in letra.terminos"
            :key="termino.termino"
            class="mb-3"
          >
            <strong><i class="lista-ul__vineta"></i></strong
            ><strong v-html="termino.terminoHtml || termino.termino"> </strong
            ><strong>: </strong><span v-html="termino.significado"></span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import plantillaMixins from '@/js/plantillaMixins'
export default {
  name: 'Glosario',
  mixins: [plantillaMixins],
  data() {
    return {
      glosarioData: [
        {
          termino: 'Antivirus',
          significado:
            '<i>Software</i> diseñado para detectar, prevenir y eliminar programas maliciosos que puedan dañar el sistema o robar información.',
        },
        {
          termino: 'Aprovisionamiento fino (<i>Thin Provisioning</i>)',
          significado:
            'Técnica de gestión de almacenamiento que asigna espacio dinámicamente, evitando el desperdicio de recursos.',
        },
        {
          termino: 'Arranque dual (<i>Dual Boot</i>)',
          significado:
            'Configuración que permite tener múltiples sistemas operativos instalados en un mismo equipo y elegir cuál arrancar.',
        },
        {
          termino: 'BIOS',
          significado:
            '<i>Firmware</i> básico que inicializa el <i>hardware</i> del sistema y carga el sistema operativo al encender el equipo.',
        },
        {
          termino: 'Control de acceso',
          significado:
            'Medidas y mecanismos que limitan quién puede acceder a ciertos datos o recursos dentro de un sistema.',
        },
        {
          termino: 'Directorio Activo (<i>Active Directory</i>)',
          significado:
            'Servicio de Microsoft que centraliza la administración de usuarios, equipos y recursos en una red basada en Windows.',
        },
        {
          termino: '<i>Firewall</i>',
          significado:
            'Sistema de seguridad que controla el tráfico de red, permitiendo o bloqueando conexiones según reglas definidas.',
        },
        {
          termino: 'Gestión de red',
          significado:
            'Proceso de administrar y optimizar la conectividad y el acceso a recursos en una red informática.',
        },
        {
          termino: 'Gestor de arranque',
          significado:
            'Programa que permite seleccionar qué sistema operativo iniciar en equipos con arranque dual.',
        },
        {
          termino: 'Memoria virtual',
          significado:
            'Espacio en el disco duro que actúa como un complemento de la memoria RAM, utilizado cuando la RAM está llena.',
        },
        {
          termino: 'Políticas de Grupo (<i>Group Policy</i>)',
          significado:
            'Configuraciones de Windows que permiten a los administradores gestionar y controlar el entorno de trabajo de los usuarios y equipos.',
        },
        {
          termino: 'Protección web',
          significado:
            'Característica de los antivirus que bloquea el acceso a sitios web maliciosos para proteger la seguridad del usuario.',
        },
        {
          termino: 'Recursos compartidos',
          significado:
            'Archivos, carpetas, impresoras o dispositivos accesibles para varios usuarios en una red.',
        },
        {
          termino: '<i>Secure Boot</i>',
          significado:
            'Función de seguridad de UEFI que verifica la autenticidad del software de arranque para prevenir la carga de <i>malware<i>.',
        },
        {
          termino: 'Segmentación de red',
          significado:
            'División de una red en segmentos más pequeños y seguros para mejorar la gestión y proteger el tráfico de datos.',
        },
        {
          termino: 'UEFI',
          significado:
            'Interfaz de <i>firmware</i> moderna que reemplaza al BIOS, proporcionando una interfaz gráfica y mayor seguridad.',
        },
        {
          termino: 'VirtualBox',
          significado:
            '<i>Software</i> de virtualización de código abierto que permite ejecutar múltiples sistemas operativos en un solo equipo.',
        },
        {
          termino: 'Virtualización',
          significado:
            'Tecnología que permite ejecutar múltiples sistemas operativos o aplicaciones en un solo servidor físico mediante máquinas virtuales.',
        },
        {
          termino: 'VLAN (<i>Virtual Local Area Network</i>)',
          significado:
            'Tecnología que crea redes separadas dentro de una misma infraestructura física, mejorando la seguridad y eficiencia del tráfico.',
        },
      ],
    }
  },
  computed: {
    orderedData() {
      const newGlosarioData = [...this.glosarioData]
      newGlosarioData.forEach(element => {
        element.significado =
          element.significado.charAt(0).toLowerCase() +
          element.significado.slice(1)
      })

      const sortedData = [...newGlosarioData].reduce((r, e) => {
        const letra = this.quitarAcentos(e.termino.toLowerCase())[0]
        if (!r[letra]) r[letra] = { letra, terminos: [e] }
        else r[letra].terminos.push(e)
        return r
      }, {})

      const soloLetras = Object.keys(sortedData).sort()
      const newSortedData = []

      soloLetras.forEach(element => {
        const letraObj = sortedData[element]
        let terminos = letraObj.terminos

        if (terminos.length > 1) {
          const terminosOrdenados = []
          const soloTerminos = letraObj.terminos
            .map(termObj => termObj.termino)
            .sort((a, b) => {
              const an = this.quitarAcentos(a).toLowerCase()
              const bn = this.quitarAcentos(b).toLowerCase()
              if (an < bn) return -1
              if (bn < an) return 1
              return 0
            })
          soloTerminos.forEach(term => {
            terminosOrdenados.push(
              terminos.find(termino => termino.termino === term),
            )
          })
          terminos = terminosOrdenados
        }
        newSortedData.push({
          letra: letraObj.letra.toUpperCase(),
          terminos: terminos,
        })
      })
      return newSortedData
    },
  },
}
</script>

<style lang="sass">
.glosario
  &__letra-item
    display: flex
    &__texto
      padding-top: 5px
    &__letra
      &__icono
        width: 32px
        height: 32px
        position: relative
        line-height: 1em
        border-radius: 50%
        background-color: $color-sistema-d

        span
          position: absolute
          left: 50%
          top: 50%
          transform: translate(-50%,-50%)
          font-size: 1.1em
          font-weight: $base-black-font-weight
</style>
