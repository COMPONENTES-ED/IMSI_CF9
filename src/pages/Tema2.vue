<template>
  <div class="curso-main-container pb-3">
    <BannerInterno></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div class="titulo-principal color-acento-contenido">
        <div class="titulo-principal__numero"><span>2</span></div>
        <h1>Configuración de sistemas operativos</h1>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <div class="bloque-texto-g color-secundario p-3 p-sm-4 p-md-5 mb-5">
            <div
              class="bloque-texto-g__img"
              :style="{
                'background-image': `url(${require('@/assets/curso/temas/13.png')})`,
              }"
            ></div>
            <div class="bloque-texto-g__texto p-4">
              <p class="mb-0">
                La correcta configuración de los sistemas operativos es
                fundamental para asegurar que los equipos de cómputo funcionen
                de manera óptima, segura y eficiente. En esta sección, se
                detallan los aspectos de la configuración, desde el arranque
                hasta la optimización del rendimiento.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Separador> </Separador>
      <div id="t_2_1" class="titulo-segundo color-acento-contenido">
        <h2>2.1 BIOS/UEFI</h2>
      </div>
      <div class="row justify-content-center mb-5">
        <div class="col-lg-9 my-lg-0 my-3">
          <p>
            La BIOS (Basic Input/Output System) y la UEFI (Unified Extensible
            Firmware Interface) son sistemas fundamentales que inician el
            <i>hardware</i> de un equipo y preparan el entorno para que el
            sistema operativo se cargue. Entender la función de ambos sistemas y
            cómo configurarlos es fundamental para optimizar el rendimiento y la
            seguridad de los equipos.
          </p>
          <div class="bg5 p-4 brad">
            <p class="mb-0">
              La BIOS es el firmware tradicional que controla las funciones
              básicas del <i>hardware</i> de la computadora. Cuando se enciende
              un equipo, la BIOS ejecuta una serie de pruebas conocidas como
              POST (Power-On Self Test) para asegurarse de que los principales
              componentes, como el procesador, la memoria RAM y los discos
              duros, estén funcionando correctamente.
            </p>
          </div>
        </div>
        <div class="col-lg-3 my-lg-0 my-3">
          <img class="img-a img-t" src="@/assets/curso/temas/14.png" alt="" />
        </div>
      </div>
      <div class="row bg6 align-items-center mb-5">
        <div class="px-lg-5 px-4">
          <div class="bgw brad p-5 my-5 d-none d-lg-block">
            <CarouselRED tipo="b">
              <div class="row justify-content-center">
                <div class="col-lg-6 my-2">
                  <h5 class="mb-4">Interfaz de configuración:</h5>
                  <p>
                    La BIOS ofrece una interfaz simple basada en texto a la que
                    se accede presionando una tecla específica (como F2, F10 o
                    Delete) durante el arranque. Desde esta interfaz, se pueden
                    ajustar configuraciones básicas, como el orden de arranque,
                    la gestión de dispositivos, y las opciones de seguridad.
                  </p>
                </div>
                <div class="col-lg-5 my-2">
                  <img
                    class="img-a img-t"
                    src="@/assets/curso/temas/16.png"
                    alt=""
                  />
                </div>
              </div>
              <div class="row justify-content-center">
                <div class="col-lg-6 my-2">
                  <h5 class="mb-4">Configuraciones comunes:</h5>
                  <ul class="lista-ul fa-ul">
                    <li>
                      <i class="fas fa-check color1"></i
                      ><span
                        ><b>Orden de arranque:</b> Permite elegir el dispositivo
                        desde el cual se iniciará el sistema operativo (disco
                        duro, unidad USB, CD/DVD, etc.).</span
                      >
                    </li>
                    <li>
                      <i class="fas fa-check color1"></i
                      ><span
                        ><b>Configuración de dispositivos:</b> Habilita o
                        deshabilita componentes como puertos USB, tarjetas de
                        red, y dispositivos de almacenamiento.
                      </span>
                    </li>
                    <li>
                      <i class="fas fa-check color1"></i
                      ><span
                        ><b>Opciones de seguridad:</b> Incluyen la configuración
                        de contraseñas para proteger el acceso a la BIOS y al
                        equipo.</span
                      >
                    </li>
                  </ul>
                  <p>
                    Aunque la BIOS ha sido un estándar durante décadas, tiene
                    algunas limitaciones, como el soporte para particiones de
                    disco mayores de 2 TB y una interfaz anticuada.
                  </p>
                </div>
                <div class="col-lg-5 my-2">
                  <img
                    class="img-a img-t"
                    src="@/assets/curso/temas/17.png"
                    alt=""
                  />
                </div>
              </div>
              <div class="row justify-content-center">
                <div class="col-lg-6 my-2">
                  <h5 class="mb-4">UEFI: Avances y beneficios</h5>
                  <p>
                    La UEFI es la evolución moderna de la BIOS, diseñada para
                    superar sus limitaciones y ofrecer una experiencia más
                    segura y flexible. La UEFI tiene una arquitectura más
                    avanzada, permitiendo tiempos de arranque más rápidos, un
                    mejor manejo de <i>hardware</i> moderno y soporte para
                    interfaces gráficas.
                  </p>
                  <ul class="lista-ul fa-ul">
                    <li>
                      <i class="fas fa-check color1"></i
                      ><span
                        ><b>Interfaz gráfica y usabilidad:</b> A diferencia de
                        la BIOS, la UEFI proporciona una interfaz gráfica más
                        intuitiva, con soporte para mouse y configuraciones
                        avanzadas que son más fáciles de manejar.</span
                      >
                    </li>
                    <li>
                      <i class="fas fa-check color1"></i
                      ><span
                        ><b>Compatibilidad con discos grandes:</b> La UEFI puede
                        gestionar particiones de disco de hasta 9.4 zettabytes,
                        lo que la hace ideal para sistemas modernos que usan
                        discos de alta capacidad.
                      </span>
                    </li>
                    <li>
                      <i class="fas fa-check color1"></i
                      ><span
                        ><b>Funciones de seguridad mejoradas:</b> Una de las
                        características más importantes de la UEFI es el Secure
                        Boot, que impide que se cargue <i>software</i> malicioso
                        durante el arranque. Esta función verifica la firma de
                        los sistemas operativos y aplicaciones de arranque,
                        asegurando que solo se ejecute
                        <i>software</i> confiable.
                      </span>
                    </li>
                  </ul>
                </div>
                <div class="col-lg-5 my-2">
                  <img
                    class="img-a img-t"
                    src="@/assets/curso/temas/18.png"
                    alt=""
                  />
                </div>
              </div>
              <div class="row justify-content-center">
                <div class="col-lg-6 my-2">
                  <h5 class="mb-4">Configuraciones Importantes en UEFI:</h5>
                  <ul class="lista-ul fa-ul">
                    <li>
                      <i class="fas fa-check color1"></i
                      ><span
                        ><b>Modo de arranque:</b> La UEFI permite seleccionar
                        entre el modo de arranque UEFI o Legacy (compatibilidad
                        con BIOS antigua). Se debe elegir el modo adecuado según
                        el sistema operativo instalado.</span
                      >
                    </li>
                    <li>
                      <i class="fas fa-check color1"></i
                      ><span
                        ><b>Administración de hardware:</b> Se pueden realizar
                        configuraciones avanzadas para gestionar mejor el
                        rendimiento del procesador, la memoria, y las tarjetas
                        gráficas.</span
                      >
                    </li>
                    <li>
                      <i class="fas fa-check color1"></i
                      ><span
                        ><b>Actualización de firmware:</b> La UEFI facilita las
                        actualizaciones de firmware, que son necesarias para
                        mantener la compatibilidad con <i>hardware</i> nuevo y
                        corregir vulnerabilidades de seguridad.
                      </span>
                    </li>
                  </ul>
                </div>
                <div class="col-lg-5 my-2">
                  <img
                    class="img-a img-t"
                    src="@/assets/curso/temas/19.png"
                    alt=""
                  />
                </div>
              </div>
              <div class="row justify-content-center">
                <div class="col-lg-6 my-2">
                  <h5 class="mb-4">Diferencias entre BIOS y UEFI:</h5>
                  <ul class="lista-ul fa-ul">
                    <li>
                      <i class="fas fa-check color1"></i
                      ><span
                        ><b>Velocidad de arranque:</b> La UEFI ofrece tiempos de
                        arranque más rápidos debido a su diseño
                        optimizado.</span
                      >
                    </li>
                    <li>
                      <i class="fas fa-check color1"></i
                      ><span
                        ><b>Seguridad:</b> UEFI proporciona medidas de seguridad
                        adicionales como el Secure Boot, mientras que la BIOS
                        carece de estas funciones avanzadas.</span
                      >
                    </li>
                    <li>
                      <i class="fas fa-check color1"></i
                      ><span
                        ><b>Interfaz:</b> La BIOS utiliza una interfaz de texto
                        básica, mientras que la UEFI ofrece una experiencia
                        gráfica con soporte para mouse.
                      </span>
                    </li>
                  </ul>
                </div>
                <div class="col-lg-5 my-2">
                  <img
                    class="img-a img-t"
                    src="@/assets/curso/temas/20.png"
                    alt=""
                  />
                </div>
              </div>
            </CarouselRED>
          </div>
          <div class="bgw brad p-4 my-5 d-block d-lg-none">
            <div class="row justify-content-center">
              <div class="col-lg-6 my-2">
                <h5 class="mb-4">Interfaz de configuración:</h5>
                <p>
                  La BIOS ofrece una interfaz simple basada en texto a la que se
                  accede presionando una tecla específica (como F2, F10 o
                  Delete) durante el arranque. Desde esta interfaz, se pueden
                  ajustar configuraciones básicas, como el orden de arranque, la
                  gestión de dispositivos, y las opciones de seguridad.
                </p>
              </div>
              <div class="col-lg-5 my-2">
                <img
                  class="img-a img-t"
                  src="@/assets/curso/temas/16.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div class="bgw brad p-4 my-5 d-block d-lg-none">
            <div class="row justify-content-center">
              <div class="col-lg-6 my-2">
                <h5 class="mb-4">Configuraciones comunes:</h5>
                <ul class="lista-ul fa-ul">
                  <li>
                    <i class="fas fa-check color1"></i
                    ><span
                      ><b>Orden de arranque:</b> Permite elegir el dispositivo
                      desde el cual se iniciará el sistema operativo (disco
                      duro, unidad USB, CD/DVD, etc.).</span
                    >
                  </li>
                  <li>
                    <i class="fas fa-check color1"></i
                    ><span
                      ><b>Configuración de dispositivos:</b> Habilita o
                      deshabilita componentes como puertos USB, tarjetas de red,
                      y dispositivos de almacenamiento.
                    </span>
                  </li>
                  <li>
                    <i class="fas fa-check color1"></i
                    ><span
                      ><b>Opciones de seguridad:</b> Incluyen la configuración
                      de contraseñas para proteger el acceso a la BIOS y al
                      equipo.</span
                    >
                  </li>
                </ul>
                <p>
                  Aunque la BIOS ha sido un estándar durante décadas, tiene
                  algunas limitaciones, como el soporte para particiones de
                  disco mayores de 2 TB y una interfaz anticuada.
                </p>
              </div>
              <div class="col-lg-5 my-2">
                <img
                  class="img-a img-t"
                  src="@/assets/curso/temas/17.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div class="bgw brad p-4 my-5 d-block d-lg-none">
            <div class="row justify-content-center">
              <div class="col-lg-6 my-2">
                <h5 class="mb-4">UEFI: Avances y beneficios</h5>
                <p>
                  La UEFI es la evolución moderna de la BIOS, diseñada para
                  superar sus limitaciones y ofrecer una experiencia más segura
                  y flexible. La UEFI tiene una arquitectura más avanzada,
                  permitiendo tiempos de arranque más rápidos, un mejor manejo
                  de <i>hardware</i> moderno y soporte para interfaces gráficas.
                </p>
                <ul class="lista-ul fa-ul">
                  <li>
                    <i class="fas fa-check color1"></i
                    ><span
                      ><b>Interfaz gráfica y usabilidad:</b> A diferencia de la
                      BIOS, la UEFI proporciona una interfaz gráfica más
                      intuitiva, con soporte para mouse y configuraciones
                      avanzadas que son más fáciles de manejar.</span
                    >
                  </li>
                  <li>
                    <i class="fas fa-check color1"></i
                    ><span
                      ><b>Compatibilidad con discos grandes:</b> La UEFI puede
                      gestionar particiones de disco de hasta 9.4 zettabytes, lo
                      que la hace ideal para sistemas modernos que usan discos
                      de alta capacidad.
                    </span>
                  </li>
                  <li>
                    <i class="fas fa-check color1"></i
                    ><span
                      ><b>Funciones de seguridad mejoradas:</b> Una de las
                      características más importantes de la UEFI es el Secure
                      Boot, que impide que se cargue <i>software</i> malicioso
                      durante el arranque. Esta función verifica la firma de los
                      sistemas operativos y aplicaciones de arranque, asegurando
                      que solo se ejecute <i>software</i> confiable.
                    </span>
                  </li>
                </ul>
              </div>
              <div class="col-lg-5 my-2">
                <img
                  class="img-a img-t"
                  src="@/assets/curso/temas/18.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div class="bgw brad p-4 my-5 d-block d-lg-none">
            <div class="row justify-content-center">
              <div class="col-lg-6 my-2">
                <h5 class="mb-4">Configuraciones Importantes en UEFI:</h5>
                <ul class="lista-ul fa-ul">
                  <li>
                    <i class="fas fa-check color1"></i
                    ><span
                      ><b>Modo de arranque:</b> La UEFI permite seleccionar
                      entre el modo de arranque UEFI o Legacy (compatibilidad
                      con BIOS antigua). Se debe elegir el modo adecuado según
                      el sistema operativo instalado.</span
                    >
                  </li>
                  <li>
                    <i class="fas fa-check color1"></i
                    ><span
                      ><b>Administración de hardware:</b> Se pueden realizar
                      configuraciones avanzadas para gestionar mejor el
                      rendimiento del procesador, la memoria, y las tarjetas
                      gráficas.</span
                    >
                  </li>
                  <li>
                    <i class="fas fa-check color1"></i
                    ><span
                      ><b>Actualización de firmware:</b> La UEFI facilita las
                      actualizaciones de firmware, que son necesarias para
                      mantener la compatibilidad con <i>hardware</i> nuevo y
                      corregir vulnerabilidades de seguridad.
                    </span>
                  </li>
                </ul>
              </div>
              <div class="col-lg-5 my-2">
                <img
                  class="img-a img-t"
                  src="@/assets/curso/temas/19.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div class="bgw brad p-4 my-5 d-block d-lg-none">
            <div class="row justify-content-center">
              <div class="col-lg-6 my-2">
                <h5 class="mb-4">Diferencias entre BIOS y UEFI:</h5>
                <ul class="lista-ul fa-ul">
                  <li>
                    <i class="fas fa-check color1"></i
                    ><span
                      ><b>Velocidad de arranque:</b> La UEFI ofrece tiempos de
                      arranque más rápidos debido a su diseño optimizado.</span
                    >
                  </li>
                  <li>
                    <i class="fas fa-check color1"></i
                    ><span
                      ><b>Seguridad:</b> UEFI proporciona medidas de seguridad
                      adicionales como el Secure Boot, mientras que la BIOS
                      carece de estas funciones avanzadas.</span
                    >
                  </li>
                  <li>
                    <i class="fas fa-check color1"></i
                    ><span
                      ><b>Interfaz:</b> La BIOS utiliza una interfaz de texto
                      básica, mientras que la UEFI ofrece una experiencia
                      gráfica con soporte para mouse.
                    </span>
                  </li>
                </ul>
              </div>
              <div class="col-lg-5 my-2">
                <img
                  class="img-a img-t"
                  src="@/assets/curso/temas/20.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Separador> </Separador>
      <div id="t_2_2" class="titulo-segundo color-acento-contenido">
        <h2>2.2 Sistemas de arranque</h2>
      </div>
      <p class="mb-5">
        El sistema de arranque es el proceso mediante el cual un equipo de
        cómputo carga el sistema operativo y lo prepara para ser utilizado. Una
        configuración adecuada del sistema de arranque garantiza que el equipo
        inicie correctamente y pueda acceder a los recursos necesarios.
      </p>
      <TabsC class="color-acento-contenido mb-5">
        <div class="py-3 py-md-4 bg11" titulo="Tipos de sistemas de arranque">
          <div class="row justify-content-center py-4">
            <div class="col-lg-4 my-lg-0 my-3">
              <img
                class="img-a img-t"
                src="@/assets/curso/temas/21.png"
                alt=""
              />
            </div>
            <div class="col-lg-7 my-lg-0 my-3">
              <h5>Tipos de sistemas de arranque</h5>
              <ul class="lista-ul fa-ul">
                <li>
                  <i class="fas fa-check color1"></i
                  ><span
                    ><b>Arranque dual (Dual Boot):</b> Permite tener instalados
                    dos sistemas operativos en un solo equipo y elegir cuál
                    cargar al inicio. Esto es útil cuando se necesita trabajar
                    con diferentes sistemas, como Windows y Linux.</span
                  >
                </li>
                <li>
                  <i class="fas fa-check color1"></i
                  ><span
                    ><b>Arranque desde dispositivos externos:</b> Configurar el
                    equipo para que pueda arrancar desde dispositivos externos,
                    como unidades USB o discos ópticos, se hace necesario para
                    tareas de recuperación y mantenimiento. Esta opción se
                    establece en la BIOS/UEFI y se prioriza según la
                    necesidad.</span
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          class="py-3 py-md-4 bg11"
          titulo="Configuración del gestor de arranque"
        >
          <div class="row justify-content-center py-4">
            <div class="col-lg-4 my-lg-0 my-3">
              <img
                class="img-a img-t"
                src="@/assets/curso/temas/22.png"
                alt=""
              />
            </div>
            <div class="col-lg-7 my-lg-0 my-3">
              <h5>Configuración del gestor de arranque</h5>
              <p>
                El gestor de arranque es un programa que permite seleccionar qué
                sistema operativo se cargará en un equipo con arranque dual.
                Ejemplos comunes de gestores de arranque son GRUB (utilizado en
                Linux) y Windows Boot Manager.
              </p>
              <ul class="lista-ul fa-ul">
                <li>
                  <i class="fas fa-check color1"></i
                  ><span
                    ><b>Modificar el orden de arranque:</b> Cambiar la prioridad
                    de los dispositivos desde el gestor de arranque, en caso de
                    que se necesite iniciar desde un disco duro secundario o una
                    unidad USB.
                  </span>
                </li>
                <li>
                  <i class="fas fa-check color1"></i
                  ><span
                    ><b>Configuraciones avanzadas:</b> Algunos gestores de
                    arranque permiten opciones como tiempo de espera para la
                    selección de un sistema operativo predeterminado o ajustes
                    personalizados para arrancar en modo seguro.</span
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="py-3 py-md-4 bg11" titulo="Problemas comunes y soluciones">
          <div class="row justify-content-center py-4">
            <div class="col-lg-4 my-lg-0 my-3">
              <img
                class="img-a img-t"
                src="@/assets/curso/temas/23.png"
                alt=""
              />
            </div>
            <div class="col-lg-7 my-lg-0 my-3">
              <h5>Problemas comunes y soluciones</h5>
              <ul class="lista-ul fa-ul">
                <li>
                  <i class="fas fa-check color1"></i
                  ><span
                    ><b>Error en el gestor de arranque:</b> A veces, el gestor
                    de arranque puede corromperse debido a actualizaciones
                    fallidas o instalaciones incorrectas. Herramientas como el
                    Disco de Reparación de Windows o comandos como boot-repair
                    en Linux pueden ayudar a solucionar estos problemas.</span
                  >
                </li>
                <li>
                  <i class="fas fa-check color1"></i
                  ><span
                    ><b>No se detecta el sistema operativo:</b> Verificar que el
                    sistema operativo esté correctamente instalado y que el
                    disco sea reconocido por la BIOS/UEFI. También puede ser
                    necesario reparar el MBR (Master Boot Record) o la tabla de
                    particiones.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </TabsC>
      <Separador> </Separador>
      <div id="t_2_3" class="titulo-segundo color-acento-contenido">
        <h2>2.3 Optimización de rendimiento</h2>
      </div>
      <div class="row justify-content-center mb-5">
        <div class="col-lg-auto j1">
          <img class="img-a img-t" src="@/assets/curso/temas/24.png" alt="" />
        </div>
        <div class="col pt-lg-0 pt-md-4">
          <div class="bg2 p-4 brad">
            <p class="mb-0">
              La optimización del rendimiento del sistema operativo es un
              proceso continuo que involucra ajustes y configuraciones para
              asegurar que los recursos de <i>hardware</i> sean utilizados de
              manera eficiente. Una buena optimización mejora la velocidad, la
              estabilidad y la experiencia del usuario.
            </p>
          </div>
        </div>
      </div>
      <div class="row bg4 align-items-center">
        <div class="px-lg-5 px-4">
          <div class="row justify-content-center">
            <div class="col-lg-3 my-lg-0 my-3">
              <img
                class="img-a img-t"
                src="@/assets/curso/temas/25.png"
                alt=""
              />
            </div>
            <div class="col-lg-9 my-lg-0 my-3">
              <AccordionRED tipo="a" clase-tarjeta="tarjeta bg7">
                <div titulo="Configuraciones para mejorar el rendimiento">
                  <ul class="lista-ul fa-ul">
                    <li>
                      <i class="fas fa-check color1"></i
                      ><span
                        >Deshabilitar programas de inicio innecesarios: Muchos
                        programas se configuran para iniciarse automáticamente
                        con el sistema operativo, lo que puede ralentizar el
                        arranque. Utilizar el Administrador de tareas de Windows
                        o herramientas equivalentes en otros sistemas para
                        deshabilitar programas que no son indispensables.</span
                      >
                    </li>
                    <li>
                      <i class="fas fa-check color1"></i
                      ><span
                        >Ajustar las opciones de energía: Configurar el plan de
                        energía adecuado según las necesidades del usuario. Por
                        ejemplo, en portátiles, se puede seleccionar un plan de
                        alto rendimiento cuando se necesita la máxima potencia o
                        un plan de ahorro de energía para prolongar la duración
                        de la batería.
                      </span>
                    </li>
                    <li>
                      <i class="fas fa-check color1"></i
                      ><span
                        >Limpieza de disco: Usar herramientas como Liberador de
                        espacio en disco en Windows o BleachBit en Linux para
                        eliminar archivos temporales, caché y otros elementos
                        innecesarios que ocupan espacio.
                      </span>
                    </li>
                  </ul>
                </div>
                <div titulo="Optimización del uso de memoria (RAM)">
                  <ul class="lista-ul fa-ul">
                    <li>
                      <i class="fas fa-check color1"></i
                      ><span
                        >Administrar procesos en segundo plano: Identificar y
                        cerrar aplicaciones que consumen mucha memoria a través
                        del Administrador de Tareas o el Monitor de Recursos. En
                        sistemas como Linux, se pueden usar comandos como htop
                        para gestionar procesos.
                      </span>
                    </li>
                    <li>
                      <i class="fas fa-check color1"></i
                      ><span
                        >Aumentar el tamaño de la memoria virtual: En algunos
                        casos, se puede mejorar el rendimiento aumentando la
                        memoria virtual, que es un espacio en el disco duro que
                        actúa como un complemento de la RAM. Esto se configura
                        desde las opciones avanzadas del sistema operativo.
                      </span>
                    </li>
                  </ul>
                </div>
                <div titulo="Actualizaciones de &lt;i&gt;software&lt;/i&gt;">
                  <ul class="lista-ul fa-ul">
                    <li>
                      <i class="fas fa-check color1"></i
                      ><span
                        >Actualizar el sistema operativo: Mantener el sistema
                        operativo actualizado es fundamental para garantizar el
                        rendimiento y la seguridad. Las actualizaciones corrigen
                        vulnerabilidades y optimizan el uso de recursos.
                      </span>
                    </li>
                    <li>
                      <i class="fas fa-check color1"></i
                      ><span
                        >Controladores de <i>hardware</i>: Asegurarse de que los
                        controladores de los dispositivos estén actualizados.
                        Esto incluye la tarjeta gráfica, el adaptador de red y
                        otros periféricos que pueden afectar el rendimiento del
                        sistema.
                      </span>
                    </li>
                  </ul>
                </div>
                <div titulo="Desfragmentación y optimización del disco">
                  <p>
                    En sistemas con discos duros mecánicos (HDD), la
                    desfragmentación organiza los archivos de manera que se
                    acceda a ellos más rápidamente. En sistemas con unidades de
                    estado sólido (SSD), la desfragmentación no es necesaria,
                    pero existen herramientas de optimización que pueden
                    prolongar la vida útil del disco.
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
  name: 'Tema2',
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
