/* =========================================================
   ZAFRAN — Premium Interactions
========================================================= */

document.addEventListener('DOMContentLoaded', () => {

  // ── Navbar: Glassmorphism on scroll ──────────────────
  const navbar = document.getElementById('navbar');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }, { passive: true });

  // ── Reveal Animations ─────────────────────────────────
  const revealOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, revealOptions);

  // Targets for reveal
  const targets = document.querySelectorAll('.hero-container > *, .step-card, .feature-card, .testimonial-card, .pricing-card, .section-header');
  targets.forEach(t => {
    t.classList.add('reveal');
    observer.observe(t);
  });

  // ── Staggered Delays ──────────────────────────────────
  const stagger = (selector, delay) => {
    document.querySelectorAll(selector).forEach((el, i) => {
      el.style.transitionDelay = `${i * delay}s`;
    });
  };

  stagger('.step-card', 0.1);
  stagger('.feature-card', 0.08);
  stagger('.testimonial-card', 0.12);
  stagger('.pricing-card', 0.15);

  // ── CTA Interaction ───────────────────────────────────
  const handleCta = (inputWrap) => {
    const input = inputWrap.querySelector('input');
    const btn = inputWrap.querySelector('button');
    if (!input || !btn) return;

    btn.addEventListener('click', () => {
      const val = input.value.trim();
      if (!val) {
        input.focus();
        return;
      }

      const originalText = btn.innerText;
      btn.innerText = 'Creating...';
      btn.style.opacity = '0.7';
      btn.disabled = true;

      setTimeout(() => {
        btn.innerText = 'Success! ✓';
        btn.style.background = '#fff';
        btn.style.color = '#000';
        btn.style.opacity = '1';
        input.value = '';
        
        setTimeout(() => {
          btn.innerText = originalText;
          btn.style.background = '';
          btn.style.color = '';
          btn.disabled = false;
        }, 3000);
      }, 1500);
    });

    input.addEventListener('keydown', e => {
      if (e.key === 'Enter') btn.click();
    });
  };

  document.querySelectorAll('.hero-input-wrap').forEach(handleCta);

  // ── Smooth Scroll ─────────────────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = 100;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  // ── Parallax Orbs ─────────────────────────────────────
  document.addEventListener('mousemove', e => {
    const x = (e.clientX / window.innerWidth - 0.5) * 30;
    const y = (e.clientY / window.innerHeight - 0.5) * 30;
    
    document.querySelectorAll('.orb').forEach((orb, i) => {
      const speed = (i + 1) * 0.5;
      orb.style.transform = `translate(${x * speed}px, ${y * speed}px) translateX(${i === 0 ? '-50%' : '0'})`;
    });
  });

});
