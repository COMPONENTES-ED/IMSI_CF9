<template>
  <div class="curso-main-container pb-3">
    <BannerInterno></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div class="titulo-principal color-acento-contenido">
        <div class="titulo-principal__numero"><span>3</span></div>
        <h1>Seguridad de punto final</h1>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <div
            class="bloque-texto-g bloque-texto-g--inverso color-secundario p-3 p-sm-4 p-md-5 mb-5"
          >
            <div
              class="bloque-texto-g__img"
              :style="{
                'background-image': `url(${require('@/assets/curso/temas/26.png')})`,
              }"
            ></div>
            <div class="bloque-texto-g__texto p-4">
              <p class="mb-0">
                La seguridad de punto final es un aspecto fundamental en la
                protección de los equipos de cómputo y la información almacenada
                en ellos. En esta sección, abordaremos las medidas y
                herramientas que se utilizan para proteger los dispositivos de
                amenazas externas, incluyendo antivirus y antimalware, políticas
                de seguridad, y el control de acceso.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Separador> </Separador>
      <div id="t_3_1" class="titulo-segundo color-acento-contenido">
        <h2>3.1 Antivirus y antimalware</h2>
      </div>
      <div class="row justify-content-center mb-5">
        <div class="col-lg-auto j1">
          <img class="img-a img-t" src="@/assets/curso/temas/27.png" alt="" />
        </div>
        <div class="col pt-lg-0 pt-md-4 j1">
          <p class="mb-0">
            Los antivirus y las soluciones antimalware son herramientas que
            sirven para detectar y eliminar <i>software</i> malicioso que pueda
            comprometer la seguridad de un equipo. Estas amenazas incluyen
            virus, troyanos, ransomware, spyware y otros programas dañinos.
          </p>
        </div>
      </div>
      <TabsC class="color-acento-contenido mb-5">
        <div class="py-3 py-md-4 bg11" titulo="Funcionamiento de los antivirus">
          <div class="row justify-content-center py-4">
            <div class="col-lg-4 my-lg-0 my-3">
              <img
                class="img-a img-t"
                src="@/assets/curso/temas/28.png"
                alt=""
              />
            </div>
            <div class="col-lg-7 my-lg-0 my-3">
              <h5>Funcionamiento de los antivirus</h5>
              <ul class="lista-ul fa-ul">
                <li>
                  <i class="fas fa-check color1"></i
                  ><span
                    ><b>Análisis en tiempo real:</b> Los antivirus modernos
                    monitorean constantemente las actividades en el equipo para
                    identificar y bloquear amenazas antes de que puedan causar
                    daño. Esto incluye la revisión de archivos descargados,
                    correos electrónicos y dispositivos externos conectados al
                    equipo.
                  </span>
                </li>
                <li>
                  <i class="fas fa-check color1"></i
                  ><span
                    ><b>Actualizaciones de definiciones de virus:</b> Los
                    fabricantes de antivirus actualizan regularmente sus bases
                    de datos de definiciones para proteger contra nuevas
                    amenazas. Se deben mantener estas actualizaciones para que
                    el antivirus sea efectivo.
                  </span>
                </li>
                <li>
                  <i class="fas fa-check color1"></i
                  ><span
                    ><b>Escaneos programados:</b> Configurar el
                    <i>software</i> antivirus para realizar análisis periódicos
                    del sistema ayuda a detectar y eliminar amenazas que puedan
                    haber pasado desapercibidas.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          class="py-3 py-md-4 bg11"
          titulo="Tipos de &lt;i&gt;software antimalware&lt;/i&gt;"
        >
          <div class="row justify-content-center py-4">
            <div class="col-lg-4 my-lg-0 my-3">
              <img
                class="img-a img-t"
                src="@/assets/curso/temas/29.png"
                alt=""
              />
            </div>
            <div class="col-lg-7 my-lg-0 my-3">
              <h5>Tipos de <i>software antimalware</i></h5>
              <ul class="lista-ul fa-ul">
                <li>
                  <i class="fas fa-check color1"></i
                  ><span
                    ><b>Antispyware:</b> Se enfoca en detectar y eliminar
                    programas que recolectan información del usuario sin su
                    consentimiento, como contraseñas o datos personales.
                  </span>
                </li>
                <li>
                  <i class="fas fa-check color1"></i
                  ><span
                    ><b>Antiransomware:</b> Ofrece protección específica contra
                    <i>software</i> malicioso que cifra los archivos del usuario
                    y exige un pago para liberarlos.
                  </span>
                </li>
                <li>
                  <i class="fas fa-check color1"></i
                  ><span
                    ><b><i>software</i> de eliminación de adware:</b> Diseñado
                    para identificar y remover programas que muestran anuncios
                    no deseados o modifican la experiencia del usuario en el
                    navegador.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </TabsC>
      <p class="mb-5">
        El uso de una combinación de herramientas de seguridad puede
        proporcionar una protección más robusta contra diversas amenazas.
      </p>
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <div class="titulo-sexto color-acento-botones">
            <h5>Tabla 1.</h5>
            <span>Características y ejemplos de antivirus y antimalware</span>
          </div>
          <div class="tabla-a color-acento-botones text-center mb-5">
            <table>
              <caption>
                Fuente: OIT, 2024.
              </caption>
              <thead>
                <tr>
                  <th>Aspecto</th>
                  <th>Descripción</th>
                  <th>Ejemplos</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="fst-bold bgt1">Análisis en tiempo real.</td>
                  <td>
                    Monitorea continuamente las actividades en el sistema para
                    detectar y bloquear amenazas de inmediato.
                  </td>
                  <td>Norton, Kaspersky, Bitdefender.</td>
                </tr>
                <tr>
                  <td class="fst-bold bgt1">
                    Actualizaciones de definiciones.
                  </td>
                  <td>
                    Las bases de datos de virus y <i>malware</i> se actualizan
                    regularmente para proteger contra las últimas amenazas
                    conocidas.
                  </td>
                  <td>McAfee, Avast, ESET.</td>
                </tr>
                <tr>
                  <td class="fst-bold bgt1">Escaneos programados.</td>
                  <td>
                    Permite configurar análisis periódicos del sistema para
                    identificar y eliminar posibles amenazas de manera
                    automática.
                  </td>
                  <td>Avira, Sophos, Windows Defender.</td>
                </tr>
                <tr>
                  <td class="fst-bold bgt1">Antispyware.</td>
                  <td>
                    <i>software</i> especializado en detectar y eliminar
                    programas que recolectan información del usuario sin
                    autorización.
                  </td>
                  <td>Malwarebytes, Spybot, Adaware.</td>
                </tr>
                <tr>
                  <td class="fst-bold bgt1">Antiransomware.</td>
                  <td>
                    Ofrece protección contra <i>malware</i> que cifra archivos y
                    exige un rescate, impidiendo el acceso del usuario a sus
                    datos.
                  </td>
                  <td>Bitdefender, Kaspersky, Webroot.</td>
                </tr>
                <tr>
                  <td class="fst-bold bgt1">Eliminación de adware.</td>
                  <td>
                    Identifica y remueve programas que muestran anuncios no
                    deseados o interfieren con la experiencia del usuario en el
                    navegador.
                  </td>
                  <td>Malwarebytes, AdwCleaner, Avast.</td>
                </tr>
                <tr>
                  <td class="fst-bold bgt1">Protección web.</td>
                  <td>
                    Analiza y bloquea sitios web maliciosos, evitando que el
                    usuario acceda a páginas que puedan comprometer su
                    seguridad.
                  </td>
                  <td>Norton Safe Web, McAfee WebAdvisor.</td>
                </tr>
                <tr>
                  <td class="fst-bold bgt1">Herramientas de cuarentena.</td>
                  <td>
                    Aísla los archivos sospechosos para evitar que afecten al
                    sistema hasta que se decida eliminarlos o restaurarlos.
                  </td>
                  <td>AVG, Kaspersky, Windows Defender.</td>
                </tr>
                <tr>
                  <td class="fst-bold bgt1">Informes y notificaciones.</td>
                  <td>
                    Proporciona reportes detallados sobre las amenazas
                    detectadas y notifica al usuario cuando se requiere acción
                    inmediata.
                  </td>
                  <td>Symantec, Trend Micro, F-Secure.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Separador> </Separador>
      <div id="t_3_2" class="titulo-segundo color-acento-contenido">
        <h2>3.2 Políticas de seguridad</h2>
      </div>
      <div class="row justify-content-center mb-5">
        <div class="col-lg-auto j1">
          <img class="img-a img-t" src="@/assets/curso/temas/30.png" alt="" />
        </div>
        <div class="col pt-lg-0 pt-md-4 j1">
          <p class="mb-0">
            Las políticas de seguridad establecen directrices para proteger los
            datos y los sistemas de una organización o un usuario individual.
            Estas políticas definen cómo se deben manejar, almacenar y proteger
            los recursos informáticos.
          </p>
        </div>
      </div>
      <div class="row bg4 align-items-center">
        <div class="px-lg-5 px-4">
          <div class="row justify-content-center">
            <div class="col-lg-3 my-lg-0 my-3">
              <img
                class="img-a img-t"
                src="@/assets/curso/temas/31.png"
                alt=""
              />
            </div>
            <div class="col-lg-9 my-lg-0 my-3">
              <AccordionRED tipo="a" clase-tarjeta="tarjeta bg7">
                <div
                  titulo="Principales elementos de las políticas de seguridad"
                >
                  <ul class="lista-ul fa-ul">
                    <li>
                      <i class="fas fa-check color1"></i
                      ><span
                        >Contraseñas seguras: Se debe requerir el uso de
                        contraseñas complejas que combinen letras, números y
                        caracteres especiales, y que se actualicen
                        periódicamente. Herramientas como los gestores de
                        contraseñas pueden ayudar a mantener estas credenciales
                        seguras.
                      </span>
                    </li>
                    <li>
                      <i class="fas fa-check color1"></i
                      ><span
                        >Políticas de actualización: Se deben establecer
                        directrices para mantener el sistema operativo y el
                        <i>software</i> actualizados. Las actualizaciones
                        corrigen vulnerabilidades que pueden ser explotadas por
                        atacantes.
                      </span>
                    </li>
                    <li>
                      <i class="fas fa-check color1"></i
                      ><span
                        >Acceso a datos sensibles: Limitar el acceso a
                        información crítica solo a personas autorizadas es
                        importante para prevenir fugas o robos de datos. Esto
                        incluye el uso de permisos específicos y autenticación
                        multifactorial (MFA) cuando sea posible.
                      </span>
                    </li>
                  </ul>
                </div>
                <div titulo="Concienciación y capacitación">
                  <p>
                    La formación de los usuarios en buenas prácticas de
                    seguridad es fundamental para minimizar riesgos. Esto
                    incluye el reconocimiento de correos electrónicos de
                    phishing, la importancia de no compartir contraseñas, y la
                    precaución al conectar dispositivos USB desconocidos.
                  </p>
                </div>
              </AccordionRED>
            </div>
          </div>
        </div>
      </div>
      <Separador> </Separador>
      <div id="t_3_3" class="titulo-segundo color-acento-contenido">
        <h2>3.3 Control de acceso</h2>
      </div>
      <div class="row justify-content-center mb-5">
        <div class="col-lg-auto j1">
          <img class="img-a img-t" src="@/assets/curso/temas/32.png" alt="" />
        </div>
        <div class="col pt-lg-0 pt-md-4 j1">
          <p class="mb-0">
            El control de acceso es una medida de seguridad que regula quién
            puede acceder a qué recursos dentro de un sistema informático. Este
            control garantiza que solo las personas autorizadas puedan
            interactuar con datos sensibles o realizar acciones críticas en el
            sistema.
          </p>
        </div>
      </div>
      <TabsC class="color-acento-contenido mb-5">
        <div class="py-3 py-md-4 bg11" titulo="Tipos de control de acceso">
          <div class="row justify-content-center py-4">
            <div class="col-lg-4 my-lg-0 my-3">
              <img
                class="img-a img-t"
                src="@/assets/curso/temas/33.png"
                alt=""
              />
            </div>
            <div class="col-lg-7 my-lg-0 my-3">
              <h5>Tipos de control de acceso:</h5>
              <ul class="lista-ul fa-ul">
                <li>
                  <i class="fas fa-check color1"></i
                  ><span
                    ><b>Control de acceso basado en roles (RBAC):</b> Asigna
                    permisos a los usuarios según su función dentro de una
                    organización. Por ejemplo, un administrador de red puede
                    tener acceso total, mientras que un usuario estándar solo
                    tiene permisos limitados.</span
                  >
                </li>
                <li>
                  <i class="fas fa-check color1"></i
                  ><span
                    ><b>Control de acceso basado en atributos (ABAC):</b>
                    Permite o niega el acceso a los recursos según atributos
                    específicos, como la ubicación, el tipo de dispositivo o la
                    hora del día. Este método es más flexible y adecuado para
                    entornos que requieren un alto nivel de
                    personalización.</span
                  >
                </li>
                <li>
                  <i class="fas fa-check color1"></i
                  ><span
                    ><b>Listas de control de acceso (ACLs):</b> Especifican qué
                    usuarios o grupos tienen permiso para acceder a ciertos
                    recursos, y qué acciones pueden realizar (leer, escribir,
                    ejecutar).
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          class="py-3 py-md-4 bg11"
          titulo="Herramientas y métodos de control de acceso"
        >
          <div class="row justify-content-center py-4">
            <div class="col-lg-4 my-lg-0 my-3">
              <img
                class="img-a img-t"
                src="@/assets/curso/temas/34.png"
                alt=""
              />
            </div>
            <div class="col-lg-7 my-lg-0 my-3">
              <h5>Herramientas y métodos de control de acceso:</h5>
              <ul class="lista-ul fa-ul">
                <li>
                  <i class="fas fa-check color1"></i
                  ><span
                    ><b><i>software</i> de autenticación:</b> Las herramientas
                    de autenticación aseguran que solo los usuarios legítimos
                    puedan acceder al sistema. Esto incluye el uso de
                    contraseñas, tokens de seguridad, o autenticación biométrica
                    (como huellas dactilares o reconocimiento facial).</span
                  >
                </li>
                <li>
                  <i class="fas fa-check color1"></i
                  ><span
                    ><b>Sistemas de gestión de identidades (IDM):</b>
                    Automatizan el proceso de asignación y gestión de permisos,
                    asegurando que se cumplan las políticas de seguridad.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </TabsC>
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <div class="row justify-content-center bg1 p-4 brad">
            <div class="col-lg-auto j1">
              <img
                class="img-a img-t"
                src="@/assets/curso/temas/9.png"
                alt=""
              />
            </div>
            <div class="col pt-lg-0 pt-md-4">
              <p class="mb-0">
                El control de acceso no solo protege los datos, sino que también
                ayuda a prevenir el uso indebido de los recursos de la red,
                manteniendo un entorno informático seguro.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tema3',
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
