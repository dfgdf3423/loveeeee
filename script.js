const startDate = new Date('2023-01-30T00:00:00');
const countdownEl = document.getElementById('loveCountdown');
const timelineEl = document.getElementById('timeline');
const photoWallEl = document.getElementById('photoWall');
const modal = document.getElementById('photoModal');
const modalImage = document.getElementById('modalImage');
const modalClose = document.getElementById('modalClose');
const btnGood = document.getElementById('btnGood');
const btnNormal = document.getElementById('btnNormal');
const starsEl = document.getElementById('stars');
const heartParticlesEl = document.getElementById('heart-particles');
const sakuraLayerEl = document.getElementById('sakura-layer');
const fireworksLayerEl = document.getElementById('fireworks-layer');
const ribbonLayerEl = document.getElementById('ribbon-layer');

const milestones = [
  { date: '2023-01-30', title: '初见', text: '那一天，命运像一场轻轻落下的星雨，把两个人悄悄拉近。' },
  { date: '2023-06-01', title: '相恋', text: '从相识到相爱，时光像被夏风吹亮了一样，开始变得温柔。' },
  { date: '2023-12-24', title: '第一次一起跨年', text: '陪伴让每一个平常的夜晚都变成了值得怀念的回忆。' },
  { date: '2024-08-15', title: '一起走过的日子', text: '生活有风有雨，但你始终是我想停靠的港湾。' }
];

const imageFiles = [
  'images/01.jpg',
  'images/02.jpg',
  'images/03.jpg',
  'images/04.jpg',
  'images/05.jpg',
  'images/06.jpg',
  'images/07.jpg',
  'images/08.jpg',
  'images/09.jpg',
  'images/10.jpg'
];

function updateCountdown() {
  const now = new Date();
  const diff = now - startDate;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  countdownEl.textContent = `我们已经相爱 ${days} 天 ${hours} 小时 ${minutes} 分 ${seconds} 秒`;
}

function createTimeline() {
  timelineEl.innerHTML = milestones.map((item) => `
    <article class="timeline-item reveal">
      <div class="item-content">
        <p class="date">${item.date}</p>
        <h3>${item.title}</h3>
        <p>${item.text}</p>
      </div>
    </article>
  `).join('');
}

function createPhotoWall() {
  photoWallEl.innerHTML = imageFiles.map((src, index) => `
    <figure class="photo-card reveal" data-src="${src}" tabindex="0">
      <img src="${src}" alt="恋爱纪念照 ${index + 1}">
    </figure>
  `).join('');
}

function openModal(src) {
  modalImage.src = src;
  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
}

function closeModal() {
  modal.classList.remove('active');
  modal.setAttribute('aria-hidden', 'true');
}

function createStars() {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < 120; i += 1) {
    const star = document.createElement('span');
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.animationDelay = `${Math.random() * 3}s`;
    fragment.appendChild(star);
  }
  starsEl.appendChild(fragment);
}

function createHeartParticles() {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < 30; i += 1) {
    const particle = document.createElement('div');
    particle.className = 'heart-particle';
    particle.textContent = '💗';
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100 + 100}%`;
    particle.style.animationDuration = `${8 + Math.random() * 5}s`;
    particle.style.animationDelay = `${Math.random() * 3}s`;
    fragment.appendChild(particle);
  }
  heartParticlesEl.appendChild(fragment);
}

function createSakura() {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < 26; i += 1) {
    const petal = document.createElement('span');
    petal.className = 'sakura';
    petal.style.left = `${Math.random() * 100}%`;
    petal.style.animationDuration = `${6 + Math.random() * 7}s`;
    petal.style.animationDelay = `${Math.random() * 4}s`;
    fragment.appendChild(petal);
  }
  sakuraLayerEl.appendChild(fragment);
}

function revealOnScroll() {
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.15 });

  reveals.forEach((item) => observer.observe(item));
}

function runCelebration() {
  for (let i = 0; i < 34; i += 1) {
    const firework = document.createElement('span');
    firework.className = 'firework';
    firework.style.left = `${Math.random() * 100}%`;
    firework.style.top = `${Math.random() * 100}%`;
    firework.style.background = ['#ffd6e8', '#ff93c5', '#9b5cff', '#fff'][Math.floor(Math.random() * 4)];
    fireworksLayerEl.appendChild(firework);
    setTimeout(() => firework.remove(), 1200);
  }

  for (let i = 0; i < 16; i += 1) {
    const ribbon = document.createElement('span');
    ribbon.className = 'ribbon-piece';
    ribbon.style.left = `${10 + Math.random() * 80}%`;
    ribbon.style.top = '-40px';
    ribbon.style.transform = `rotate(${Math.random() * 40 - 20}deg)`;
    ribbonLayerEl.appendChild(ribbon);
    setTimeout(() => ribbon.remove(), 1600);
  }

  for (let i = 0; i < 12; i += 1) {
    const heart = document.createElement('span');
    heart.className = 'celebration-heart';
    heart.textContent = '💖';
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.top = `${Math.random() * 100}%`;
    fireworksLayerEl.appendChild(heart);
    setTimeout(() => heart.remove(), 1500);
  }
}

function setNormalButtonEscape() {
  const rect = btnNormal.getBoundingClientRect();
  const maxX = window.innerWidth - rect.width - 20;
  const maxY = window.innerHeight - rect.height - 20;
  btnNormal.style.position = 'absolute';
  btnNormal.style.left = `${Math.random() * maxX}px`;
  btnNormal.style.top = `${Math.random() * maxY}px`;
}

function init() {
  updateCountdown();
  setInterval(updateCountdown, 1000);
  createTimeline();
  createPhotoWall();
  createStars();
  createHeartParticles();
  createSakura();
  revealOnScroll();

  document.querySelectorAll('.photo-card').forEach((card) => {
    card.addEventListener('click', () => openModal(card.dataset.src));
    card.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openModal(card.dataset.src);
      }
    });
  });

  modalClose.addEventListener('click', closeModal);
  modal.addEventListener('click', (event) => {
    if (event.target.dataset.close === 'true') {
      closeModal();
    }
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeModal();
  });

  btnGood.addEventListener('click', () => {
    runCelebration();
  });

  btnNormal.addEventListener('mouseenter', setNormalButtonEscape);
  btnNormal.addEventListener('click', setNormalButtonEscape);
}

document.addEventListener('DOMContentLoaded', init);
