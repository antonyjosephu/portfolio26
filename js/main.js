/* ==========================================================================
   MAIN.JS v2 — bold intro animation (word reveal + color-panel wipe),
   blur-focus headline reveal on scroll, content from data.js, interactions.
========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  const D = PORTFOLIO;

  /* ================= SPLIT TEXT INTO WORDS FOR BLUR REVEAL ================= */
  // Wraps each word of an element in <span class="word"> so CSS can stagger them.
 function splitWords(el){
  const words = el.textContent.trim().split(/\s+/);

  el.innerHTML = words.map((word, i) =>
    `<span class="word" style="--wd:${(i * 0.06).toFixed(2)}s">${word}&nbsp;</span>`
  ).join('');
}
  document.querySelectorAll('.blur-reveal').forEach(splitWords);

  /* ================= RENDER CONTENT FROM data.js ================= */
  document.title = `${D.person.name} — ${D.person.role}`;
  document.querySelectorAll('[data-name]').forEach(el => el.textContent = D.person.name.split(' ')[0]); // first name reads friendlier in headline/nav
  document.querySelectorAll('[data-role]').forEach(el => el.textContent = D.person.role);
  document.querySelectorAll('[data-tagline]').forEach(el => el.textContent = D.person.tagline);
  document.querySelectorAll('[data-about]').forEach(el => el.textContent = D.about);
  document.querySelectorAll('[data-resume]').forEach(el => el.href = D.person.resumeUrl);
  document.querySelectorAll('[data-photo]').forEach(el => el.src = D.person.photo);
  document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());

  // stat cards next to hero photo
  if (D.statCards && D.statCards[0]) {
    document.getElementById('statCard1').innerHTML = `<div class="num">${D.statCards[0].value}</div><div class="lbl">${D.statCards[0].label}</div>`;
  }
  if (D.statCards && D.statCards[1]) {
    document.getElementById('statCard2').innerHTML = `<div class="num">${D.statCards[1].value}</div><div class="lbl">${D.statCards[1].label}</div>`;
  }

 // personal info grid
document.getElementById('infoList').innerHTML = D.personalInfo.map(i => `
  <div class="info-item">
    <div class="lbl">${i.label}</div>
    <div class="val">
      ${
        i.link
          ? `<a href="${i.link}" ${i.link.startsWith('http') ? 'target="_blank" rel="noopener noreferrer"' : ''}>${i.value}</a>`
          : i.value
      }
    </div>
  </div>
`).join('');
  // skills
  document.getElementById('skillsWrap').innerHTML = D.skills.map(s => `<span class="skill-chip">${s}</span>`).join('');

  // projects (tabbed)
  const projGrid = document.getElementById('projGrid');
  function renderProjects(cat){
    projGrid.innerHTML = D.projects[cat].map((p, i) => `
      <div class="proj-card reveal in-view" style="--d:${(i % 3) * 0.08}s">
        <div class="proj-thumb"><img src="${p.image}" alt="${p.name} project screenshot" loading="lazy"></div>
        <div class="proj-body">
          <h3>${p.name}</h3>
          <p>${p.desc}</p>
          <a class="proj-link" href="${p.url}">View project</a>
        </div>
      </div>`).join('');
  }
  renderProjects('wordpress');
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderProjects(btn.dataset.cat);
    });
  });

  // contact info + form
  document.getElementById('contactPhone').textContent = D.contact.phone;
  document.getElementById('contactEmail').textContent = D.contact.email;
  const socials = D.contact.socials;

document.getElementById('footSocial').innerHTML = `
  <a href="${socials.facebook}" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
    <img src="assets/images/facebook_icon.png" alt="Facebook">
  </a>

  <a href="${socials.youtube}" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
    <img src="assets/images/youtube_icon.png" alt="YouTube">
  </a>

  <a href="${socials.instagram}" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
    <img src="assets/images/instagram_icon.png" alt="Instagram">
  </a>

  <a href="${socials.linkedin}" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
    <img src="assets/images/linkedin_icon.png" alt="LinkedIn">
  </a>
`;

  /* ================= NAV ================= */
  const nav = document.getElementById('siteNav');
  window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 40));
  const burger = document.getElementById('burger');
  const navLinks = document.getElementById('navLinks');
  burger.addEventListener('click', () => navLinks.classList.toggle('open'));
  const navA = navLinks.querySelectorAll('a');
  navA.forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

  const sections = ['home','about','projects','contact'].map(id => document.getElementById(id)).filter(Boolean);
  const navObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        navA.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + entry.target.id));
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });
  sections.forEach(s => navObserver.observe(s));

  /* ================= SCROLL REVEAL (blur headlines + generic elements) ================= */
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting){ entry.target.classList.add('in-view'); io.unobserve(entry.target); }
    });
  }, { threshold: 0.2 });
  // hero headline is revealed manually right after the intro animation, so skip it here
  document.querySelectorAll('.reveal, .blur-reveal').forEach(el => {
    if (el.id !== 'heroHeadline') io.observe(el);
  });

  /* ================= INTRO ANIMATION ================= */
  const preloader = document.getElementById('preloader');
  const introWord = document.getElementById('introWord');
  const panels = document.getElementById('introPanels');
  const heroHeadline = document.getElementById('heroHeadline');

  document.body.classList.add('locked');

  requestAnimationFrame(() => {
    preloader.classList.add('animate'); // plays the introIn keyframe on the big word
  });

  // Sequence: show big word (~900ms) -> hold briefly -> wipe color panels away -> reveal hero headline
  setTimeout(() => {
    panels.classList.add('wipe');
    preloader.style.opacity = '0';
    preloader.style.transition = 'opacity .4s ease';
  }, 1500);

  setTimeout(() => {
    preloader.classList.add('done');
    document.body.classList.remove('locked');
    heroHeadline.classList.add('in-view');
  }, 2000);
});
