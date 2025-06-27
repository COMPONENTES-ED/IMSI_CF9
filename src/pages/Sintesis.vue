<template>
  <div class="curso-main-container pb-3">
    <BannerInterno icono="fas fa-sitemap" titulo="Síntesis"></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5">
      <p>
        Este componente abarca los principios y técnicas necesarias para la
        parametrización de <i>hardware</i> y <i>software</i>, proporcionando un
        enfoque integral desde la virtualización hasta la gestión de la
        seguridad. Se inicia con una exploración de los distintos tipos de
        virtualización y las plataformas que permiten maximizar la eficiencia de
        los recursos de <i>hardware</i>, destacando las tecnologías que
        optimizan el uso compartido y la administración de recursos.
      </p>
      <p>
        Se profundiza en la configuración de sistemas operativos, abordando
        configuraciones avanzadas de BIOS/UEFI y los sistemas de arranque, junto
        con técnicas de optimización que aseguran un funcionamiento estable y
        eficiente de los equipos. Se enfatiza cómo estas configuraciones
        impactan directamente el rendimiento general y la estabilidad de los
        sistemas informáticos.
      </p>
      <p>
        El componente también aborda la seguridad de punto final, presentando
        estrategias para proteger los dispositivos mediante antivirus y
        antimalware, y detallando la implementación de políticas de seguridad
        efectivas y controles de acceso robustos. Estas medidas deben tenerse en
        cuenta para mantener la integridad de los datos y proteger los equipos
        de amenazas externas.
      </p>
      <p class="mb-5">
        Finalmente, se examina la gestión de redes, que incluye la
        administración de directorios activos, la compartición eficiente de
        recursos, y la aplicación de políticas de grupo. Estas prácticas
        aseguran una infraestructura de red organizada y segura, facilitando
        tanto la colaboración como la protección de la información sensible en
        diversos entornos tecnológicos.
      </p>
      <div class="row justify-content-center">
        <div class="col-lg-10 mb-5">
          <figure><img src="@/assets/curso/sintesisC9.svg" alt="alt" /></figure>
        </div>
        <div class="col-auto">
          <a
            class="anexo mb-5"
            :href="obtenerLink('/downloads/SintesisC9.pdf')"
            target="_blank"
          >
            <div class="anexo__icono">
              <img src="@/assets/bullets/icono-pdf.svg" />
            </div>
            <div class="anexo__texto">
              <p>Anexo. Síntesis</p>
            </div></a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
