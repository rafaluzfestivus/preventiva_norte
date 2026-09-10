import type { SiteDict } from './types';

// Real Preventiva Norte (Portuguese) copy, ported from the archived legacy
// Next.js repo (preventiva_norte_legacy) and the already-reviewed real
// content in this repo's own components (Footer, WhatsAppButton,
// CookieConsent, Navbar), which took priority where it existed since it is
// the most recently vetted, locale-routing-aware version of that text.
export const pt: SiteDict = {
  locale: 'pt',
  navbar: {
    inicio: 'Início',
    nosotros: 'Sobre Nós',
    certificaciones: 'Certificações',
    proteccion: 'Proteção',
    servicios: 'Serviços',
    contacto: 'Contacto',
    llamarAhora: 'Ligar Agora',
    solicitarPresupuesto: 'Pedir Orçamento',
    abrirMenu: 'Abrir menu',
    basePath: '',
  },
  hero: {
    badge: 'Segurança Certificada',
    title1: 'Redes de Proteção',
    title2: 'para o seu Lar',
    description:
      'Especialistas na instalação de <strong>redes de segurança no Norte de Portugal</strong>. Proteção certificada para crianças e gatos em varandas e janelas sem perder as vistas.',
    ctaPrimary: 'Pedir Orçamento GRÁTIS',
    ctaSecondary: 'Ver Instalações',
    scrollHint: 'Descubra mais',
    logoAlt: 'Preventiva Norte - Instalação de Redes no Porto',
  },
  trustBar: {
    certified: 'CE Certificado',
    guarantee: 'Garantia',
    guaranteeHighlight: 'Total',
  },
  services: {
    title: 'Soluções de Segurança Integral',
    subtitle:
      'Adaptamos as nossas redes de proteção a qualquer espaço e necessidade, garantindo a máxima resistência.',
    readMore: 'Ler mais →',
    carouselPrev: 'Foto anterior',
    carouselNext: 'Próxima foto',
    carouselGoToPrefix: 'Ir para foto ',
    items: [
      {
        title: 'Redes para Gatos',
        description:
          "Especialistas em redes de proteção anti-queda. Evite o 'síndrome do paraquedista' com as nossas malhas de segurança.",
        href: '/proteccion#gatos',
        photos: ['/img-1.jpg', '/gallery-1.jpg'],
      },
      {
        title: 'Segurança Infantil',
        description:
          'Proteção certificada para janelas, varandas e escadas. Substituição de grades com estética limpa.',
        href: '/proteccion#ninos',
        photos: ['/img-2.jpg', '/gallery-2.jpg'],
      },
      {
        title: 'Controlo de Aves',
        description:
          'Solução definitiva contra pombos no Porto e Norte. Higiene e proteção ética para o seu edifício.',
        href: '/proteccion#aves',
        photos: ['/img-3.jpg', '/gallery-3.jpg'],
      },
      {
        title: 'Redes Desportivas',
        description:
          'Redes de proteção para campos, pavilhões, ginásios e recintos desportivos.',
        photos: ['/img-4.jpg', '/gallery-4.jpg'],
      },
      {
        title: 'Redes para Terraços',
        description:
          'Segurança e proteção para os seus terraços e varandas sem impacto visual.',
        photos: ['/img-5.jpg', '/gallery-5.jpg'],
      },
      {
        title: 'Construção Civil e Industrial',
        description:
          'Redes de proteção e segurança para obras, fachadas e instalações industriais em todo o Norte de Portugal.',
        photos: ['/img-6.jpg', '/gallery-6.jpg'],
      },
    ],
  },
  benefits: {
    tag: 'Porquê Escolher-nos',
    title1: 'Segurança que não se vê,',
    title2: 'tranquilidade que se sente',
    description:
      'As nossas redes de polietileno de alta tenacidade são a opção preferida por famílias e arquitetos. Combinam a máxima segurança técnica com um impacto visual mínimo.',
    items: [
      'Resistência Certificada: Suportam até 150kg/m².',
      'Tratamento Anti-UV: Longa durabilidade expostas ao sol.',
      'Máxima Estética: Não alteram a fachada nem as vistas.',
      'Material Ignífugo e Não Tóxico.',
      'Instalação sem obras incómodas.',
      'Garantia de 2 anos em materiais e instalação.',
    ],
    quote: 'O melhor serviço',
    quoteDesc:
      'Instalação rápida e o resultado é impecável. Muito recomendados.',
  },
  whyUs: {
    reasons: [
      {
        title: 'Instaladores Próprios',
        description:
          'Não subcontratamos. O nosso pessoal é especializado exclusivamente em redes de alta segurança.',
      },
      {
        title: 'Atendimento Ágil',
        description:
          'Orçamentos por WhatsApp em tempo recorde e prazos de instalação mínimos em todo o Norte de Portugal.',
      },
      {
        title: 'Certificação Técnica',
        description:
          'Apenas utilizamos polietileno virgem, testado para suportar 150kg/m².',
      },
    ],
  },
  aboutUs: {
    tag: 'A Nossa História',
    title: 'Sobre',
    titleHighlight: 'Nós',
    p1: 'Após o sucesso da Preventiva Norte (cobrindo o Norte de Portugal e Galiza), Preventiva Centro e Preventiva Sul, consolidamos a nossa presença para oferecer as melhores soluções de segurança no mercado ibérico.',
    p2: 'A Preventiva Norte Redes de Proteção é atualmente a principal empresa no Norte de Portugal na instalação e venda de kits de redes de proteção. Fomos criados para responder às necessidades de quem convive com riscos de acidentes no lar, garantindo a proteção da vida e a integridade física, sobretudo de crianças e animais de estimação, contra o perigo de quedas em janelas, varandas, terraços, escadas e outras aberturas.',
    p3: 'Além disso, oferecemos soluções eficazes para impedir a entrada de aves indesejadas, garantindo a higiene e o usufruto pleno de terraços e varandas.',
  },
  testimonials: {
    title: 'O que dizem os nossos clientes',
    verMas: 'Ver mais',
    items: [
      {
        name: 'Teresa Roue',
        location: 'Porto',
        text: 'O atendimento via WhatsApp foi muito rápido e eficaz. Poucos dias depois já estavam a instalar a rede. Os técnicos que vieram foram super simpáticos, a rede ficou muito bem e os meus gatos já podem andar pela varanda tranquilamente :) Económicos e profissionais! Deixo fotos *-*',
      },
      {
        name: 'Evelina Zikrach',
        location: 'Braga',
        text: 'A instalação foi de luxo, tudo feito com o máximo cuidado e diligência. Queríamos uma instalação de rede sem teto no pátio frontal para que os nossos gatos não saíssem e, no momento da instalação, garantiram que não houvesse frestas ou saídas possíveis. Os instaladores foram muito pontuais e amáveis. No geral, muito satisfeitos com o trato da empresa, eficiência e qualidade. Nota 10/10.',
      },
      {
        name: 'Elena Jodar',
        location: 'Cliente Verificado',
        text: 'Contacto telefónico difícil, mas excelente contacto por WhatsApp. Formais, profissionais e bom preço.',
      },
      {
        name: 'Sérgio Santos',
        location: 'Cliente Verificado',
        text: 'Satisfeitos com o trabalho, os trabalhadores muito profissionais e competentes.',
      },
      {
        name: 'Quiroyanna',
        location: 'Cliente Verificado',
        text: 'Encantada com o serviço. Vieram instalar uma rede de segurança para o meu bebé e foram incrivelmente atenciosos em todos os momentos. Dedicaram o tempo necessário para garantir que a rede ficasse perfeitamente firme e bem colocada, revendo cada detalhe e explicando-me como ficava tudo. Transmitiram-me muita confiança e profissionalismo. Agora posso estar tranquila sabendo que o meu bebé está muito mais seguro. Recomendo 100%!',
      },
    ],
  },
  contact: {
    tag: 'Contacte-nos',
    title: 'Pronto para proteger o seu lar?',
    description:
      'Peça o seu orçamento gratuito e sem compromisso hoje mesmo. A nossa equipa irá aconselhá-lo sobre a melhor solução para o seu espaço.',
    callTitle: 'Ligue-nos',
    callLabel: 'Porto e Norte',
    writeTitle: 'Escreva-nos',
    serviceAreaTitle: 'Área de Serviço',
    serviceAreaText: 'Norte de Portugal',
    serviceAreaSub: 'Porto, Braga, Gaia e arredores.',
    formTitle: 'Pedir Orçamento',
    formName: 'Nome',
    formPhone: 'Telemóvel',
    formEmail: 'Email',
    formPostal: 'Código Postal',
    formMessage: 'Mensagem',
    formNamePlaceholder: 'O seu nome',
    formMessagePlaceholder:
      'Ex: Janela da Sala - 1,5m x 1,2m\nVaranda - 3m de largura x 1,60m de altura',
    formAttachments: 'Anexar fotos e documentos',
    formSubmit: 'Enviar Pedido',
    formSending: 'A enviar...',
    formSuccessTitle: 'Mensagem Enviada!',
    formSuccessDesc:
      'Obrigado por nos contactar. Responderemos o mais breve possível.',
    formSendAnother: 'Enviar outra mensagem',
    formError:
      'Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente.',
    formPrivacy: 'Ao enviar aceita a nossa política de privacidade.',
    subject: 'Nova mensagem de Preventiva Norte',
  },
  footer: {
    description:
      'Especialistas em instalação de redes de proteção de alta resistência no Porto e Norte de Portugal. Segurança certificada para varandas, janelas, terraços, crianças e animais de estimação.',
    quickLinksTitle: 'Links Rápidos',
    protectionForTitle: 'Proteção Para',
    contactTitle: 'Contacto',
    copyright: 'Todos os direitos reservados.',
    legalNotice: 'Aviso Legal',
    privacyPolicy: 'Política de Privacidade',
    cookies: 'Cookies',
    mobileLabel: 'Porto',
    serviceArea: 'Porto e Área Metropolitana.',
    serviceAreaSub: 'Serviço em todo o Norte de Portugal.',
    quickLinks: [
      { label: 'Início', href: '/' },
      {
        label: 'Testes e Certificações',
        href: '/testes-certificaciones',
      },
      { label: 'Os Nossos Serviços', href: '/#servicios' },
      { label: 'Contacto', href: '/#contacto' },
    ],
    protectionLinks: [
      { label: 'Segurança Infantil', href: '/proteccion#ninos' },
      { label: 'Redes para Gatos', href: '/proteccion#gatos' },
      {
        label: 'Controlo de Aves (Pombos)',
        href: '/proteccion#aves',
      },
      { label: 'Terraços e Varandas', href: '/#servicios' },
      { label: 'Janelas e Escadas', href: '/#servicios' },
    ],
  },
  whatsapp: {
    message: 'Olá, gostaria de mais informações sobre as redes de proteção.',
    ariaLabel: 'Contactar via WhatsApp',
  },
  cookie: {
    text: 'Utilizamos cookies próprios e de terceiros para melhorar a sua experiência e os nossos serviços, analisando a navegação no nosso website. Se continuar a navegar, consideramos que aceita a sua utilização. Pode obter mais informação na nossa',
    linkText: 'Política de Privacidade',
    linkHref: '/politica-privacidade',
    accept: 'Aceitar',
    close: 'Fechar',
  },
  proteccion: {
    heroTag: 'Segurança Integral em todo o Norte de Portugal',
    heroTitle: 'Proteção',
    heroTitleHighlight: 'Total',
    heroDescription:
      'Soluções especializadas em redes de segurança para crianças, animais de estimação e controlo de aves em todo o Norte (Porto, Braga, Guimarães, Famalicão e arredores). Resistência, estética e tranquilidade garantida.',
    heroCtaWhatsapp: 'Orçamento por WhatsApp',
    heroCtaSolutions: 'Ver Soluções',
    navNinos: 'Segurança Infantil',
    navGatos: 'Proteção Gatos',
    navAves: 'Controlo de Aves',
    ninosTitle: 'Segurança Infantil:',
    ninosSubtitle: 'Tranquilidade para os Pais',
    ninosDescription:
      'Proteja os que mais ama na sua casa. Solução discreta e resistente, com segurança certificada para janelas, varandas e escadas sem sacrificar a luminosidade da sua habitação.',
    ninosF1Title: 'Resistência Certificada',
    ninosF1Desc:
      'Suportam o peso e o impacto acidental de uma criança em todos os momentos.',
    ninosF2Title: 'Substituição de Grades',
    ninosF2Desc:
      'Estética limpa e discreta que substitui as pesadas grades de ferro.',
    ninosF3Title: 'Sem Arestas',
    ninosF3Desc: 'Suaves ao toque e seguras para toda a família.',
    ninosF4Title: 'Instalação Profissional',
    ninosF4Desc: 'Técnicos especialistas em todo o Norte de Portugal.',
    ninosQuote:
      'Não espere que o seu filho comece a gatinhar ou a escalar. Proteja a sua casa hoje.',
    ninosCta: 'Peça visita técnica gratuita',
    ninosOverlay:
      'Quase impercetível para a vista, total proteção para os seus filhos.',
    ninosBrand: 'Premium Safety Mesh Portugal',
    gatosTitle: 'Proteção Total para os seus Gatos:',
    gatosSubtitle: 'Redes Anti-Quedas',
    gatosDescription:
      'Evite a temida "Síndrome do Paraquedista". Instalamos redes ultra-resistentes em varandas de todo o Norte de Portugal. Desenhadas para que os seus felinos desfrutem da brisa com total segurança.',
    gatosF1Title: 'Instalação sem Folgas',
    gatosF1Desc:
      'Garantimos o fecho perimetral completo, sem espaços por onde possam escapar.',
    gatosF2Title: 'Estética Integrada',
    gatosF2Desc:
      'Redes de baixa espessura que passam despercebidas nas fachadas.',
    gatosCta: 'Orçamento por WhatsApp',
    avesTitle: 'Controlo de Aves:',
    avesSubtitle: 'Solução Definitiva contra Pombos',
    avesDescription:
      'Nas cidades do Norte, o problema dos pombos é uma praga urbana persistente. As nossas redes criam um bloqueio físico que impede que as aves aninhem ou se pousem de forma definitiva e ética.',
    avesF1Title: 'Higiene e Saúde',
    avesF1Desc: 'Evita excrementos ácidos, ácaros e bactérias.',
    avesF2Title: 'Manutenção A/C',
    avesF2Desc: 'Mantém equipamentos de ar e janelas limpas.',
    avesF3Title: 'Solução Ética',
    avesF3Desc: 'Barreira física real sem magoar os animais.',
    avesF4Title: 'Especial Saguões',
    avesF4Desc: 'Especialistas em fechamentos de saguões e pátios.',
    avesCtaTitle: 'Farto dos pombos?',
    avesCtaDesc:
      'Acabe hoje com o problema. Orçamento sem compromisso para condomínios e particulares em todo o Norte.',
    avesCta: 'Pedir por WhatsApp',
    finalTitle: 'O que precisa proteger hoje?',
    finalDescription:
      'A nossa equipa técnica está pronta para o aconselhar. Instalações profissionais em todo o Norte de Portugal.',
    finalCtaForm: 'Formulário de Contacto',
  },
  certificaciones: {
    heroTitle: 'Segurança Certificada e',
    heroTitleHighlight: 'Qualidade Técnica',
    heroDescription:
      'Na Preventiva Norte, a segurança não é uma promessa, é uma certificação técnica. Utilizamos materiais de última geração desenhados para resistir às condições climáticas de Portugal.',
    materialTitle: 'Polietileno de Alta Tenacidade (Virgem)',
    materialDescription:
      'As nossas redes são fabricadas com Polietileno de Alta Densidade (PEAD) 100% virgem. Ao contrário do nylon convencional, o nosso material não absorve humidade, o que evita que a rede se debilite com a chuva ou a neve.',
    materialF1: 'Não absorve água nem apodrece',
    materialF2: 'Mantém a tensão mecânica por anos',
    materialF3: 'Resistente a agentes químicos e ambientais',
    fixingTitle: 'Sistema de Fixação de Alta Performance',
    fixingDescription:
      'Não só a rede é premium; o nosso sistema de ancoragem utiliza buchas expansivas e ganchos de aço galvanizado ou inoxidável, desenhados para se fixarem firmemente em tijolo, betão ou estruturas metálicas, sem risco de desprendimento.',
    ctaTitle: 'Protegemos a sua casa com qualidade certificada?',
    ctaDescription:
      'Peça uma visita técnica gratuita no Norte de Portugal e comprove a qualidade dos nossos materiais.',
    ctaButton: 'Solicitar Orçamento Grátis',
    specs: [
      {
        title: 'Tratamento Anti-UV',
        text: 'Equipadas com duplo tratamento Anti-UV e antioxidantes. Suportam a intensa radiação solar sem cristalizar nem perder a sua cor. Este componente técnico é o que nos permite oferecer uma garantia real de durabilidade.',
      },
      {
        title: 'Resistência de 150kg/m²',
        text: 'Segurança Mecânica: As nossas redes são testadas para suportar uma pressão de até 150 kg por metro quadrado. Um nível superior aos padrões do mercado, garantindo uma barreira intransponível perante quedas acidentais.',
      },
      {
        title: 'Material Ignífugo',
        text: 'Material Não Tóxico e Ignífugo: As nossas redes não são inflamáveis (não propagam o fogo) e são totalmente seguras para o contacto com crianças e animais, cumprindo com as normativas europeias.',
      },
      {
        title: 'Impacto Visual Mínimo',
        text: 'Com uma espessura otimizada de 0.8mm a 1mm, as nossas redes oferecem um impacto visual mínimo. São aceites pela maioria dos condomínios em Portugal.',
      },
    ],
  },
  privacyPolicy: {
    title: 'Política de Privacidade',
    intro:
      'Na Preventiva Norte, comprometemo-nos a proteger e respeitar a sua privacidade. Esta Política de Privacidade explica como recolhemos, utilizamos e protegemos os seus dados pessoais de acordo com o Regulamento Geral de Proteção de Dados (RGPD) da União Europeia e a legislação portuguesa vigente.',
    s1Title: '1. Responsável pelo Tratamento',
    s1Content:
      'Os dados pessoais recolhidos através deste website são da responsabilidade da Preventiva Norte. E-mail de contacto: comercial@preventivanorte.pt. Telefone: 910 407 785. Localização: Portugal (Prestamos serviço em todo o Norte de Portugal).',
    s2Title: '2. Finalidade do Tratamento',
    s2Intro:
      'Recolhemos e tratamos os seus dados pessoais com as seguintes finalidades:',
    s2Items: [
      'Atendimento de pedidos: Para gerir as consultas, pedidos de orçamento ou informações enviadas através dos nossos formulários de contacto ou canais de comunicação (WhatsApp, e-mail, telefone).',
      'Prestação de serviços: Para levar a cabo a instalação de redes de proteção e serviços contratados, incluindo a faturação e gestão administrativa.',
      'Melhoria do serviço: Para analisar o uso da nossa web mediante cookies (ver secção de Cookies) e melhorar a experiência do utilizador.',
    ],
    s3Title: '3. Legitimação',
    s3Content:
      'A base legal para o tratamento dos seus dados é o seu consentimento explícito ao enviar um formulário de contacto ou aceitar os nossos cookies, assim como a execução de um contrato em caso de contratação dos nossos serviços.',
    s4Title: '4. Destinatários dos Dados',
    s4Content:
      'Os seus dados não serão cedidos a terceiros, salvo obrigação legal ou quando seja necessário para a prestação do serviço (por exemplo, empresas de transporte ou instaladores colaboradores, sempre sob acordos de confidencialidade).',
    s5Title: '5. Direitos do Utilizador',
    s5Intro: 'Você tem direito a:',
    s5Items: [
      'Aceder aos seus dados pessoais.',
      'Retificar dados inexatos ou incompletos.',
      'Solicitar a eliminação dos seus dados quando já não sejam necessários.',
      'Opor-se ao tratamento ou solicitar a sua limitação.',
      'Portabilidade dos seus dados.',
    ],
    s5Footer:
      'Para exercer estes direitos, pode enviar um e-mail para comercial@preventivanorte.pt indicando o direito que deseja exercer.',
    s6Title: '6. Segurança dos Dados',
    s6Content:
      'Implementamos medidas técnicas e organizativas adequadas para proteger os seus dados pessoais contra o acesso não autorizado, a perda ou a alteração.',
    s7Title: '7. Uso de Cookies',
    s7Content:
      'Este website utiliza cookies próprias e de terceiros para melhorar a navegação e obter dados estatísticos. Você pode configurar o seu navegador para rejeitar as cookies, embora isso possa afetar o funcionamento da web.',
    s8Title: '8. Alterações na Política de Privacidade',
    s8Content:
      'A Preventiva Norte reserva-se o direito de modificar esta política para a adaptar a novidades legislativas ou jurisprudenciais. Recomenda-se a sua leitura periódica.',
    lastUpdated: 'Última atualização:',
  },
  highlights: {
    title: 'Destaques',
    subtitle:
      'Informação útil, decisões favoráveis e parceiros para quem quer proteger a sua casa e os seus animais.',
    comingSoonLabel: 'Em breve',
    watchLabel: 'Assistir vídeo',
    items: [
      {
        title: 'Decisão Judicial Favorável',
        description:
          'Sentença do Juizado de Paz confirma: as redes de proteção não precisam de autorização prévia do condomínio.',
        href: '/recursos/direito-condominio#sentenca',
        kind: 'internal',
      },
      {
        title: 'Carta ao Condomínio',
        description:
          'Um modelo de carta pronto a apresentar à administração do seu condomínio, com base no Código Civil português.',
        href: '/recursos/direito-condominio#carta-condominio',
        kind: 'internal',
      },
      {
        title: 'Vídeo: Maracujá Roxo',
        description: 'Veja em vídeo uma das nossas instalações de rede de proteção.',
        href: '/video-maracuja-roxo.mp4',
        kind: 'video',
      },
      {
        title: 'Vídeo: Cris Azen',
        description: 'Em breve.',
        href: '#',
        kind: 'video',
      },
      {
        title: 'Barkibu — Seguro para o seu Animal',
        description:
          'Proteja também a saúde do seu cão ou gato com o seguro veterinário da Barkibu.',
        href: 'https://www.barkibu.com/pt',
        kind: 'external',
      },
    ],
  },
};
