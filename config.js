/**
 * ============================================
 * CONFIGURAÇÃO DO SITE — Cauã & Clara
 * ============================================
 * Altere os valores abaixo para personalizar
 * todo o site sem modificar outros arquivos.
 */

const CONFIG = {
  /* ── Noivos ── */
  noivos: {
    noivo: 'Cauã',
    noiva: 'Clara',
  },

  /* ── Data e hora do casamento (ISO 8601) ── */
  weddingDate: '2026-09-07T14:00:00',

  /* ── Lista de presentes — meta e valor arrecadado ── */
  presentes: {
    meta: 6000,
    arrecadado: 0, // Edite este valor conforme recebam contribuições
  },

  /* ── Dados de pagamento ── */
  pagamento: {
    mbway: '+351 926 737 877',
    iban: 'PT50 0010 0000 6190 6940 0011 9',
  },

  /* ── Redes sociais (deixe vazio '' para ocultar) ── */
  redesSociais: {
    instagram: 'https://instagram.com/caua_e_clara',
    facebook: '',
    pinterest: '',
  },

  /* ── Música de fundo (coloque o arquivo em /assets/music/) ── */
  musica: {
    arquivo: 'assets/music/marry-you.mp4',
    titulo: 'Nossa Canção',
  },

  /* ── Vídeo de pré-wedding (coloque em /assets/videos/) ── */
  video: {
    arquivo: 'assets/videos/prewedding.mp4',
  },

  /* ── Frases personalizáveis ── */
  textos: {
    tagline: 'Cada história de amor é única...\ne a nossa está apenas começando.',
    historiaIntro:
      'Dois caminhos que se cruzaram no momento certo. Entre risos, conversas até de madrugada e olhares que diziam tudo, nasceu algo que só cresceu. Hoje, com o coração cheio, convidamos vocês a celebrar conosco o início de uma nova jornada.',
    footer: 'Obrigado por fazer parte da nossa história.',
  },

  /* ── Linha do tempo — Nossa História ── */
  timeline: [
    {
      ano: '2019',
      titulo: 'O Primeiro Olhar',
      descricao:
        'Nos conhecemos numa tarde de sol. Um café, uma conversa leve e a sensação de que algo especial estava começando.',
      imagem: 'assets/images/timeline-1.jpg',
    },
    {
      ano: '2020',
      titulo: 'Primeiro "Eu te amo"',
      descricao:
        'Mesmo à distância, descobrimos que o amor verdadeiro não precisa de estar perto para ser real.',
      imagem: 'assets/images/timeline-2.jpg',
    },
    {
      ano: '2022',
      titulo: 'Morando Juntos',
      descricao:
        'Nosso primeiro apartamento, plantas que sobreviveram (ou não), e a certeza de que queríamos construir uma vida juntos.',
      imagem: 'assets/images/timeline-3.jpg',
    },
    {
      ano: '2024',
      titulo: 'O Pedido',
      descricao:
        'Sob as estrelas, com lágrimas de felicidade e um "sim" que ecoou em nossos corações para sempre.',
      imagem: 'assets/images/timeline-4.jpg',
    },
    {
      ano: '2026',
      titulo: 'O Grande Dia',
      descricao:
        'E agora chegou o momento de dizer "sim" diante de todos que amamos. Obrigado por fazerem parte.',
      imagem: 'assets/images/timeline-5.jpg',
    },
  ],

  /* ── Galeria de fotos ── */
  galeria: [
    { src: 'assets/images/galeria-1.jpeg', alt: 'Cauã e Clara — momento especial' },
    { src: 'assets/images/galeria-2.jpeg', alt: 'Ensaio pré-wedding' },
    { src: 'assets/images/galeria-3.jpeg', alt: 'Passeio romântico' },
    { src: 'assets/images/galeria-4.jpeg', alt: 'Detalhes do amor' },
    { src: 'assets/images/galeria-5.jpeg', alt: 'Sorrisos compartilhados' },
    { src: 'assets/images/galeria-6.jpeg', alt: 'Pôr do sol juntos' },
    { src: 'assets/images/galeria-7.jpeg', alt: 'Abraço aconchegante' },
    { src: 'assets/images/galeria-8.jpeg', alt: 'Caminhada de mãos dadas' },
    { src: 'assets/images/galeria-9.jpeg', alt: 'Risadas e alegria' },
    { src: 'assets/images/galeria-10.jpeg', alt: 'Nosso amor em fotos' },
    { src: 'assets/images/galeria-11.jpeg', alt: 'Momento íntimo' },
    { src: 'assets/images/galeria-12.jpeg', alt: 'Celebrando juntos' },
  ],

  /* ── Lista de presentes (70 itens) ── */
  gifts: [
    { emoji: '🍕', nome: 'Primeira pizza de casados', descricao: 'Com extra de queijo e amor, claro.', valor: 35 },
    { emoji: '☕', nome: 'Primeiro café da manhã romântico', descricao: 'Croissants, suco e carinho na cama.', valor: 20 },
    { emoji: '💇', nome: 'Vale corte de cabelo do noivo', descricao: 'Para ficar ainda mais bonito no altar.', valor: 50 },
    { emoji: '💄', nome: 'Kit beleza da noiva', descricao: 'Porque ela merece brilhar todos os dias.', valor: 80 },
    { emoji: '🚗', nome: 'Combustível da lua de mel', descricao: 'Para rodarmos o mundo de mãos dadas.', valor: 100 },
    { emoji: '🏖', nome: 'Passeio na lua de mel', descricao: 'Sol, mar e muitos beijos na areia.', valor: 150 },
    { emoji: '🍷', nome: 'Vinho da comemoração', descricao: 'Um brinde ao nosso "sim" eterno.', valor: 30 },
    { emoji: '🛏', nome: 'Lençóis novos', descricao: 'Para sonhos doces toda noite.', valor: 90 },
    { emoji: '🧹', nome: 'Kit limpeza', descricao: 'Casa limpa, coração leve.', valor: 40 },
    { emoji: '🛒', nome: 'Primeira compra do supermercado', descricao: 'Carrinho cheio de amor e mantimentos.', valor: 120 },
    { emoji: '🪴', nome: 'Plantas para decorar a casa', descricao: 'Verde, vida e frescor no nosso lar.', valor: 25 },
    { emoji: '📺', nome: 'Ajuda para a televisão', descricao: 'Noites de filme abraçadinhos.', valor: 300 },
    { emoji: '🏠', nome: 'Tijolinho do nosso futuro', descricao: 'Cada contribuição constrói nosso ninho.', valor: 200 },
    { emoji: '🐶', nome: 'Fundo para nosso futuro pet', descricao: 'Um peludinho cheio de amor virá!', valor: 100 },
    { emoji: '🥂', nome: 'Brinde especial', descricao: 'Champagne para celebrar cada conquista.', valor: 40 },
    { emoji: '🍿', nome: 'Noite de cinema', descricao: 'Pipoca, cobertor e muito colo.', valor: 25 },
    { emoji: '🍝', nome: 'Macarrão do primeiro almoço', descricao: 'Receita de avó com tempero de amor.', valor: 15 },
    { emoji: '🍰', nome: 'Sobremesa do domingo', descricao: 'Doce como nosso amor.', valor: 20 },
    { emoji: '🌹', nome: 'Buquê surpresa', descricao: 'Flores para alegrar qualquer dia.', valor: 45 },
    { emoji: '🕯', nome: 'Velas aromáticas', descricao: 'Ambiente romântico garantido.', valor: 30 },
    { emoji: '🛁', nome: 'Banho relaxante', descricao: 'Sal de banho e momentos de paz.', valor: 35 },
    { emoji: '🎵', nome: 'Playlist do amor', descricao: 'Assinatura de streaming por um ano.', valor: 60 },
    { emoji: '📸', nome: 'Sessão de fotos', descricao: 'Para registrar nossa história juntos.', valor: 250 },
    { emoji: '✈️', nome: 'Passagem para aventura', descricao: 'Um destino surpresa nos espera.', valor: 400 },
    { emoji: '🏨', nome: 'Noite de hotel romântico', descricao: 'Escapada a dois, longe de tudo.', valor: 180 },
    { emoji: '🍳', nome: 'Panela antiaderente dos sonhos', descricao: 'Para o noivo finalmente cozinhar bem.', valor: 55 },
    { emoji: '🥘', nome: 'Jantar especial', descricao: 'Restaurante à luz de velas.', valor: 120 },
    { emoji: '🧁', nome: 'Cupcakes de celebração', descricao: 'Docinhos para adoçar a semana.', valor: 25 },
    { emoji: '🍫', nome: 'Caixa de chocolates', descricao: 'Porque amor e chocolate combinam.', valor: 20 },
    { emoji: '🎁', nome: 'Presente surpresa', descricao: 'Deixe a gente se emocionar!', valor: 50 },
    { emoji: '💐', nome: 'Flores da noiva', descricao: 'Um jardim inteiro de carinho.', valor: 70 },
    { emoji: '🪞', nome: 'Espelho decorativo', descricao: 'Para refletir nosso amor bonito.', valor: 85 },
    { emoji: '🛋', nome: 'Almofadas aconchegantes', descricao: 'Conforto para nossos abraços.', valor: 45 },
    { emoji: '🧺', nome: 'Cesta de piquenique', descricao: 'Almoço ao ar livre de mãos dadas.', valor: 65 },
    { emoji: '🌿', nome: 'Ervas aromáticas', descricao: 'Manjericão, alecrim e muito sabor.', valor: 15 },
    { emoji: '🍋', nome: 'Limonada de verão', descricao: 'Refrescante como nosso amor.', valor: 10 },
    { emoji: '🧊', nome: 'Gelo para as bebidas', descricao: 'Essencial para brindes gelados.', valor: 5 },
    { emoji: '🎂', nome: 'Bolo de aniversário de casamento', descricao: 'Para comemorar cada mês juntos.', valor: 60 },
    { emoji: '🍾', nome: 'Espumante da vitória', descricao: 'Para celebrar cada pequena conquista.', valor: 35 },
    { emoji: '🎶', nome: 'Caixinha de som', descricao: 'Música em todo canto da casa.', valor: 75 },
    { emoji: '📚', nome: 'Livros de receitas', descricao: 'Para aventuras culinárias a dois.', valor: 40 },
    { emoji: '🎨', nome: 'Quadro decorativo', descricao: 'Arte que conta nossa história.', valor: 95 },
    { emoji: '🧸', nome: 'Pelúcia fofa', descricao: 'Para abraçar quando um estiver longe.', valor: 30 },
    { emoji: '🌙', nome: 'Luz noturna', descricao: 'Estrelas no nosso quarto.', valor: 25 },
    { emoji: '☂️', nome: 'Guarda-chuva do amor', descricao: 'Proteção para dias chuvosos.', valor: 20 },
    { emoji: '🧴', nome: 'Kit spa em casa', descricao: 'Relaxamento à moda dos noivos.', valor: 55 },
    { emoji: '💍', nome: 'Caixinha para as alianças', descricao: 'Onde guardaremos nossos símbolos.', valor: 45 },
    { emoji: '🔑', nome: 'Chaveiro do nosso lar', descricao: 'A chave do nosso primeiro ninho.', valor: 15 },
    { emoji: '🚿', nome: 'Toalhas macias', descricao: 'Abraço quentinho após o banho.', valor: 50 },
    { emoji: '🧼', nome: 'Sabonetes artesanais', descricao: 'Perfume delicado para o dia a dia.', valor: 18 },
    { emoji: '🍯', nome: 'Mel de lua de mel', descricao: 'Doce como os primeiros dias juntos.', valor: 22 },
    { emoji: '🥐', nome: 'Croissant da manhã', descricao: 'Francês e delicioso, como nosso amor.', valor: 12 },
    { emoji: '🍓', nome: 'Morangos com chocolate', descricao: 'Clássico romântico irresistível.', valor: 28 },
    { emoji: '🎭', nome: 'Ingressos de teatro', descricao: 'Cultura e diversão a dois.', valor: 80 },
    { emoji: '🎬', nome: 'Assinatura de cinema', descricao: 'Estreias sempre em companhia.', valor: 45 },
    { emoji: '🏋️', nome: 'Academia a dois', descricao: 'Saúde e disposição para dançar.', valor: 90 },
    { emoji: '🚲', nome: 'Passeio de bicicleta', descricao: 'Pedalando rumo à felicidade.', valor: 35 },
    { emoji: '🌅', nome: 'Nascer do sol juntos', descricao: 'Café da manhã com vista especial.', valor: 50 },
    { emoji: '🎪', nome: 'Diversão no parque', descricao: 'Risadas e adrenalina compartilhada.', valor: 40 },
    { emoji: '🎈', nome: 'Balões de celebração', descricao: 'Cor e alegria no nosso dia.', valor: 15 },
    { emoji: '🎀', nome: 'Laço decorativo', descricao: 'Detalhe charmoso para a casa.', valor: 10 },
    { emoji: '🧲', nome: 'Ímã de geladeira', descricao: 'Lembrança fofa do nosso casamento.', valor: 8 },
    { emoji: '📷', nome: 'Álbum de fotos', descricao: 'Memórias impressas para sempre.', valor: 65 },
    { emoji: '🖼', nome: 'Moldura especial', descricao: 'Para a foto favorita do casamento.', valor: 35 },
    { emoji: '🌺', nome: 'Orquídea elegante', descricao: 'Flor sofisticada para nosso lar.', valor: 40 },
    { emoji: '🍀', nome: 'Amuleto da sorte', descricao: 'Sorte e prosperidade ao casal.', valor: 25 },
    { emoji: '⭐', nome: 'Desejo estrelado', descricao: 'Um pedido especial ao universo.', valor: 30 },
    { emoji: '💝', nome: 'Caixa de memórias', descricao: 'Onde guardaremos cada carinho.', valor: 55 },
    { emoji: '🎊', nome: 'Confetes da festa', descricao: 'Alegria que continua depois do sim.', valor: 20 },
    { emoji: '🫶', nome: 'Abraço virtual', descricao: 'Carinho enviado de longe.', valor: 15 },
    { emoji: '❤️', nome: 'Contribuição livre', descricao: 'Qualquer valor com muito amor.', valor: 0 },
  ],
};
