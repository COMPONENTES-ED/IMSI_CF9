<template>
  <div class="curso-main-container introduccion">
    <BannerInterno></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div class="titulo-principal color-acento-contenido">
        <div class="titulo-principal__numero">
          <span><i class="fas fa-info"></i></span>
        </div>
        <h1>Introducción</h1>
      </div>
      <div class="row justify-content-center mb-4">
        <div class="col-lg-9 my-lg-0 my-3">
          <div class="row justify-content-center mb-4">
            <div class="col-lg-auto j1">
              <img
                class="img-a img-t"
                src="@/assets/curso/temas/1.png"
                alt=""
              />
            </div>
            <div class="col pt-lg-0 pt-md-4">
              <p class="mb-0">
                La tecnología actual se encuentra en constante evolución, y con
                ella, la necesidad de gestionar y optimizar los equipos de
                cómputo de manera eficiente. En este componente formativo,
                «Parametrización de <i>hardware</i> y <i>software</i>»,
                exploraremos las técnicas y conocimientos para maximizar el
                rendimiento, la seguridad y la funcionalidad de los sistemas
                informáticos en entornos técnicos y profesionales. Desde la
                configuración inicial hasta la gestión avanzada de recursos,
                este módulo prepara a los estudiantes para enfrentar los retos
                tecnológicos del mundo moderno.
              </p>
            </div>
          </div>
          <div class="bg1 p-4 brad">
            <p class="mb-0">
              Uno de los aspectos más importantes en la parametrización es la
              correcta virtualización de sistemas, una tecnología que ha
              transformado la manera en que se utilizan y administran los
              recursos de <i>hardware</i>. Aprenderemos a identificar los tipos
              de virtualización, utilizar plataformas especializadas y gestionar
              recursos virtuales para asegurar que el <i>hardware</i> se use de
              manera óptima, sin desperdiciar capacidad y garantizando
              flexibilidad. Además, la comprensión de la virtualización abre
              puertas a soluciones innovadoras en el ámbito de la tecnología de
              la información.
            </p>
          </div>
        </div>
        <div class="col-lg-3 my-lg-0 my-3">
          <img class="img-a img-t" src="@/assets/curso/temas/2.png" alt="" />
        </div>
      </div>
      <div class="row justify-content-center mb-5">
        <div class="col-lg-3 my-lg-0 my-3">
          <img class="img-a img-t" src="@/assets/curso/temas/3.png" alt="" />
        </div>
        <div class="col-lg-9 my-lg-0 my-3">
          <p>
            La configuración de sistemas operativos también juega un papel
            central en la parametrización. Profundizaremos en aspectos como la
            configuración de BIOS/UEFI, los sistemas de arranque, y las técnicas
            para optimizar el rendimiento de los equipos. Estas habilidades son
            fundamentales para garantizar que los sistemas operativos funcionen
            de manera estable y segura, permitiendo que el <i>hardware</i> y el
            <i>software</i> operen en perfecta armonía y sean capaces de
            soportar las aplicaciones más demandantes.
          </p>
          <div class="bg2 p-4 brad">
            <p class="mb-0">
              Por último, la seguridad de punto final y la gestión de red serán
              pilares de este componente. Conoceremos cómo proteger los
              dispositivos contra amenazas externas mediante antivirus y
              políticas de seguridad, y cómo implementar controles de acceso que
              salvaguarden la información sensible. También aprenderemos a
              gestionar redes de manera eficiente, aplicando configuraciones
              avanzadas que optimicen el uso compartido de recursos y mejoren la
              seguridad general de la infraestructura. Este enfoque integral
              garantizará que los estudiantes desarrollen una comprensión sólida
              de las prácticas modernas en la administración de
              <i>hardware</i> y <i>software</i>.
            </p>
          </div>
        </div>
      </div>
      <p>
        ¡Bienvenido, aquí iniciarás un viaje de aprendizaje que te permitirá
        dominar las técnicas y configuraciones necesarias para optimizar el
        rendimiento y la seguridad de los sistemas informático!
      </p>
      <div class="row justify-content-center align-items-center">
        <div class="col-lg-12">
          <figure>
            <div class="video">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/lIVJg46QNlo?si=nfg32qWrWiuRI0vw"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen="allowfullscreen"
              >
              </iframe>
            </div>
          </figure>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
