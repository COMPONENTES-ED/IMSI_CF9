<template>
  <div class="curso-main-container pb-3">
    <BannerInterno></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div class="titulo-principal color-acento-contenido">
        <div class="titulo-principal__numero"><span>4</span></div>
        <h1>Gestión de red</h1>
      </div>
      <div class="row justify-content-center mb-5">
        <div class="col-lg-auto j1">
          <img class="img-a img-t" src="@/assets/curso/temas/35.png" alt="" />
        </div>
        <div class="col pt-lg-0 pt-md-4">
          <div class="bg2 p-4 brad">
            <p class="mb-0">
              La gestión de red es un aspecto central en cualquier entorno
              informático, ya que permite configurar, mantener y asegurar la
              conectividad y el acceso a recursos compartidos de manera
              eficiente. En esta sección, se abordarán conceptos y prácticas
              relacionados con la gestión de directorios, recursos compartidos y
              políticas de grupo.
            </p>
          </div>
        </div>
      </div>
      <Separador> </Separador>
      <div id="t_4_1" class="titulo-segundo color-acento-contenido">
        <h2>4.1 Directorio activo y dominios</h2>
      </div>
      <p class="mb-5">
        El <b>Directorio Activo (<i>Active Directory)</i></b> es un servicio
        desarrollado por Microsoft que facilita la administración centralizada
        de usuarios, equipos y recursos en una red basada en Windows. Es
        utilizado principalmente en entornos corporativos para gestionar
        permisos y políticas de seguridad de manera eficiente.
      </p>
      <div class="row bg4 align-items-center mb-5">
        <div class="px-lg-5 px-4">
          <div class="row justify-content-center">
            <div class="col-lg-9 my-lg-0 my-3">
              <AccordionRED tipo="a" clase-tarjeta="tarjeta bg7">
                <div titulo="Conceptos">
                  <ul class="lista-ul fa-ul">
                    <li>
                      <i class="fas fa-check color1"></i
                      ><span
                        ><b>Dominio:</b> Un dominio es un conjunto de usuarios,
                        grupos y dispositivos que comparten una base de datos de
                        Directorio Activo. Permite a los administradores
                        gestionar de manera centralizada las cuentas y recursos
                        de la red.</span
                      >
                    </li>
                    <li>
                      <i class="fas fa-check color1"></i
                      ><span
                        ><b>Controlador de dominio:</b> Es el servidor que
                        ejecuta el Directorio Activo y se encarga de autenticar
                        a los usuarios y gestionar las políticas de seguridad.
                        Se asegura de que solo los usuarios autorizados puedan
                        acceder a los recursos de la red.
                      </span>
                    </li>
                  </ul>
                </div>
                <div titulo="Funciones del Directorio Activo">
                  <ul class="lista-ul fa-ul">
                    <li>
                      <i class="fas fa-check color1"></i
                      ><span
                        ><b>Gestión de usuarios y grupos:</b> Permite crear,
                        modificar y eliminar cuentas de usuario, y organizar a
                        los usuarios en grupos para asignar permisos de manera
                        más eficiente.</span
                      >
                    </li>
                    <li>
                      <i class="fas fa-check color1"></i
                      ><span
                        ><b>Autenticación:</b> Valida las credenciales de los
                        usuarios cuando intentan acceder a recursos de la red,
                        proporcionando un alto nivel de seguridad.</span
                      >
                    </li>
                    <li>
                      <i class="fas fa-check color1"></i
                      ><span
                        ><b>Políticas de seguridad:</b> Los administradores
                        pueden configurar políticas de grupo que aplican
                        configuraciones de seguridad y de sistema a los usuarios
                        y equipos en el dominio.
                      </span>
                    </li>
                  </ul>
                </div>
                <div titulo="Ventajas de usar el directorio activo">
                  <ul class="lista-ul fa-ul">
                    <li>
                      <i class="fas fa-check color1"></i
                      ><span
                        ><b>Centralización:</b> Simplifica la gestión de la red
                        al permitir a los administradores controlar todo desde
                        un único punto.</span
                      >
                    </li>
                    <li>
                      <i class="fas fa-check color1"></i
                      ><span
                        ><b>Escalabilidad:</b> Se adapta a redes de cualquier
                        tamaño, desde pequeñas oficinas hasta grandes
                        organizaciones con miles de dispositivos.
                      </span>
                    </li>
                    <li>
                      <i class="fas fa-check color1"></i
                      ><span
                        ><b>Seguridad:</b> Ofrece una estructura robusta para
                        proteger los datos y recursos de la red mediante
                        autenticación y políticas de acceso.</span
                      >
                    </li>
                  </ul>
                </div>
              </AccordionRED>
            </div>
            <div class="col-lg-3 my-lg-0 my-3">
              <img
                class="img-a img-t"
                src="@/assets/curso/temas/36.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <Separador> </Separador>
      <div id="t_4_2" class="titulo-segundo color-acento-contenido">
        <h2>4.2 Recursos compartidos</h2>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <div class="bloque-texto-g color-secundario p-3 p-sm-4 p-md-5 mb-5">
            <div
              class="bloque-texto-g__img"
              :style="{
                'background-image': `url(${require('@/assets/curso/temas/37.png')})`,
              }"
            ></div>
            <div class="bloque-texto-g__texto p-4">
              <p class="mb-0">
                Compartir recursos en una red permite a los usuarios acceder de
                manera eficiente a archivos, impresoras y otros dispositivos.
                Una correcta configuración de estos recursos es fundamental para
                optimizar la colaboración y el uso de los dispositivos.
              </p>
            </div>
          </div>
        </div>
      </div>
      <TabsC class="color-acento-contenido mb-5">
        <div class="py-3 py-md-4 bg11" titulo="Tipos de recursos compartidos">
          <div class="row justify-content-center py-4">
            <div class="col-lg-4 my-lg-0 my-3">
              <img
                class="img-a img-t"
                src="@/assets/curso/temas/38.png"
                alt=""
              />
            </div>
            <div class="col-lg-7 my-lg-0 my-3">
              <h5>Tipos de recursos compartidos</h5>
              <ul class="lista-ul fa-ul">
                <li>
                  <i class="fas fa-check color1"></i
                  ><span
                    ><b>Archivos y carpetas:</b> Los archivos y carpetas pueden
                    compartirse en la red, permitiendo a los usuarios colaborar
                    y trabajar en documentos de forma simultánea. Los
                    administradores pueden asignar permisos de lectura,
                    escritura o edición para controlar el acceso.</span
                  >
                </li>
                <li>
                  <i class="fas fa-check color1"></i
                  ><span
                    ><b>Impresoras:</b> Las impresoras compartidas son
                    accesibles desde cualquier dispositivo en la red,
                    facilitando su uso por parte de varios usuarios sin la
                    necesidad de conexiones directas.</span
                  >
                </li>
                <li>
                  <i class="fas fa-check color1"></i
                  ><span
                    ><b>Unidades de red:</b> Una unidad de red es un espacio de
                    almacenamiento asignado a un usuario o grupo, accesible
                    desde cualquier equipo en la red. Es útil para almacenar
                    documentos y datos importantes de manera centralizada.</span
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="py-3 py-md-4 bg11" titulo="Configuración y permisos">
          <div class="row justify-content-center py-4">
            <div class="col-lg-4 my-lg-0 my-3">
              <img
                class="img-a img-t"
                src="@/assets/curso/temas/39.png"
                alt=""
              />
            </div>
            <div class="col-lg-7 my-lg-0 my-3">
              <h5>Configuración y permisos</h5>
              <ul class="lista-ul fa-ul">
                <li>
                  <i class="fas fa-check color1"></i
                  ><span
                    ><b>Permisos de acceso:</b> Los administradores pueden
                    configurar diferentes niveles de permisos, como acceso solo
                    de lectura o permisos completos para modificar y eliminar
                    archivos.</span
                  >
                </li>
                <li>
                  <i class="fas fa-check color1"></i
                  ><span
                    ><b>Seguridad de los recursos:</b> Es importante proteger
                    los recursos compartidos mediante autenticación y control de
                    acceso, asegurándose de que solo las personas autorizadas
                    puedan utilizarlos.</span
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="py-3 py-md-4 bg11" titulo="Buenas prácticas">
          <div class="row justify-content-center py-4">
            <div class="col-lg-4 my-lg-0 my-3">
              <img
                class="img-a img-t"
                src="@/assets/curso/temas/40.png"
                alt=""
              />
            </div>
            <div class="col-lg-7 my-lg-0 my-3">
              <h5>Buenas prácticas</h5>
              <ul class="lista-ul fa-ul">
                <li>
                  <i class="fas fa-check color1"></i
                  ><span
                    ><b>Organización de carpetas:</b> Mantener una estructura de
                    carpetas bien organizada ayuda a los usuarios a encontrar y
                    gestionar archivos de manera eficiente.</span
                  >
                </li>
                <li>
                  <i class="fas fa-check color1"></i
                  ><span
                    ><b>Monitoreo y auditoría:</b> Utilizar herramientas para
                    monitorear el uso de los recursos compartidos y realizar
                    auditorías de seguridad periódicas.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </TabsC>
      <Separador> </Separador>
      <div id="t_4_3" class="titulo-segundo color-acento-contenido">
        <h2>4.3 Políticas de grupo</h2>
      </div>
      <p class="mb-5">
        Las Políticas de Grupo (Group Policy) son una característica de Windows
        que permite a los administradores controlar de manera centralizada las
        configuraciones y restricciones de los equipos y usuarios en un dominio.
      </p>
      <div class="row bg4 align-items-center mb-5">
        <div class="px-lg-5 px-4">
          <div class="row justify-content-center">
            <div class="col-lg-8 my-lg-0 my-3">
              <AccordionRED tipo="a" clase-tarjeta="tarjeta bg7">
                <div titulo="Funciones de las políticas de grupo">
                  <ul class="lista-ul fa-ul">
                    <li>
                      <i class="fas fa-check color1"></i
                      ><span
                        ><b>Configuración de seguridad:</b> Los administradores
                        pueden aplicar políticas para exigir contraseñas
                        seguras, bloquear dispositivos externos como unidades
                        USB, y definir restricciones de acceso.</span
                      >
                    </li>
                    <li>
                      <i class="fas fa-check color1"></i
                      ><span
                        ><b>Configuración de escritorio:</b> Se pueden
                        establecer configuraciones específicas, como la
                        apariencia del escritorio, programas predeterminados y
                        restricciones en el menú de inicio.</span
                      >
                    </li>
                    <li>
                      <i class="fas fa-check color1"></i
                      ><span
                        ><b>Automatización de tareas:</b> Las políticas de grupo
                        permiten automatizar tareas comunes, como la instalación
                        de <i>software</i> o la actualización de configuraciones
                        de red.</span
                      >
                    </li>
                  </ul>
                </div>
                <div titulo="Ejemplos de uso">
                  <ul class="lista-ul fa-ul">
                    <li>
                      <i class="fas fa-check color1"></i
                      ><span
                        ><b>Restringir el acceso a aplicaciones:</b> Se pueden
                        bloquear aplicaciones no autorizadas para proteger los
                        equipos de <i>software</i> malicioso o no deseado.</span
                      >
                    </li>
                    <li>
                      <i class="fas fa-check color1"></i
                      ><span
                        ><b>Configuración de red:</b> Aplicar configuraciones de
                        red predefinidas a todos los dispositivos, como la
                        asignación de servidores DNS o la configuración de
                        proxy.</span
                      >
                    </li>
                    <li>
                      <i class="fas fa-check color1"></i
                      ><span
                        ><b>Bloqueo de dispositivos:</b> Restringir el uso de
                        dispositivos externos para proteger la red de posibles
                        infecciones de <i>malware</i>.</span
                      >
                    </li>
                  </ul>
                </div>
                <div titulo="Administración de políticas de grupo">
                  <ul class="lista-ul fa-ul">
                    <li>
                      <i class="fas fa-check color1"></i
                      ><span
                        ><b>Consola de gestión:</b> La consola de gestión de
                        políticas de grupo permite crear y aplicar políticas de
                        manera centralizada. Las políticas pueden aplicarse a
                        toda la organización o a grupos específicos según las
                        necesidades.</span
                      >
                    </li>
                    <li>
                      <i class="fas fa-check color1"></i
                      ><span
                        ><b>Actualización de políticas:</b> Las políticas de
                        grupo se aplican automáticamente al iniciar sesión o
                        mediante comandos de actualización, garantizando que
                        todos los dispositivos cumplan con las configuraciones
                        establecidas.
                      </span>
                    </li>
                  </ul>
                </div>
              </AccordionRED>
            </div>
            <div class="col-lg-4 my-lg-0 my-3">
              <img
                class="img-a img-t"
                src="@/assets/curso/temas/41.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <div class="titulo-sexto color-acento-botones">
            <h5>Tabla 2.</h5>
            <span
              >Ejemplos de configuraciones de políticas de grupo y su
              impacto</span
            >
          </div>
          <div class="tabla-a color-acento-botones text-center mb-5">
            <table>
              <caption>
                Fuente: OIT, 2024.
              </caption>
              <thead>
                <tr>
                  <th>Configuración de política</th>
                  <th>Descripción</th>
                  <th>Impacto en la red</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="fst-bold bgt1">
                    Contraseñas seguras obligatorias.
                  </td>
                  <td>
                    Exige que las contraseñas tengan una longitud mínima,
                    combinando letras, números y símbolos.
                  </td>
                  <td>
                    Mejora la seguridad al dificultar los intentos de acceso no
                    autorizado.
                  </td>
                </tr>
                <tr>
                  <td class="fst-bold bgt1">Bloqueo de dispositivos USB.</td>
                  <td>
                    Restringe el uso de dispositivos de almacenamiento USB para
                    evitar la transferencia de datos no autorizados.
                  </td>
                  <td>
                    Previene el robo de información y la infección por
                    <i>malware</i> desde USB.
                  </td>
                </tr>
                <tr>
                  <td class="fst-bold bgt1">
                    Actualización automática de <i>software</i>.
                  </td>
                  <td>
                    Fuerza a todos los equipos a instalar actualizaciones del
                    sistema operativo y <i>software</i> de seguridad.
                  </td>
                  <td>
                    Mantiene todos los dispositivos actualizados y protegidos
                    contra vulnerabilidades.
                  </td>
                </tr>
                <tr>
                  <td class="fst-bold bgt1">Configuración del Firewall.</td>
                  <td>
                    Establece reglas específicas para el firewall en cada
                    dispositivo de la red, permitiendo o denegando tráfico según
                    las necesidades de seguridad.
                  </td>
                  <td>
                    Controla el tráfico de red y protege los dispositivos de
                    accesos maliciosos.
                  </td>
                </tr>
                <tr>
                  <td class="fst-bold bgt1">
                    Acceso restringido a Panel de Control y Configuración.
                  </td>
                  <td>
                    Impide que los usuarios realicen cambios en la configuración
                    del sistema.
                  </td>
                  <td>
                    Evita alteraciones que puedan comprometer el rendimiento o
                    la seguridad.
                  </td>
                </tr>
                <tr>
                  <td class="fst-bold bgt1">
                    Configuración de proxy en navegadores.
                  </td>
                  <td>
                    Define automáticamente el servidor proxy que deben usar los
                    navegadores en la red.
                  </td>
                  <td>
                    Controla y monitorea el tráfico de Internet, mejorando la
                    seguridad y la administración del uso de la red.
                  </td>
                </tr>
                <tr>
                  <td class="fst-bold bgt1">
                    Deshabilitar el uso de aplicaciones específicas.
                  </td>
                  <td>
                    Prohíbe la ejecución de <i>software</i> no autorizado, como
                    programas de entretenimiento o aplicaciones de alto riesgo.
                  </td>
                  <td>
                    Reduce el riesgo de ejecutar aplicaciones maliciosas y
                    mejora la productividad.
                  </td>
                </tr>
                <tr>
                  <td class="fst-bold bgt1">
                    Control de acceso a recursos compartidos.
                  </td>
                  <td>
                    Configura permisos específicos para que solo ciertos
                    usuarios o grupos puedan acceder a carpetas y archivos en la
                    red.
                  </td>
                  <td>
                    Protege datos sensibles y organiza el acceso según las
                    necesidades del usuario.
                  </td>
                </tr>
                <tr>
                  <td class="fst-bold bgt1">
                    Desconexión automática por inactividad.
                  </td>
                  <td>
                    Cierra automáticamente la sesión de los usuarios después de
                    un período de inactividad.
                  </td>
                  <td>
                    Aumenta la seguridad al reducir la exposición en
                    dispositivos desatendidos.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tema4',
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
