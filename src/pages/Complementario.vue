<template>
  <div class="curso-main-container complementario">
    <BannerInterno
      icono="far fa-folder-open"
      titulo="Material complementario"
    ></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div class="table-responsive">
        <table>
          <thead>
            <tr>
              <th colspan="3" scope="col">Tema</th>
              <th colspan="5" scope="col">Referencia APA del material</th>
              <th colspan="2" scope="col">Tipo</th>
              <th colspan="2" scope="col">Enlace</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(item, index) in computedData"
              :key="'complementario-' + index"
            >
              <td
                class="text-start"
                colspan="3"
                scope="row"
                v-html="item.tema"
              ></td>
              <td
                class="text-start"
                colspan="5"
                scope="row"
                v-html="item.referencia"
              ></td>
              <td colspan="2" v-html="item.tipo"></td>
              <td colspan="2">
                <div class="complementario__enlaces">
                  <a
                    v-for="(link, linkIndex) of item.link"
                    :key="linkIndex"
                    class="complementario__btn"
                    :href="link"
                    target="_blank"
                    ><i class="fas fa-external-link-alt"></i
                  ></a>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MaterialComplementario',
  computed: {
    complementarioData() {
      return [
        {
          tema: '1. Virtualización de sistemas',
          referencia:
            'Ecosistema de Recursos Educativos Digitales SENA. (2023c, octubre 17). <i>Virtualización CPU</i>.',
          tipo: 'Video',
          link: 'https://www.youtube.com/watch?v=lGLzCzgrcF8',
        },
        {
          tema: '1. Virtualización de sistemas',
          referencia:
            'Ecosistema de Recursos Educativos Digitales SENA. (2023a, marzo 23). <i>Los sistemas operativos por su estructura: Visión interna</i>.',
          tipo: 'Video',
          link: 'https://www.youtube.com/watch?v=RjuFT03PSyw',
        },
        {
          tema: '2. Configuración de sistemas operativos',
          referencia:
            'Ecosistema de Recursos Educativos Digitales SENA. (2023, octubre 24).<i> Gestión de equipos informáticos</i>',
          tipo: 'Video',
          link: 'https://www.youtube.com/watch?v=dJ0rNne1xuY.',
        },
        {
          tema: '2. Configuración de sistemas operativos',
          referencia:
            'Ecosistema de Recursos Educativos Digitales SENA. (2023c, octubre 18). <i>Características de los sistemas operativos</i>.',
          tipo: 'Video',
          link: 'https://www.youtube.com/watch?v=TGYx-geVl8E',
        },
        {
          tema: '3. Seguridad de punto final',
          referencia:
            'Ecosistema de Recursos Educativos Digitales SENA. (2021, 2 octubre). <i>Herramientas y estrategias de protección: antivirus gratuitos</i>.',
          tipo: 'Video',
          link: 'https://www.youtube.com/watch?v=jqL1RwFft-0',
        },
        {
          tema: '3. Seguridad de punto final',
          referencia:
            'Ecosistema de Recursos Educativos Digitales SENA. (2024, 3 abril). <i>Seguridad perimetral</i>.',
          tipo: 'Video',
          link: 'https://www.youtube.com/watch?v=l5_sSIAD8Wo',
        },
        {
          tema: '4. Gestión de red',
          referencia:
            'Ecosistema de Recursos Educativos Digitales SENA. (2023b, abril 17). <i>Sistemas operativos en red</i>.',
          tipo: 'Video',
          link: 'https://www.youtube.com/watch?v=oy1cr57wi5M',
        },
      ]
    },
    computedData() {
      const data = this.complementarioData
      return data.map(item => {
        let nuevoLink = []
        if (item.link) {
          if (typeof item.link === 'string') {
            nuevoLink.push(item.link)
          } else {
            nuevoLink = item.link
          }
        } else if (item.descarga) {
          if (typeof item.descarga === 'string') {
            nuevoLink.push(this.obtenerLink(item.descarga))
          } else {
            item.descarga.forEach(link => {
              nuevoLink.push(this.obtenerLink(link))
            })
          }
        }
        return {
          ...item,
          link: nuevoLink,
        }
      })
    },
  },
}
</script>

<style lang="sass">
.complementario
  &__enlaces
    display: flex
    justify-content: center
    flex-wrap: wrap
    a
      margin: 0 5px
  &__btn
    font-size: 1.5em
    line-height: 1em
table
  width: calc(100% - 1px)
  min-width: 800px
  thead
    background-color: $color-sistema-e
    th
      border-color: $color-sistema-e
  th, td
    padding: 25px 20px
    text-align: center
</style>
