/**
 * ============================================
 * CASAMENTO CAUÃ & CLARA — JavaScript
 * ============================================
 */

(function () {
  'use strict';

  /* ── Estado global ── */
  let musicEnabled = false;
  let lightboxIndex = 0;
  let countdownInterval = null;

  /* ── Elementos DOM ── */
  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => document.querySelectorAll(sel);

  /* ═══════════════════════════════════════
     INICIALIZAÇÃO
     ═══════════════════════════════════════ */
  document.addEventListener('DOMContentLoaded', init);

  function init() {
    applyConfig();
    setupIntro();
    setupNavigation();
    setupCountdown();
    buildGallery();
    buildGifts();
    setupProgressBar();
    setupModal();
    setupLightbox();
    setupMusicPlayer();
    setupScrollAnimations();
    setupParallax();
    setupPetals();
    setupFooter();
  }

  /* ═══════════════════════════════════════
     CONFIG — Aplicar valores do config.js
     ═══════════════════════════════════════ */
  function applyConfig() {
    const { noivos, weddingDate, video, musica, textos } = CONFIG;

    // Nomes
    setText('#intro-noivo', noivos.noivo);
    setText('#intro-noiva', noivos.noiva);
    setText('#hero-noivo', noivos.noivo);
    setText('#hero-noiva', noivos.noiva);
    setText('#footer-noivo', noivos.noivo);
    setText('#footer-noiva', noivos.noiva);
    setText('#modal-noivos', `${noivos.noivo} & ${noivos.noiva}`);
    setText('#nav-logo', `${noivos.noivo.charAt(0)} & ${noivos.noiva.charAt(0)}`);

    // Tagline e textos
    if (textos.tagline) {
      const tagline = $('#intro-tagline');
      if (tagline) tagline.innerHTML = textos.tagline.replace('\n', '<br>');
    }
    setText('#historia-intro', textos.historiaIntro);
    setText('#footer-message', textos.footer);

    // Data formatada
    const date = new Date(weddingDate);
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    setText('#hero-date', date.toLocaleDateString('pt-PT', options));


    // Música
    const audio = $('#audio-player');
    if (audio && musica.arquivo) {
      audio.src = musica.arquivo;
      setText('#music-title', musica.titulo);
    }

    // Pagamento no modal
    setText('#modal-mbway', CONFIG.pagamento.mbway);
    setText('#modal-iban', CONFIG.pagamento.iban);

    // Ano no footer
    setText('#footer-year', new Date().getFullYear());
  }

  function setText(selector, text) {
    const el = $(selector);
    if (el && text !== undefined) el.textContent = text;
  }

  /* ═══════════════════════════════════════
     INTRO — Tela de abertura
     ═══════════════════════════════════════ */
  function setupIntro() {
    const btnEnter = $('#btn-enter');
    const btnMusic = $('#btn-enter-music');

    btnEnter?.addEventListener('click', () => enterSite(false));
    btnMusic?.addEventListener('click', () => enterSite(true));
  }

  function enterSite(withMusic) {
    const intro = $('#intro');
    const transition = $('#transition');
    const mainWrapper = $('#main-wrapper');

    document.body.classList.add('no-scroll');

    // Inicia transição cinematográfica
    transition.hidden = false;
    transition.classList.add('active');

    // Fade blur no intro
    intro.style.filter = 'blur(8px)';
    intro.style.opacity = '0';

    setTimeout(() => {
      transition.classList.add('unite');
    }, 800);

    setTimeout(() => {
      transition.classList.add('fade-out');
    }, 2200);

    setTimeout(() => {
      intro.classList.add('hidden');
      intro.hidden = true;
      transition.hidden = true;
      transition.classList.remove('active', 'unite', 'fade-out');

      mainWrapper.hidden = false;
      requestAnimationFrame(() => {
        mainWrapper.classList.add('visible');
      });

      document.body.classList.remove('no-scroll');

      // Mostra player de música
      const musicPlayer = $('#music-player');
      if (musicPlayer) musicPlayer.hidden = false;

      if (withMusic) {
        musicEnabled = true;
        playMusic();
      }

      // Flores ao entrar
      spawnPetals(12);

      // Inicia animações de scroll
      observeElements();
    }, 3200);
  }

  /* ═══════════════════════════════════════
     NAVEGAÇÃO
     ═══════════════════════════════════════ */
  function setupNavigation() {
    const nav = $('#nav');
    const toggle = $('#nav-toggle');
    const menu = $('#nav-menu');
    const links = $$('.nav__link');

    // Scroll — nav background
    window.addEventListener('scroll', () => {
      if (window.scrollY > 80) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
      updateActiveNavLink();
    }, { passive: true });

    // Menu mobile
    toggle?.addEventListener('click', () => {
      const isOpen = menu.classList.toggle('open');
      toggle.classList.toggle('active', isOpen);
      toggle.setAttribute('aria-expanded', isOpen);
    });

    // Fechar menu ao clicar link
    links.forEach((link) => {
      link.addEventListener('click', () => {
        menu.classList.remove('open');
        toggle.classList.remove('active');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });

    // Smooth scroll
    $$('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', (e) => {
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }

  function updateActiveNavLink() {
    const sections = $$('section[id]');
    const links = $$('.nav__link');
    let current = '';

    sections.forEach((section) => {
      const top = section.offsetTop - 120;
      if (window.scrollY >= top) {
        current = section.getAttribute('id');
      }
    });

    links.forEach((link) => {
      link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
    });
  }

  /* ═══════════════════════════════════════
     CONTAGEM REGRESSIVA
     ═══════════════════════════════════════ */
  function setupCountdown() {
    updateCountdown();
    countdownInterval = setInterval(updateCountdown, 1000);
  }

  function updateCountdown() {
    const weddingDate = new Date(CONFIG.weddingDate).getTime();
    const now = Date.now();
    const diff = weddingDate - now;

    if (diff <= 0) {
      setCountdownValues(0, 0, 0, 0);
      clearInterval(countdownInterval);
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    setCountdownValues(days, hours, minutes, seconds);
  }

  function setCountdownValues(d, h, m, s) {
    const pad = (n) => String(n).padStart(2, '0');
    const elDays = $('#cd-days');
    const elHours = $('#cd-hours');
    const elMinutes = $('#cd-minutes');
    const elSeconds = $('#cd-seconds');

    if (elDays) elDays.textContent = pad(d);
    if (elHours) elHours.textContent = pad(h);
    if (elMinutes) elMinutes.textContent = pad(m);
    if (elSeconds) elSeconds.textContent = pad(s);
  }

  
  /* ═══════════════════════════════════════
     GALERIA
     ═══════════════════════════════════════ */
  function buildGallery() {
    const grid = $('#galeria-grid');
    if (!grid || !CONFIG.galeria) return;

    CONFIG.galeria.forEach((photo, index) => {
      const item = document.createElement('div');
      item.className = 'galeria__item';
      item.setAttribute('tabindex', '0');
      item.setAttribute('role', 'button');
      item.setAttribute('aria-label', photo.alt);
      item.dataset.index = index;
      item.style.transitionDelay = `${(index % 6) * 0.08}s`;

      item.innerHTML = `
        <img src="${photo.src}" alt="${photo.alt}" loading="lazy" onerror="this.src='assets/images/placeholder.svg'">
        <div class="galeria__overlay">
          <span class="galeria__zoom" aria-hidden="true">🔍</span>
        </div>
      `;

      item.addEventListener('click', () => openLightbox(index));
      item.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openLightbox(index);
        }
      });

      grid.appendChild(item);
    });
  }

  /* ═══════════════════════════════════════
     LIGHTBOX
     ═══════════════════════════════════════ */
  function setupLightbox() {
    $('#lightbox-close')?.addEventListener('click', closeLightbox);
    $('#lightbox-prev')?.addEventListener('click', () => navigateLightbox(-1));
    $('#lightbox-next')?.addEventListener('click', () => navigateLightbox(1));

    document.addEventListener('keydown', (e) => {
      const lightbox = $('#lightbox');
      if (!lightbox?.classList.contains('active')) return;

      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') navigateLightbox(-1);
      if (e.key === 'ArrowRight') navigateLightbox(1);
    });
  }

  function openLightbox(index) {
    lightboxIndex = index;
    const lightbox = $('#lightbox');
    const img = $('#lightbox-img');

    lightbox.hidden = false;
    updateLightboxImage();

    requestAnimationFrame(() => {
      lightbox.classList.add('active');
    });

    document.body.classList.add('no-scroll');
  }

  function closeLightbox() {
    const lightbox = $('#lightbox');
    lightbox.classList.remove('active');
    document.body.classList.remove('no-scroll');

    setTimeout(() => {
      lightbox.hidden = true;
    }, 400);
  }

  function navigateLightbox(direction) {
    const total = CONFIG.galeria.length;
    lightboxIndex = (lightboxIndex + direction + total) % total;
    updateLightboxImage();
  }

  function updateLightboxImage() {
    const photo = CONFIG.galeria[lightboxIndex];
    const img = $('#lightbox-img');
    const counter = $('#lightbox-counter');

    if (img) {
      img.style.opacity = '0';
      img.src = photo.src;
      img.alt = photo.alt;
      img.onload = () => {
        img.style.opacity = '1';
        img.style.transition = 'opacity 0.3s ease';
      };
      img.onerror = () => {
        img.src = 'assets/images/placeholder.svg';
      };
    }

    if (counter) {
      counter.textContent = `${lightboxIndex + 1} / ${CONFIG.galeria.length}`;
    }
  }

  /* ═══════════════════════════════════════
     LISTA DE PRESENTES
     ═══════════════════════════════════════ */
  function buildGifts() {
    const grid = $('#gifts-grid');
    if (!grid || !CONFIG.gifts) return;

    CONFIG.gifts.forEach((gift, index) => {
      const card = document.createElement('article');
      card.className = 'gift-card';
      card.style.transitionDelay = `${(index % 8) * 0.05}s`;

      const valorDisplay = gift.valor === 0
        ? '<span class="gift-card__valor gift-card__valor--free">Livre</span>'
        : `<span class="gift-card__valor">${gift.valor}€</span>`;

      card.innerHTML = `
        <div class="gift-card__illustration">
          <span class="gift-card__emoji" aria-hidden="true">${gift.emoji}</span>
        </div>
        <div class="gift-card__body">
          <h3 class="gift-card__nome">${gift.nome}</h3>
          <p class="gift-card__descricao">${gift.descricao}</p>
          <div class="gift-card__footer">
            ${valorDisplay}
            <button type="button" class="btn btn--gold btn--sm gift-card__btn" data-gift-index="${index}">
              Contribuir
            </button>
          </div>
        </div>
      `;

      card.querySelector('.gift-card__btn').addEventListener('click', () => {
        openModal(gift);
      });

      grid.appendChild(card);
    });
  }

  /* ═══════════════════════════════════════
     BARRA DE PROGRESSO
     ═══════════════════════════════════════ */
  function setupProgressBar() {
    const { meta, arrecadado } = CONFIG.presentes;
    const percent = Math.min(Math.round((arrecadado / meta) * 100), 100);

    const formatCurrency = (val) =>
      val.toLocaleString('pt-PT', { style: 'currency', currency: 'EUR', minimumFractionDigits: 0 });

    setText('#progress-meta', formatCurrency(meta));
    setText('#progress-current', formatCurrency(arrecadado));
    setText('#progress-percent', `${percent}%`);

    const track = $('#progress-track');
    const fill = $('#progress-fill');

    if (track) {
      track.setAttribute('aria-valuenow', percent);
      track.setAttribute('aria-valuemax', 100);
    }

    // Anima ao entrar na viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && fill) {
            fill.style.width = `${percent}%`;
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    const progressBar = $('#progress-bar');
    if (progressBar) observer.observe(progressBar);
  }

  /* ═══════════════════════════════════════
     MODAL — Contribuir
     ═══════════════════════════════════════ */
  function setupModal() {
    $('#modal-close')?.addEventListener('click', closeModal);
    $('#modal-backdrop')?.addEventListener('click', closeModal);
    $('#btn-copy-mbway')?.addEventListener('click', () => copyToClipboard(CONFIG.pagamento.mbway, 'Número MB WAY copiado!'));
    $('#btn-copy-iban')?.addEventListener('click', () => copyToClipboard(CONFIG.pagamento.iban, 'IBAN copiado!'));

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && $('#modal')?.classList.contains('active')) {
        closeModal();
      }
    });
  }

  function openModal(gift) {
    const modal = $('#modal');

    setText('#modal-emoji', gift.emoji);
    setText('#modal-title', gift.nome);
    setText('#modal-valor', gift.valor === 0 ? 'Valor livre' : `${gift.valor}€`);

    modal.hidden = false;
    requestAnimationFrame(() => modal.classList.add('active'));
    document.body.classList.add('no-scroll');

    $('#modal-close')?.focus();
  }

  function closeModal() {
    const modal = $('#modal');
    modal.classList.remove('active');
    document.body.classList.remove('no-scroll');

    setTimeout(() => {
      modal.hidden = true;
    }, 400);
  }

  function copyToClipboard(text, message) {
    navigator.clipboard.writeText(text.replace(/\s/g, '')).then(() => {
      showToast(message);
    }).catch(() => {
      // Fallback para navegadores antigos
      const textarea = document.createElement('textarea');
      textarea.value = text.replace(/\s/g, '');
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      showToast(message);
    });
  }

  /* ═══════════════════════════════════════
     TOAST
     ═══════════════════════════════════════ */
  function showToast(message) {
    const toast = $('#toast');
    if (!toast) return;

    toast.textContent = message;
    toast.hidden = false;
    toast.classList.add('active');

    setTimeout(() => {
      toast.classList.remove('active');
      setTimeout(() => {
        toast.hidden = true;
      }, 400);
    }, 2500);
  }

  /* ═══════════════════════════════════════
     PLAYER DE MÚSICA
     ═══════════════════════════════════════ */
  function setupMusicPlayer() {
    const toggle = $('#music-toggle');
    toggle?.addEventListener('click', toggleMusic);
  }

  function toggleMusic() {
    const audio = $('#audio-player');
    const player = $('#music-player');
    if (!audio) return;

    if (audio.paused) {
      playMusic();
    } else {
      audio.pause();
      player?.classList.remove('playing');
      updateMusicIcons(false);
    }
  }

  function playMusic() {
    const audio = $('#audio-player');
    const player = $('#music-player');
    if (!audio || !audio.src) return;

    audio.play().then(() => {
      player?.classList.add('playing');
      updateMusicIcons(true);
    }).catch(() => {
      // Navegador bloqueou autoplay — funciona normalmente
      updateMusicIcons(false);
    });
  }

  function updateMusicIcons(isPlaying) {
    const playIcon = $('.music-player__icon--play');
    const pauseIcon = $('.music-player__icon--pause');
    if (playIcon) playIcon.hidden = isPlaying;
    if (pauseIcon) pauseIcon.hidden = !isPlaying;
  }

  /* ═══════════════════════════════════════
     ANIMAÇÕES DE SCROLL
     ═══════════════════════════════════════ */
  function setupScrollAnimations() {
    // Será ativado após entrar no site via observeElements()
  }

  function observeElements() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    $$('.reveal, .timeline__item, .galeria__item, .gift-card').forEach((el) => {
      observer.observe(el);
    });
  }

  /* ═══════════════════════════════════════
     PARALLAX DISCRETO
     ═══════════════════════════════════════ */
  function setupParallax() {
    const heroBg = $('.hero__bg');
    if (!heroBg) return;

    let ticking = false;

    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          if (scrollY < window.innerHeight) {
            heroBg.style.transform = `translateY(${scrollY * 0.3}px)`;
          }
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  /* ═══════════════════════════════════════
     PÉTALAS DECORATIVAS
     ═══════════════════════════════════════ */
  function setupPetals() {
    // Flores ao scrollar para seções específicas
    const sections = ['#historia', '#presentes'];
    const spawned = new Set();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !spawned.has(entry.target.id)) {
            spawned.add(entry.target.id);
            spawnPetals(8);
          }
        });
      },
      { threshold: 0.2 }
    );

    sections.forEach((sel) => {
      const el = $(sel);
      if (el) observer.observe(el);
    });
  }

  function spawnPetals(count) {
    const container = $('#petals');
    if (!container) return;

    const petals = ['🌸', '✿', '🌺', '❀', '🏵'];

    for (let i = 0; i < count; i++) {
      const petal = document.createElement('span');
      petal.className = 'petal';
      petal.textContent = petals[Math.floor(Math.random() * petals.length)];
      petal.style.left = `${Math.random() * 100}%`;
      petal.style.animationDuration = `${6 + Math.random() * 6}s`;
      petal.style.animationDelay = `${Math.random() * 3}s`;
      petal.style.fontSize = `${0.8 + Math.random() * 0.8}rem`;

      container.appendChild(petal);

      petal.addEventListener('animationend', () => petal.remove());
    }
  }

  /* ═══════════════════════════════════════
     FOOTER — Redes sociais
     ═══════════════════════════════════════ */
  function setupFooter() {
    const container = $('#footer-social');
    if (!container || !CONFIG.redesSociais) return;

    const icons = {
      instagram: '📷',
      facebook: '📘',
      pinterest: '📌',
    };

    Object.entries(CONFIG.redesSociais).forEach(([network, url]) => {
      if (!url) return;

      const link = document.createElement('a');
      link.href = url;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.setAttribute('aria-label', network);
      link.textContent = icons[network] || '🔗';
      container.appendChild(link);
    });
  }

})();
