import type { SiteDict } from './types';

// Real Preventiva Norte (Spanish) copy, translated from the reviewed
// Portuguese content in pt.ts (Task 6) for the /es route, which serves
// Spanish-speaking visitors/tourists in the Norte de Portugal region.
// Facts (phone, email, service area, guarantee terms) match pt.ts exactly;
// only the surrounding prose is translated/adapted for natural Spanish.
export const es: SiteDict = {
  locale: 'es',
  navbar: {
    inicio: 'Inicio',
    nosotros: 'Nosotros',
    certificaciones: 'Certificaciones',
    proteccion: 'Protección',
    servicios: 'Servicios',
    contacto: 'Contacto',
    llamarAhora: 'Llamar Ahora',
    solicitarPresupuesto: 'Solicitar Presupuesto',
    abrirMenu: 'Abrir menú',
    basePath: '/es',
  },
  hero: {
    badge: 'Seguridad Certificada',
    title1: 'Redes de Protección',
    title2: 'para tu Hogar',
    description:
      'Especialistas en la instalación de <strong>redes de seguridad en el Norte de Portugal</strong>. Protección certificada para niños y gatos en balcones y ventanas sin perder las vistas.',
    ctaPrimary: 'Pedir Presupuesto GRATIS',
    ctaSecondary: 'Ver Instalaciones',
    scrollHint: 'Descubre más',
    logoAlt: 'Preventiva Norte - Instalación de Redes en Porto',
  },
  trustBar: {
    certified: 'CE Certificado',
    guarantee: 'Garantía',
    guaranteeHighlight: 'Total',
  },
  services: {
    title: 'Soluciones de Seguridad Integral',
    subtitle:
      'Adaptamos nuestras redes de protección a cualquier espacio y necesidad, garantizando la máxima resistencia.',
    readMore: 'Leer más →',
    items: [
      {
        title: 'Mallas para Gatos',
        description:
          "Especialistas en redes de protección anti-caídas. Evita el 'síndrome del paracaidista' con nuestras mallas de seguridad.",
        href: '/proteccion#gatos',
      },
      {
        title: 'Seguridad Infantil',
        description:
          'Protección certificada para ventanas, balcones y escaleras. Sustitución de rejas con estética limpia.',
        href: '/proteccion#ninos',
      },
      {
        title: 'Control de Aves',
        description:
          'Solución definitiva contra palomas en Porto y el Norte. Higiene y protección ética para tu edificio.',
        href: '/proteccion#aves',
      },
      {
        title: 'Pistas Deportivas',
        description:
          'Redes de protección para campos, pabellones, gimnasios y recintos deportivos.',
      },
      {
        title: 'Construcción Civil',
        description:
          'Redes de protección y seguridad para obras, fachadas e instalaciones industriales en todo el Norte de Portugal.',
        href: '/construcao-civil',
      },
      {
        title: 'Kits',
        description:
          'Kit DIY con red, cuerda, ganchos y tacos para instalarlo usted mismo en ventanas y balcones sencillos.',
        href: '/kit-instalacao',
      },
    ],
  },
  benefits: {
    tag: 'Por Qué Elegirnos',
    title1: 'Seguridad que no se ve,',
    title2: 'tranquilidad que se siente',
    description:
      'Nuestras redes de polietileno de alta tenacidad son la opción preferida por familias y arquitectos. Combinan la máxima seguridad técnica con un impacto visual mínimo.',
    items: [
      'Resistencia Certificada: Soportan hasta 150kg/m².',
      'Tratamiento Anti-UV: Larga durabilidad expuestas al sol.',
      'Máxima Estética: No alteran la fachada ni las vistas.',
      'Material Ignífugo y No Tóxico.',
      'Instalación sin obras molestas.',
      'Garantía de 2 años en materiales e instalación.',
    ],
    quote: 'El mejor servicio',
    quoteDesc:
      'Instalación rápida y el resultado es impecable. Muy recomendados.',
  },
  whyUs: {
    reasons: [
      {
        title: 'Instaladores Propios',
        description:
          'No subcontratamos. Nuestro personal está especializado exclusivamente en redes de alta seguridad.',
      },
      {
        title: 'Atención Ágil',
        description:
          'Presupuestos por WhatsApp en tiempo récord y plazos de instalación mínimos en todo el Norte de Portugal.',
      },
      {
        title: 'Certificación Técnica',
        description:
          'Solo utilizamos polietileno virgen, testado para soportar 150kg/m².',
      },
    ],
  },
  aboutUs: {
    tag: 'Nuestra Historia',
    title: 'Sobre',
    titleHighlight: 'Preventiva',
    p1: 'Nacimos en 2016 con una misión clara: proteger a quienes más importan. Lo que empezó como un cuidado familiar ha crecido y hoy traspasa fronteras, con presencia consolidada en Portugal y España (Madrid, Barcelona, Galicia y Málaga).',
    p2: 'Con más de 6.000 hogares y empresas protegidos, somos especialistas en seguridad y trabajo en altura, ofreciendo soluciones a medida:',
    categories: [
      {
        title: 'Residencial',
        description: 'Redes de protección certificadas para niños y mascotas en ventanas y balcones.',
      },
      {
        title: 'Soluciones Especiales',
        description: 'Control y protección contra aves, además de redes deportivas.',
      },
      {
        title: 'Comunidades e Industria',
        description: 'Estructuras de alta seguridad para comunidades de vecinos y empresas.',
      },
    ],
    closing: 'Máxima seguridad, acabado discreto y la tranquilidad que buscas.',
  },
  gallery: {
    title: 'Nuestros Trabajos',
    subtitle:
      'Explora algunas de nuestras instalaciones recientes. Seguridad impecable con el mínimo impacto visual.',
    viewMore: 'Ver más en Instagram →',
    closeLabel: 'Cerrar',
    categories: {
      varandas: 'Balcones',
      terracos: 'Terrazas',
      janelas: 'Ventanas',
      quadras: 'Pistas',
      outras: 'Otras',
      detalhes: 'Detalles',
    },
  },
  testimonials: {
    title: 'Lo que dicen nuestros clientes',
    verMas: 'Ver más',
    items: [
      {
        name: 'Teresa Roue',
        location: 'Porto',
        text: 'La atención por WhatsApp fue muy rápida y eficaz. Pocos días después ya estaban instalando la red. Los técnicos que vinieron fueron súper simpáticos, la red quedó muy bien y mis gatos ya pueden pasear por el balcón tranquilamente :) ¡Económicos y profesionales! Dejo fotos *-*',
      },
      {
        name: 'Evelina Zikrach',
        location: 'Braga',
        text: 'La instalación fue de lujo, todo hecho con el máximo cuidado y diligencia. Queríamos una instalación de red sin techo en el patio delantero para que nuestros gatos no salieran y, en el momento de la instalación, se aseguraron de que no quedara ninguna rendija ni salida posible. Los instaladores fueron muy puntuales y amables. En general, muy satisfechos con el trato de la empresa, la eficiencia y la calidad. Nota 10/10.',
      },
      {
        name: 'Elena Jodar',
        location: 'Cliente Verificado',
        text: 'Contacto telefónico difícil, pero excelente contacto por WhatsApp. Formales, profesionales y buen precio.',
      },
      {
        name: 'Sérgio Santos',
        location: 'Cliente Verificado',
        text: 'Satisfechos con el trabajo, los trabajadores muy profesionales y competentes.',
      },
      {
        name: 'Quiroyanna',
        location: 'Cliente Verificado',
        text: 'Encantada con el servicio. Vinieron a instalar una red de seguridad para mi bebé y fueron increíblemente atentos en todo momento. Dedicaron el tiempo necesario para garantizar que la red quedara perfectamente firme y bien colocada, revisando cada detalle y explicándome cómo quedaba todo. Me transmitieron mucha confianza y profesionalismo. Ahora puedo estar tranquila sabiendo que mi bebé está mucho más seguro. ¡Lo recomiendo 100%!',
      },
    ],
  },
  contact: {
    tag: 'Contacta con Nosotros',
    title: '¿Listo para proteger tu hogar?',
    description:
      'Solicita tu presupuesto gratuito y sin compromiso hoy mismo. Nuestro equipo te asesorará sobre la mejor solución para tu espacio.',
    callTitle: 'Llámanos',
    callLabel: 'Porto y Norte',
    writeTitle: 'Escríbenos',
    instagramTitle: 'Síguenos',
    instagramHandle: '@preventivanorte',
    serviceAreaTitle: 'Área de Servicio',
    serviceAreaText: 'Norte de Portugal',
    serviceAreaSub: 'Porto, Braga, Gaia y alrededores.',
    formTitle: 'Solicitar Presupuesto',
    formName: 'Nombre',
    formPhone: 'Teléfono',
    formEmail: 'Email',
    formPostal: 'Código Postal',
    formMessage: 'Mensaje',
    formNamePlaceholder: 'Tu nombre',
    formMessagePlaceholder:
      'Ej: Ventana del Salón - 1,5m x 1,2m\nBalcón - 3m de ancho x 1,60m de alto',
    formAttachments: 'Adjuntar fotos y documentos',
    formSubmit: 'Enviar Solicitud',
    formSending: 'Enviando...',
    formSuccessTitle: '¡Mensaje Enviado!',
    formSuccessDesc:
      'Gracias por contactarnos. Te responderemos lo antes posible.',
    formSendAnother: 'Enviar otro mensaje',
    formError:
      'Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.',
    formPrivacy: 'Al enviar aceptas nuestra política de privacidad.',
    subject: 'Nuevo mensaje de Preventiva Norte',
  },
  footer: {
    description:
      'Especialistas en la instalación de redes de protección de alta resistencia en Porto y el Norte de Portugal. Seguridad certificada para balcones, ventanas, terrazas, niños y mascotas.',
    quickLinksTitle: 'Enlaces Rápidos',
    protectionForTitle: 'Protección Para',
    contactTitle: 'Contacto',
    copyright: 'Todos los derechos reservados.',
    legalNotice: 'Aviso Legal',
    privacyPolicy: 'Política de Privacidad',
    cookies: 'Cookies',
    mobileLabel: 'Porto',
    serviceArea: 'Porto y Área Metropolitana.',
    serviceAreaSub: 'Servicio en todo el Norte de Portugal.',
    quickLinks: [
      { label: 'Inicio', href: '/' },
      {
        label: 'Pruebas y Certificaciones',
        href: '/testes-certificaciones',
      },
      { label: 'Nuestros Servicios', href: '/#servicios' },
      { label: 'Galería', href: '/#galeria' },
      { label: 'Contacto', href: '/#contacto' },
    ],
    protectionLinks: [
      { label: 'Seguridad Infantil', href: '/proteccion#ninos' },
      { label: 'Redes para Gatos', href: '/proteccion#gatos' },
      {
        label: 'Control de Aves (Palomas)',
        href: '/proteccion#aves',
      },
      { label: 'Terrazas y Balcones', href: '/#servicios' },
      { label: 'Ventanas y Escaleras', href: '/#servicios' },
    ],
  },
  whatsapp: {
    message: 'Hola, me gustaría más información sobre las redes de protección.',
    ariaLabel: 'Contactar por WhatsApp',
  },
  cookie: {
    text: 'Utilizamos cookies propias y de terceros para mejorar su experiencia y nuestros servicios, analizando la navegación en nuestro sitio web. Si continúa navegando, consideramos que acepta su uso. Puede obtener más información en nuestra',
    linkText: 'Política de Privacidad',
    linkHref: '/es/politica-privacitat',
    accept: 'Aceptar',
    close: 'Cerrar',
  },
  proteccion: {
    heroTag: 'Seguridad Integral en todo el Norte de Portugal',
    heroTitle: 'Protección',
    heroTitleHighlight: 'Total',
    heroDescription:
      'Soluciones especializadas en redes de seguridad para niños, mascotas y control de aves en todo el Norte (Porto, Braga, Guimarães, Famalicão y alrededores). Resistencia, estética y tranquilidad garantizadas.',
    heroCtaWhatsapp: 'Presupuesto por WhatsApp',
    heroCtaSolutions: 'Ver Soluciones',
    navNinos: 'Seguridad Infantil',
    navGatos: 'Protección Gatos',
    navAves: 'Control de Aves',
    ninosTitle: 'Seguridad Infantil:',
    ninosSubtitle: 'Tranquilidad para los Padres',
    ninosDescription:
      'Protege a los que más quieres en tu hogar. Solución discreta y resistente, con seguridad certificada para ventanas, balcones y escaleras sin sacrificar la luminosidad de tu vivienda.',
    ninosF1Title: 'Resistencia Certificada',
    ninosF1Desc:
      'Soportan el peso y el impacto accidental de un niño en todo momento.',
    ninosF2Title: 'Sustitución de Rejas',
    ninosF2Desc:
      'Estética limpia y discreta que sustituye las pesadas rejas de hierro.',
    ninosF3Title: 'Sin Aristas',
    ninosF3Desc: 'Suaves al tacto y seguras para toda la familia.',
    ninosF4Title: 'Instalación Profesional',
    ninosF4Desc: 'Técnicos especialistas en todo el Norte de Portugal.',
    ninosQuote:
      'No esperes a que tu hijo empiece a gatear o escalar. Protege tu hogar hoy.',
    ninosCta: 'Pide una visita técnica gratuita',
    ninosOverlay:
      'Casi imperceptible a la vista, total protección para tus hijos.',
    ninosBrand: 'Premium Safety Mesh Portugal',
    gatosTitle: 'Protección Total para tus Gatos:',
    gatosSubtitle: 'Redes Anti-Caídas',
    gatosDescription:
      'Evita el temido "Síndrome del Paracaidista". Instalamos redes ultrarresistentes en balcones de todo el Norte de Portugal. Diseñadas para que tus felinos disfruten de la brisa con total seguridad.',
    gatosF1Title: 'Instalación sin Huecos',
    gatosF1Desc:
      'Garantizamos el cierre perimetral completo, sin espacios por donde puedan escapar.',
    gatosF2Title: 'Estética Integrada',
    gatosF2Desc:
      'Redes de bajo grosor que pasan desapercibidas en las fachadas.',
    gatosCta: 'Presupuesto por WhatsApp',
    avesTitle: 'Control de Aves:',
    avesSubtitle: 'Solución Definitiva contra Palomas',
    avesDescription:
      'En las ciudades del Norte, el problema de las palomas es una plaga urbana persistente. Nuestras redes crean un bloqueo físico que impide que las aves aniden o se posen, de forma definitiva y ética.',
    avesF1Title: 'Higiene y Salud',
    avesF1Desc: 'Evita excrementos ácidos, ácaros y bacterias.',
    avesF2Title: 'Mantenimiento A/C',
    avesF2Desc: 'Mantiene equipos de aire y ventanas limpias.',
    avesF3Title: 'Solución Ética',
    avesF3Desc: 'Barrera física real sin dañar a los animales.',
    avesF4Title: 'Especial Patios de Luces',
    avesF4Desc: 'Especialistas en cerramientos de patios de luces e interiores.',
    avesCtaTitle: '¿Harto de las palomas?',
    avesCtaDesc:
      'Acaba hoy con el problema. Presupuesto sin compromiso para comunidades de vecinos y particulares en todo el Norte.',
    avesCta: 'Solicitar por WhatsApp',
    finalTitle: '¿Qué necesitas proteger hoy?',
    finalDescription:
      'Nuestro equipo técnico está listo para asesorarte. Instalaciones profesionales en todo el Norte de Portugal.',
    finalCtaForm: 'Formulario de Contacto',
  },
  certificaciones: {
    heroTitle: 'Seguridad Certificada y',
    heroTitleHighlight: 'Calidad Técnica',
    heroDescription:
      'En Preventiva Norte, la seguridad no es una promesa, es una certificación técnica. Utilizamos materiales de última generación diseñados para resistir las condiciones climáticas de Portugal.',
    materialTitle: 'Polietileno de Alta Tenacidad (Virgen)',
    materialDescription:
      'Nuestras redes están fabricadas con Polietileno de Alta Densidad (PEAD) 100% virgen. A diferencia del nylon convencional, nuestro material no absorbe humedad, lo que evita que la red se debilite con la lluvia o la nieve.',
    materialF1: 'No absorbe agua ni se pudre',
    materialF2: 'Mantiene la tensión mecánica durante años',
    materialF3: 'Resistente a agentes químicos y ambientales',
    fixingTitle: 'Sistema de Fijación de Alta Performance',
    fixingDescription:
      'No solo la red es premium; nuestro sistema de anclaje utiliza tacos expansivos y ganchos de acero galvanizado o inoxidable, diseñados para fijarse firmemente en ladrillo, hormigón o estructuras metálicas, sin riesgo de desprendimiento.',
    ctaTitle: '¿Protegemos tu casa con calidad certificada?',
    ctaDescription:
      'Solicita una visita técnica gratuita en el Norte de Portugal y comprueba la calidad de nuestros materiales.',
    ctaButton: 'Solicitar Presupuesto Gratis',
    specs: [
      {
        title: 'Tratamiento Anti-UV',
        text: 'Equipadas con doble tratamiento Anti-UV y antioxidantes. Soportan la intensa radiación solar sin cristalizarse ni perder su color. Este componente técnico es lo que nos permite ofrecer una garantía real de durabilidad.',
      },
      {
        title: 'Resistencia de 150kg/m²',
        text: 'Seguridad Mecánica: Nuestras redes están testadas para soportar una presión de hasta 150 kg por metro cuadrado. Un nivel superior a los estándares del mercado, garantizando una barrera infranqueable ante caídas accidentales.',
      },
      {
        title: 'Material Ignífugo',
        text: 'Material No Tóxico e Ignífugo: Nuestras redes no son inflamables (no propagan el fuego) y son totalmente seguras para el contacto con niños y animales, cumpliendo con la normativa europea.',
      },
      {
        title: 'Impacto Visual Mínimo',
        text: 'Con un grosor optimizado de 0.8mm a 1mm, nuestras redes ofrecen un impacto visual mínimo. Son aceptadas por la mayoría de las comunidades de vecinos en Portugal.',
      },
    ],
  },
  privacyPolicy: {
    title: 'Política de Privacidad',
    intro:
      'En Preventiva Norte, nos comprometemos a proteger y respetar su privacidad. Esta Política de Privacidad explica cómo recopilamos, utilizamos y protegemos sus datos personales de acuerdo con el Reglamento General de Protección de Datos (RGPD) de la Unión Europea y la legislación portuguesa vigente.',
    s1Title: '1. Responsable del Tratamiento',
    s1Content:
      'Los datos personales recabados a través de este sitio web son responsabilidad de Preventiva Norte. Correo electrónico de contacto: comercial@preventivanorte.pt. Teléfono: 910 407 785. Ubicación: Portugal (Prestamos servicio en todo el Norte de Portugal).',
    s2Title: '2. Finalidad del Tratamiento',
    s2Intro:
      'Recopilamos y tratamos sus datos personales con las siguientes finalidades:',
    s2Items: [
      'Atención de solicitudes: Para gestionar las consultas, solicitudes de presupuesto o información enviadas a través de nuestros formularios de contacto o canales de comunicación (WhatsApp, correo electrónico, teléfono).',
      'Prestación de servicios: Para llevar a cabo la instalación de redes de protección y servicios contratados, incluyendo la facturación y gestión administrativa.',
      'Mejora del servicio: Para analizar el uso de nuestra web mediante cookies (ver sección de Cookies) y mejorar la experiencia del usuario.',
    ],
    s3Title: '3. Legitimación',
    s3Content:
      'La base legal para el tratamiento de sus datos es su consentimiento explícito al enviar un formulario de contacto o aceptar nuestras cookies, así como la ejecución de un contrato en caso de contratación de nuestros servicios.',
    s4Title: '4. Destinatarios de los Datos',
    s4Content:
      'Sus datos no serán cedidos a terceros, salvo obligación legal o cuando sea necesario para la prestación del servicio (por ejemplo, empresas de transporte o instaladores colaboradores, siempre bajo acuerdos de confidencialidad).',
    s5Title: '5. Derechos del Usuario',
    s5Intro: 'Usted tiene derecho a:',
    s5Items: [
      'Acceder a sus datos personales.',
      'Rectificar datos inexactos o incompletos.',
      'Solicitar la eliminación de sus datos cuando ya no sean necesarios.',
      'Oponerse al tratamiento o solicitar su limitación.',
      'Portabilidad de sus datos.',
    ],
    s5Footer:
      'Para ejercer estos derechos, puede enviar un correo electrónico a comercial@preventivanorte.pt indicando el derecho que desea ejercer.',
    s6Title: '6. Seguridad de los Datos',
    s6Content:
      'Implementamos medidas técnicas y organizativas adecuadas para proteger sus datos personales contra el acceso no autorizado, la pérdida o la alteración.',
    s7Title: '7. Uso de Cookies',
    s7Content:
      'Este sitio web utiliza cookies propias y de terceros para mejorar la navegación y obtener datos estadísticos. Usted puede configurar su navegador para rechazar las cookies, aunque esto podría afectar el funcionamiento de la web.',
    s8Title: '8. Cambios en la Política de Privacidad',
    s8Content:
      'Preventiva Norte se reserva el derecho de modificar esta política para adaptarla a novedades legislativas o jurisprudenciales. Se recomienda su lectura periódica.',
    lastUpdated: 'Última actualización:',
  },
  highlights: {
    title: '¿La comunidad puede prohibirlo?',
    subtitle: 'Información útil y sentencias favorables para quien quiera proteger su casa.',
    comingSoonLabel: 'Próximamente',
    watchLabel: 'Toca para ver con sonido',
    videosGroupTitle: 'Vídeos',
    legalParagraphs: [
      'Según el artículo 1422.º del Código Civil portugués, los propietarios no pueden perjudicar la seguridad, la línea arquitectónica o el aspecto estético del edificio con obras nuevas. Sin embargo, una red de protección no se considera "obra nueva": es una estructura amovible, sin elementos metálicos visibles, hecha de filamentos de polietileno entrelazados que son prácticamente imperceptibles vistos desde el exterior — y puede retirarse fácilmente, ya que se fija con pequeños ganchos junto a la ventana.',
      'En respuesta a una consulta sobre este tema, el departamento jurídico de DECO Proteste confirmó por escrito que una estructura amovible de este tipo puede instalarse sin necesidad de aprobación previa de la junta de propietarios.',
      'También existe jurisprudencia favorable: un tribunal consideró que una estructura amovible para acristalar un balcón no afecta la línea arquitectónica del edificio — el mismo principio que se aplica a las redes de protección.',
    ],
    legalCartaLabel: 'Carta a la Comunidad de Vecinos',
    legalSentencaLabel: 'Sentencia Favorable',
    items: [
      {
        title: 'Vídeo: Maracujá Roxo',
        description: 'Vea en vídeo una de nuestras instalaciones de red de protección.',
        href: '/video-maracuja-roxo.mp4',
      },
      {
        title: 'Vídeo: Cris Azen',
        description: 'Vea en vídeo una más de nuestras instalaciones de red de protección.',
        href: 'https://www.youtube.com/watch?v=XZbwHSxPnZQ',
      },
    ],
  },
};
