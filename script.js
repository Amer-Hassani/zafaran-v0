/* =========================================================
   ZAFARAN — JavaScript
   Interactions: nav scroll, sticky bar, reveal animations,
   mobile menu, input interactions
========================================================= */

document.addEventListener('DOMContentLoaded', () => {

  // ── Navbar: glassmorphism on scroll ──────────────────
  const navbar = document.getElementById('navbar');
  const heroInput = document.getElementById('instagram-input');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    handleStickyBar();
    handleReveal();
  }, { passive: true });

  // ── Sticky Bar: appear after hero ────────────────────
  const stickyBar = document.getElementById('sticky-bar');
  const heroSection = document.getElementById('hero');

  function handleStickyBar() {
    const heroBottom = heroSection.getBoundingClientRect().bottom;
    if (heroBottom < 0) {
      stickyBar.classList.add('visible');
    } else {
      stickyBar.classList.remove('visible');
    }
  }

  // ── Scroll Reveal ─────────────────────────────────────
  const revealTargets = [
    '#hero-badge', '#hero-headline', '#hero-subtext',
    '#hero-input-wrap', '#hero-stats', '#hero-visual',
    '#trust-section', '#step-1', '#step-2', '#step-3', '#step-4',
    '#process-visual', '#feat-ai-import', '#feat-image-enhance',
    '#feat-descriptions', '#feat-orders', '#feat-bilingual',
    '#feat-share', '#testimonial-1', '#testimonial-2', '#testimonial-3',
    '#plan-starter', '#plan-growth', '#plan-pro',
    '.section-header', '#cta-form'
  ];

  // Add reveal class to target elements
  revealTargets.forEach(selector => {
    const els = document.querySelectorAll(selector);
    els.forEach(el => el.classList.add('reveal'));
  });

  function handleReveal() {
    const revealEls = document.querySelectorAll('.reveal');
    revealEls.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 80) {
        el.classList.add('visible');
      }
    });
  }

  // Run once on load
  setTimeout(handleReveal, 100);

  // ── Mobile Menu ───────────────────────────────────────
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const navLinks = document.getElementById('nav-links');
  const navActions = document.querySelector('.nav-actions');
  let menuOpen = false;

  mobileMenuBtn.addEventListener('click', () => {
    menuOpen = !menuOpen;
    if (menuOpen) {
      navLinks.style.cssText = `
        display: flex; flex-direction: column;
        position: fixed; top: 72px; left: 0; right: 0;
        background: rgba(250,244,234,0.97);
        backdrop-filter: blur(20px);
        border-bottom: 1px solid rgba(91,45,142,0.12);
        padding: 20px 24px;
        gap: 4px;
        z-index: 99;
        box-shadow: 0 8px 32px rgba(61,26,110,0.12);
      `;
    } else {
      navLinks.style.cssText = 'display: none;';
    }
    // Animate hamburger
    const spans = mobileMenuBtn.querySelectorAll('span');
    if (menuOpen) {
      spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    } else {
      spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
    }
  });

  // Close menu on nav link click
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      if (menuOpen) mobileMenuBtn.click();
    });
  });

  // ── Hero Input: focus effects ─────────────────────────
  if (heroInput) {
    heroInput.addEventListener('focus', () => {
      heroInput.closest('.hero-input-box').style.borderColor = 'var(--purple-primary)';
    });
    heroInput.addEventListener('blur', () => {
      heroInput.closest('.hero-input-box').style.borderColor = '';
    });
  }

  // ── CTA Button interactions ───────────────────────────
  function handleCtaSubmit(inputId, btnId) {
    const input = document.getElementById(inputId);
    const btn = document.getElementById(btnId);
    if (!input || !btn) return;

    btn.addEventListener('click', () => {
      const val = input.value.trim();
      if (!val) {
        input.focus();
        input.style.borderColor = 'var(--saffron)';
        input.setAttribute('placeholder', 'Enter your @username first!');
        setTimeout(() => {
          input.style.borderColor = '';
          input.setAttribute('placeholder', inputId === 'instagram-input'
            ? 'Paste your Instagram username or link'
            : 'Your Instagram username'
          );
        }, 2000);
        return;
      }
      // Simulate loading state
      const originalContent = btn.innerHTML;
      btn.innerHTML = '<span>Setting up your store…</span>';
      btn.disabled = true;
      btn.style.opacity = '0.75';
      setTimeout(() => {
        btn.innerHTML = '✓ <span>You\'re on the waitlist!</span>';
        btn.style.background = '#2D8B75';
        btn.style.opacity = '1';
        input.value = '';
        setTimeout(() => {
          btn.innerHTML = originalContent;
          btn.disabled = false;
          btn.style.background = '';
          btn.style.opacity = '';
        }, 3000);
      }, 1800);
    });

    // Submit on Enter
    input.addEventListener('keydown', e => {
      if (e.key === 'Enter') btn.click();
    });
  }

  handleCtaSubmit('instagram-input', 'hero-cta-btn');
  handleCtaSubmit('cta-input', 'cta-submit-btn');

  // ── Smooth scroll for anchor links ───────────────────
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = 80; // navbar height
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  // ── Order confirm button micro-animation ─────────────
  const orderBtn = document.querySelector('.order-confirm-btn');
  if (orderBtn) {
    orderBtn.addEventListener('click', function () {
      this.textContent = '✓';
      this.style.background = '#2D8B75';
      const notification = this.closest('.order-notification');
      if (notification) {
        notification.style.background = 'rgba(79,184,156,0.15)';
        notification.style.borderColor = 'rgba(79,184,156,0.4)';
        const strong = notification.querySelector('strong');
        if (strong) strong.textContent = 'Order confirmed!';
      }
      setTimeout(() => {
        this.textContent = '✓';
        this.style.background = '';
        if (notification) {
          notification.style.background = '';
          notification.style.borderColor = '';
          const strong = notification.querySelector('strong');
          if (strong) strong.textContent = 'New order!';
        }
      }, 2500);
    });
  }

  // ── Step cards staggered delay ────────────────────────
  document.querySelectorAll('.step-card').forEach((card, i) => {
    card.style.transitionDelay = `${i * 0.08}s`;
  });

  document.querySelectorAll('.feature-card').forEach((card, i) => {
    card.style.transitionDelay = `${i * 0.06}s`;
  });

  document.querySelectorAll('.testimonial-card').forEach((card, i) => {
    card.style.transitionDelay = `${i * 0.1}s`;
  });

  document.querySelectorAll('.pricing-card').forEach((card, i) => {
    card.style.transitionDelay = `${i * 0.1}s`;
  });

  // ── Language switcher (demo only) ────────────────────
  document.querySelectorAll('.lang-switch').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      document.querySelectorAll('.lang-switch').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  // ── Number counter animation ──────────────────────────
  function animateCount(el, target, suffix = '') {
    const duration = 1800;
    const start = Date.now();
    const startVal = 0;

    function tick() {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(startVal + (target - startVal) * eased);
      el.textContent = current.toLocaleString() + suffix;
      if (progress < 1) requestAnimationFrame(tick);
    }
    tick();
  }

  // Observe stat numbers
  const statNums = document.querySelectorAll('.stat-num');
  const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const text = el.textContent;
        if (text.includes('18,000')) animateCount(el, 18000, '+');
        else if (text.includes('4')) {
          // keep as is
        }
        statObserver.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  statNums.forEach(n => statObserver.observe(n));

  // ── Parallax on orbs ─────────────────────────────────
  document.addEventListener('mousemove', e => {
    const orbs = document.querySelectorAll('.orb');
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;
    orbs.forEach((orb, i) => {
      const depth = (i + 1) * 0.4;
      orb.style.transform = `translate(${x * depth}px, ${y * depth}px)`;
    });
  });

});
