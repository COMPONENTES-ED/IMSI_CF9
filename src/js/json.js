export default {
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Virtualización de sistemas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Tipos de virtualización',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Plataformas virtuales',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Gestión de recursos virtuales',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Configuración de sistemas operativos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'BIOS/UEFI',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Sistemas de arranque',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Optimización de rendimiento',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Seguridad de punto final',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Antivirus y antimalware',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Políticas de seguridad',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Control de acceso',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Gestión de red',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Directorio activo y dominios',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Recursos compartidos',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Políticas de grupo',
            hash: 't_4_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/228142_CF09_DU_V2.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  global: {
    Name: 'Parametrización de <i>hardware</i> y <i>software</i>',
    Description:
      'El presente componente enseña a configurar y optimizar sistemas informáticos de manera eficiente. Aborda la virtualización de recursos, la gestión avanzada de sistemas operativos, la implementación de medidas de seguridad para proteger dispositivos, y la administración efectiva de redes. Se desarrollarán habilidades prácticas para mejorar el rendimiento, garantizar la seguridad de los equipos y enfrentar desafíos tecnológicos en diversos entornos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/2.png'),
      },
    ],
  },
}
