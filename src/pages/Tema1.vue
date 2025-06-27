<template>
  <div class="curso-main-container pb-3">
    <BannerInterno></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div class="titulo-principal color-acento-contenido">
        <div class="titulo-principal__numero"><span>1</span></div>
        <h1>Virtualización de sistemas</h1>
      </div>
      <div class="row justify-content-center mb-5">
        <div class="col-lg-auto j1">
          <img class="img-a img-t" src="@/assets/curso/temas/4.png" alt="" />
        </div>
        <div class="col pt-lg-0 pt-md-4">
          <div class="bg2 p-4 brad">
            <p class="mb-0">
              La virtualización de sistemas ha transformado el uso de los
              recursos de <i>hardware</i>, permitiendo a las organizaciones y
              usuarios gestionar múltiples entornos de manera eficiente y
              flexible. Este capítulo explorará en profundidad los tipos de
              virtualización, las plataformas disponibles, y las mejores
              prácticas para la gestión de recursos virtuales.
            </p>
          </div>
        </div>
      </div>
      <div class="row justify-content-center mb-4">
        <div class="col-lg-10">
          <div class="titulo-sexto color-acento-botones">
            <h5>Figura 1.</h5>
            <span>Virtualización de sistemas y su gestión</span>
          </div>
          <div class="bgfig p-5 brad mb-2">
            <img
              class="img-a img-t"
              src="@/assets/curso/temas/5.svg"
              alt="La Figura 1 se denomina «Virtualización de sistemas y su gestión» y presenta un resumen detallado de los principales conceptos relacionados con la virtualización de sistemas, incluyendo los tipos de virtualización, las plataformas utilizadas y las mejores prácticas para la gestión de recursos."
            />
          </div>
          <figcaption>Fuente: OIT, 2024.</figcaption>
        </div>
      </div>
      <Separador> </Separador>
      <div id="t_1_1" class="titulo-segundo color-acento-contenido">
        <h2>1.1 Tipos de virtualización</h2>
      </div>
      <p class="mb-5">
        La virtualización abarca varias categorías, y cada una se aplica a
        diferentes contextos y necesidades tecnológicas:
      </p>
      <TabsC class="color-acento-contenido mb-5">
        <div
          class="py-3 py-md-4 bg11"
          titulo="Virtualización de &lt;i&gt;hardware&lt;/i&gt;"
        >
          <div class="row justify-content-center py-4">
            <div class="col-lg-4 my-lg-0 my-3">
              <img
                class="img-a img-t"
                src="@/assets/curso/temas/5.png"
                alt=""
              />
            </div>
            <div class="col-lg-7 my-lg-0 my-3">
              <h5>Virtualización de <i>hardware</i>:</h5>
              <p class="mb-0">
                Este tipo permite la creación de múltiples máquinas virtuales
                que operan como sistemas independientes en un solo servidor
                físico. Cada máquina virtual tiene su propio sistema operativo,
                lo que facilita la consolidación de servidores y reduce costos
                operativos. Las organizaciones suelen usar esta virtualización
                para optimizar el uso de recursos físicos, facilitar el
                mantenimiento y mejorar la disponibilidad de los servicios.
              </p>
            </div>
          </div>
        </div>
        <div class="py-3 py-md-4 bg11" titulo="Virtualización de aplicaciones">
          <div class="row justify-content-center py-4">
            <div class="col-lg-4 my-lg-0 my-3">
              <img
                class="img-a img-t"
                src="@/assets/curso/temas/6.png"
                alt=""
              />
            </div>
            <div class="col-lg-7 my-lg-0 my-3">
              <h5>Virtualización de aplicaciones:</h5>
              <p class="mb-0">
                Aquí, las aplicaciones se ejecutan en entornos aislados,
                eliminando conflictos con el sistema operativo o con otras
                aplicaciones instaladas. Esto es útil en entornos corporativos
                donde se requiere que diferentes versiones del
                <i>software</i> funcionen sin interferencias. Ejemplos de esta
                tecnología incluyen herramientas como
                <i>Microsoft App-V o VMware ThinApp.</i>
              </p>
            </div>
          </div>
        </div>
        <div class="py-3 py-md-4 bg11" titulo="Virtualización de red">
          <div class="row justify-content-center py-4">
            <div class="col-lg-4 my-lg-0 my-3">
              <img
                class="img-a img-t"
                src="@/assets/curso/temas/7.png"
                alt=""
              />
            </div>
            <div class="col-lg-7 my-lg-0 my-3">
              <h5>Virtualización de red:</h5>
              <p class="mb-0">
                Esta categoría divide una red física en múltiples redes
                virtuales, o agrupa múltiples redes físicas en una sola red
                virtualizada. Con este enfoque, se puede gestionar el tráfico de
                red de manera más eficiente, mejorando la seguridad y la
                flexibilidad. Ejemplos incluyen la creación de VLANs y el uso de
                SDN (<i>Software-Defined Networking</i>) para gestionar redes de
                manera dinámica.
              </p>
            </div>
          </div>
        </div>
        <div
          class="py-3 py-md-4 bg11"
          titulo="Virtualización de almacenamiento"
        >
          <div class="row justify-content-center py-4">
            <div class="col-lg-4 my-lg-0 my-3">
              <img
                class="img-a img-t"
                src="@/assets/curso/temas/8.png"
                alt=""
              />
            </div>
            <div class="col-lg-7 my-lg-0 my-3">
              <h5>Virtualización de almacenamiento:</h5>
              <p class="mb-0">
                Aquí, el almacenamiento físico se combina y se presenta como un
                único recurso gestionado. Esto simplifica la administración y
                permite la asignación dinámica del espacio según las
                necesidades. Las soluciones de virtualización de almacenamiento
                son comunes en grandes centros de datos y entornos corporativos
                que requieren un acceso flexible a grandes volúmenes de datos.
              </p>
            </div>
          </div>
        </div>
      </TabsC>
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <div class="row justify-content-center bg1 p-4 brad mb-5">
            <div class="col-lg-auto j1">
              <img
                class="img-a img-t"
                src="@/assets/curso/temas/9.png"
                alt=""
              />
            </div>
            <div class="col pt-lg-0 pt-md-4">
              <p class="mb-0">
                Cada tipo de virtualización tiene ventajas y desafíos
                específicos, y su implementación debe ser cuidadosamente
                planificada para maximizar los beneficios y minimizar los
                posibles problemas.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Separador> </Separador>
      <div id="t_1_2" class="titulo-segundo color-acento-contenido">
        <h2>1.2 Plataformas virtuales</h2>
      </div>
      <p class="mb-5">
        Las plataformas virtuales permiten implementar soluciones de
        virtualización con distintas capacidades y características. A
        continuación, se describen algunas de las más reconocidas:
      </p>
      <div class="row bg4 align-items-center mb-5">
        <div class="px-lg-5 px-4">
          <div class="row justify-content-center">
            <div class="col-lg-8 my-lg-0 my-3">
              <AccordionRED tipo="a" clase-tarjeta="tarjeta bg7">
                <div titulo="VMware ">
                  <p>
                    Una de las plataformas líderes en el sector de la
                    virtualización. Ofrece soluciones como VMware Workstation,
                    <i>VMware ESXi y vSphere</i>, que permiten gestionar
                    entornos de servidores complejos. <i>VMware</i> es muy
                    valorada por su capacidad de recuperación ante desastres y
                    las funcionalidades avanzadas de administración.
                  </p>
                </div>
                <div titulo="Microsoft &lt;i&gt;Hyper-V&lt;/i&gt; ">
                  <p>
                    Esta plataforma, incluida en los sistemas operativos Windows
                    Server, permite virtualizar tanto servidores como
                    escritorios. <i>Hyper-V</i> es conocida por su integración
                    con otros servicios de Microsoft, facilitando la gestión y
                    seguridad en redes corporativas.
                  </p>
                </div>
                <div titulo="&lt;i&gt;VirtualBox&lt;/i&gt; ">
                  <p>
                    Desarrollado por <i>Oracle, VirtualBox</i> es una
                    herramienta de código abierto que soporta múltiples sistemas
                    operativos en un entorno virtualizado. Es ampliamente
                    utilizada por desarrolladores y estudiantes para realizar
                    pruebas y ejecutar entornos de desarrollo.
                  </p>
                </div>
                <div
                  titulo="KVM (&lt;i&gt;Kernel-based Virtual Machine&lt;/i&gt;) "
                >
                  <p>
                    Una solución de virtualización de código abierto que
                    convierte el <i>kernel</i> de Linux en un hipervisor. KVM es
                    ideal para entornos empresariales que requieren estabilidad
                    y eficiencia, y es compatible con muchas distribuciones de
                    Linux.
                  </p>
                </div>
                <div titulo="Proxmox VE ">
                  <p>
                    Una plataforma de virtualización de código abierto que
                    permite la gestión de máquinas virtuales y contenedores. Es
                    conocida por su interfaz web intuitiva y sus funciones de
                    alta disponibilidad, respaldo y replicación.
                  </p>
                </div>
              </AccordionRED>
            </div>
            <div class="col-lg-4 my-lg-0 my-3">
              <img
                class="img-a img-t"
                src="@/assets/curso/temas/11.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <div class="row justify-content-center bg1 p-4 brad mb-5">
            <div class="col-lg-auto j1">
              <img
                class="img-a img-t"
                src="@/assets/curso/temas/9.png"
                alt=""
              />
            </div>
            <div class="col pt-lg-0 pt-md-4">
              <p class="mb-0">
                Estas plataformas se eligen según las necesidades de
                rendimiento, presupuesto y compatibilidad del entorno en el que
                se van a utilizar.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Separador> </Separador>
      <div id="t_1_3" class="titulo-segundo color-acento-contenido">
        <h2>1.3 Gestión de recursos virtuales</h2>
      </div>
      <p class="mb-5">
        Una gestión adecuada de los recursos virtuales es necesaria para
        mantener el rendimiento y la estabilidad de los sistemas virtualizados.
        Aquí se explican las principales estrategias y herramientas:
      </p>
      <div class="row bg4 align-items-center">
        <div class="px-lg-5 px-4">
          <div class="row justify-content-center">
            <div class="col-lg-3 my-lg-0 my-3">
              <img
                class="img-a img-t"
                src="@/assets/curso/temas/12.png"
                alt=""
              />
            </div>
            <div class="col-lg-9 my-lg-0 my-3">
              <AccordionRED tipo="a" clase-tarjeta="tarjeta bg7">
                <div titulo="Asignación de CPU y memoria ">
                  <p>
                    Una de las tareas críticas en la gestión de entornos
                    virtuales es asignar los recursos de CPU y memoria de manera
                    eficiente. Esto implica distribuir los recursos físicos del
                    servidor según las demandas de cada máquina virtual,
                    evitando la sobreasignación, que puede degradar el
                    rendimiento del sistema.
                  </p>
                </div>
                <div titulo="Monitoreo de rendimiento">
                  <p>
                    Las herramientas de monitoreo permiten analizar en tiempo
                    real el uso de recursos, identificar cuellos de botella y
                    tomar decisiones informadas para ajustar las
                    configuraciones. Las métricas incluyen el uso de la CPU,
                    memoria, almacenamiento y la latencia de la red.
                  </p>
                </div>
                <div titulo="Gestión de almacenamiento">
                  <p>
                    En un entorno virtual, el almacenamiento es un recurso
                    compartido que debe administrarse cuidadosamente. Se pueden
                    usar tecnologías como el aprovisionamiento fino (thin
                    provisioning) para asignar espacio de manera dinámica según
                    sea necesario, evitando el desperdicio de recursos y
                    mejorando la eficiencia del almacenamiento.
                  </p>
                </div>
                <div titulo="Optimización del tráfico de red">
                  <p>
                    Configurar las redes virtuales para minimizar la latencia y
                    el congestionamiento es fundamental. Esto se logra mediante
                    la segmentación de redes, el uso de conmutadores virtuales y
                    la priorización del tráfico basado en las necesidades de
                    cada máquina virtual.
                  </p>
                </div>
                <div titulo="Planificación de recursos">
                  <p>
                    Anticipar el crecimiento y las futuras necesidades de los
                    recursos es vital para garantizar que el entorno
                    virtualizado pueda escalar sin problemas. Esto incluye
                    prever actualizaciones de <i>hardware</i> y ajustar las
                    configuraciones según el uso proyectado.
                  </p>
                </div>
              </AccordionRED>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tema1',
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
