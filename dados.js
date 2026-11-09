// ====== TODO O CONTEÚDO E TODAS AS IMAGENS DO SITE FICAM AQUI ======
// Cada item tem as mesmas lacunas de imagem (basta colar o caminho entre as aspas):
//   img     -> foto do card na home
//   hero    -> foto grande no topo da página de detalhe
//   galeria -> as 2 fotos da página de detalhe
//   mapa    -> imagem de localização da página de detalhe
// Lacuna vazia ("") = bloco de cor no lugar. Exemplo: img: "img/minha-foto.jpg"
// A foto do topo da home fica em index.html (procure por HERO DA HOME).
const SECOES = {
  atrativos: { titulo: "Atrativos", cat: "Atrativo", icone: "bi-geo-alt", itens: [
    { id: "pedra-do-inga", nome: "Parque Estadual Pedra do Ingá", resumo: "O monumento arqueológico mais famoso do Brasil, com milhares de inscrições rupestres feitas há milhares de anos.",
      img: "img/pedra-do-inga.jpg",
      hero: "",
      galeria: ["", ""],
      mapa: ""
    },
    { id: "museu", nome: "Museu de História Natural", resumo: "Abriga um acervo impressionante de fósseis que contam a história da megafauna e da formação geológica do Agreste.",
      img: "img/museu.jpg",
      hero: "",
      galeria: ["", ""],
      mapa: ""
    },
    { id: "salao-artesanato", nome: "Salão de Artesanato", resumo: "Um espaço vibrante onde os talentosos artesãos locais expõem suas obras: cerâmica rústica, bordados e algodão orgânico.",
      img: "img/salao-artesanato.jpg",
      hero: "img/hero-artesanato.jpg",
      galeria: ["img/artesanato-1.jpg", "img/artesanato-2.jpg"],
      mapa: "img/mapa-inga.jpg",
      tituloTexto: "Preservando o Patrimônio Local",
      texto: ["O Salão de Artesanato é mais do que apenas um mercado; é um centro vital para o turismo sustentável e a preservação de habilidades ancestrais. Aqui, as renomadas rendeiras de \"labirinto\" exibem seu trabalho intrincado, uma tradição passada de geração em geração.","Os visitantes podem descobrir uma ampla gama de produtos feitos de algodão orgânico de cor natural, uma especialidade da região da Paraíba. Ao apoiar esses artistas locais, você contribui diretamente para a sustentabilidade econômica da comunidade e ajuda a garantir que essas belas tradições continuem a prosperar."],
      infos: [["bi-clock","Horário de Funcionamento","Terça - Domingo: 9:00 - 17:00"],["bi-bag","O que encontrar","Renda Labirinto, Algodão Orgânico, Lembranças"]]
    },
    { id: "rio-ponte-preta", nome: "Rio Ingá e Ponte Preta", resumo: "Cenários de rara beleza que mesclam a tranquilidade do rio com a histórica arquitetura ferroviária da Ponte Preta.",
      img: "img/rio-ponte-preta.jpg",
      hero: "",
      galeria: ["", ""],
      mapa: ""
    },
    { id: "cooperativa-algodao", nome: "Cooperativa do Algodão Orgânico", resumo: "Conheça o modelo sustentável de produção que valoriza a terra e a comunidade.",
      img: "",
      hero: "",
      galeria: ["", ""],
      mapa: ""
    },
    { id: "memorial-cuscuz", nome: "Memorial do Cuscuz", resumo: "Uma homenagem lúdica e cultural a um dos pratos mais emblemáticos do Nordeste.",
      img: "",
      hero: "",
      galeria: ["", ""],
      mapa: ""
    },
    { id: "trilha-serra-velha", nome: "Trilha da Serra Velha", resumo: "Para os aventureiros, uma imersão na autêntica Caatinga, com trilhas e mirantes.",
      img: "",
      hero: "",
      galeria: ["", ""],
      mapa: ""
    },
    { id: "feira-livre", nome: "Feira Livre", resumo: "O coração pulsante da cidade aos sábados: cores, aromas e sabores de uma tradição viva.",
      img: "",
      hero: "",
      galeria: ["", ""],
      mapa: ""
    }
  ]},
  manifestacoes: { titulo: "Manifestações Culturais", cat: "Cultura", icone: "bi-stars", itens: [
    { id: "festa-rosario", nome: "Festa de Nossa Senhora do Rosário", resumo: "Uma celebração ancestral que une fé e tradição, com missas, procissões e grupos folclóricos.",
      img: "",
      hero: "",
      galeria: ["", ""],
      mapa: ""
    },
    { id: "sao-joao", nome: "São João de Ingá", resumo: "O autêntico forró pé de serra anima noites inesquecíveis, com fogueiras, comidas típicas e muito arrasta-pé.",
      img: "",
      hero: "",
      galeria: ["", ""],
      mapa: ""
    }
  ]},
  hospedagem: { titulo: "Hospedagem", cat: "Hospedagem", icone: "bi-house-heart", itens: [
    { id: "sitio-pedra-encantada", nome: "Sítio Pedra Encantada", resumo: "Contato direto com a natureza. Chalés rústicos e confortáveis, comida regional servida no fogão a lenha.",
      icone: "bi-house",
      tags: ["Ecoturismo","Café incluso"],
      img: "",
      hero: "img/hero-sitio.jpg",
      galeria: ["img/sitio-1.jpg", "img/sitio-2.jpg"],
      mapa: "img/mapa-sitio.jpg",
      subtitulo: "Hospedagem Rural",
      tituloTexto: "Explorando o Coração da Caatinga",
      texto: ["O Sítio Pedra Encantada oferece muito mais que uma estadia: é um convite para vivenciar o ritmo sereno do interior nordestino.","Nossas acomodações são simples, porém extremamente confortáveis, pensadas para o descanso após um dia de trilhas.","A experiência gastronômica é um capítulo à parte: o café da manhã, farto e preparado no fogão a lenha, serve tapioca, queijo coalho assado e frutas da estação."],
      infos: [["bi-clock","Horários","Check-in: 14h00 · Check-out: 12h00"],["bi-cup-hot","Alimentação","Café da manhã regional rústico incluso"],["bi-heart","Pet-friendly","Aceitamos animais de pequeno e médio porte (mediante aviso prévio)"]],
      cta: ["bi-whatsapp","Reservar via WhatsApp","https://wa.me/5583999999999"],
      local: "Zona Rural, Ingá - PB"
    },
    { id: "pousada-itacoatiara", nome: "Pousada Itacoatiara", resumo: "Localização privilegiada no centro da cidade. Ambiente acolhedor, quartos climatizados e café da manhã elogiado.",
      icone: "bi-door-open",
      tags: ["Centro","Wi-Fi"],
      img: "",
      hero: "",
      galeria: ["", ""],
      mapa: ""
    },
    { id: "hotel-pedra-do-inga", nome: "Hotel Pousada Pedra do Ingá", resumo: "A opção mais tradicional. Oferece piscina, área de lazer ampla e quartos familiares.",
      icone: "bi-building",
      tags: ["Piscina","Famílias"],
      img: "",
      hero: "",
      galeria: ["", ""],
      mapa: ""
    }
  ]},
  alimentacao: { titulo: "Alimentação", cat: "Alimentação", icone: "bi-cup-straw", itens: [
    { id: "caranga", nome: "Caranga Restaurante", resumo: "Especialidade em pratos regionais requintados, em ambiente rústico-chique com toque contemporâneo.",
      icone: "bi-cup-hot",
      img: "",
      hero: "",
      galeria: ["", ""],
      mapa: ""
    },
    { id: "barraca-trevo", nome: "Barraca do Trevo", resumo: "Parada obrigatória para quem busca sabor caseiro e fartura. Famosa pela galinha de capoeira e carne de sol.",
      icone: "bi-egg-fried",
      img: "",
      hero: "",
      galeria: ["", ""],
      mapa: ""
    },
    { id: "restaurante-central", nome: "Restaurante Central", resumo: "Comida farta, preço justo e atendimento ágil. Escolha preferida dos moradores no almoço do dia.",
      icone: "bi-shop",
      img: "",
      hero: "",
      galeria: ["", ""],
      mapa: ""
    }
  ]},
  transporte: { titulo: "Transporte", cat: "Transporte", icone: "bi-bus-front", itens: [
    { id: "jj-neto", nome: "JJ Neto", resumo: "Serviço de transporte e viagens.",
      img: "",
      hero: "",
      galeria: ["", ""],
      mapa: ""
    },
    { id: "jem-viagens", nome: "JEM Viagens", resumo: "Serviço de transporte e viagens.",
      img: "",
      hero: "",
      galeria: ["", ""],
      mapa: ""
    },
    { id: "yeshua-turismo", nome: "Yeshua Turismo", resumo: "Serviço de transporte e viagens.",
      img: "",
      hero: "",
      galeria: ["", ""],
      mapa: ""
    }
  ]},
  guias: { titulo: "Guias Locais", cat: "Guia Local", icone: "bi-compass", itens: [
    { id: "natrilhacomigo", nome: "NaTrilhaComigo (Denis Mota)", resumo: "Especialista em trilhas de caatinga e ecoturismo.",
      img: "",
      hero: "",
      galeria: ["", ""],
      mapa: ""
    },
    { id: "guia-marquinhos", nome: "Guia Marquinhos", resumo: "Historiador local, conhecedor das inscrições de Pedra.",
      img: "",
      hero: "",
      galeria: ["", ""],
      mapa: ""
    },
    { id: "parque-condutores", nome: "Parque Condutores", resumo: "Equipe oficial do parque para visitas guiadas com segurança.",
      img: "",
      hero: "",
      galeria: ["", ""],
      mapa: ""
    }
  ]}
};
// Valores padrão das páginas de detalhe (usados quando o item não define o próprio)
const PADRAO = {
  subtitulo: "", tituloTexto: "Preservando o Patrimônio Local",
  infos: [["bi-clock","Horário de Funcionamento","Terça a domingo: 9:00 - 17:00"],["bi-info-circle","O que encontrar","Informações detalhadas em breve"]],
  cta: ["bi-chat-dots","Consultar Guia Local","https://wa.me/5583999999999"], local: "Centro, Ingá - PB"
};
