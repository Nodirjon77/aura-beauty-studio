/* ==========================================================================
   AURA — Main JavaScript
   Vanilla JS, no dependencies. Modular structure with clear sections.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initBurgerMenu();
  initPortfolioFilter();
  initBookingForm();
});

/* ==========================================================================
   1. BURGER MENU (mobile navigation toggle)
   ========================================================================== */
function initBurgerMenu() {
  const burgerBtn = document.getElementById('burger-btn');
  const nav = document.getElementById('header-nav');

  if (!burgerBtn || !nav) return;

  burgerBtn.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    burgerBtn.classList.toggle('is-active', isOpen);
    burgerBtn.setAttribute('aria-expanded', String(isOpen));
  });

  // Close menu when a nav link is clicked (mobile UX)
  nav.querySelectorAll('.header__nav-link').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      burgerBtn.classList.remove('is-active');
      burgerBtn.setAttribute('aria-expanded', 'false');
    });
  });

  // Close menu on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('is-open')) {
      nav.classList.remove('is-open');
      burgerBtn.classList.remove('is-active');
      burgerBtn.setAttribute('aria-expanded', 'false');
      burgerBtn.focus();
    }
  });
}

/* ==========================================================================
   2. PORTFOLIO FILTER
   ========================================================================== */
function initPortfolioFilter() {
  const filterBtns = document.querySelectorAll('.portfolio__filter-btn');
  const items = document.querySelectorAll('.portfolio-item');

  if (!filterBtns.length || !items.length) return;

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;

      // Update active button state
      filterBtns.forEach((b) => {
        b.classList.remove('is-active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('is-active');
      btn.setAttribute('aria-selected', 'true');

      // Show/hide portfolio items
      items.forEach((item) => {
        const matches = filter === 'all' || item.dataset.category === filter;
        item.hidden = !matches;
      });
    });
  });
}

/* ==========================================================================
   3. BOOKING FORM VALIDATION
   ========================================================================== */
function initBookingForm() {
  const form = document.getElementById('booking-form');

  if (!form) return;

  const phoneInput = form.querySelector('#phone');
  const phonePattern = /^[+]?[\d\s-()]{7,20}$/;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let isValid = true;
    clearErrors(form);

    // Required fields check
    form.querySelectorAll('[required]').forEach((field) => {
      if (!field.value.trim()) {
        showError(field, 'This field is required');
        isValid = false;
      }
    });

    // Phone format check (only if not already flagged as empty)
    if (phoneInput.value.trim() && !phonePattern.test(phoneInput.value.trim())) {
      showError(phoneInput, 'Please enter a valid phone number');
      isValid = false;
    }

    if (!isValid) return;

    // Simulate successful submission (replace with real API call in production)
    showSuccessMessage(form);
    form.reset();
  });
}

function showError(field, message) {
  field.classList.add('form-group__input--error');
  field.setAttribute('aria-invalid', 'true');

  const errorEl = document.createElement('span');
  errorEl.className = 'form-group__error';
  errorEl.textContent = message;
  errorEl.setAttribute('role', 'alert');

  field.insertAdjacentElement('afterend', errorEl);
}

function clearErrors(form) {
  form.querySelectorAll('.form-group__error').forEach((el) => el.remove());
  form.querySelectorAll('.form-group__input--error').forEach((el) => {
    el.classList.remove('form-group__input--error');
    el.removeAttribute('aria-invalid');
  });
}

function showSuccessMessage(form) {
  const existing = form.querySelector('.form-group__success');
  if (existing) existing.remove();

  const successEl = document.createElement('p');
  successEl.className = 'form-group__success';
  successEl.setAttribute('role', 'status');
  successEl.textContent = 'Thank you! Your booking request has been received.';

  form.prepend(successEl);

  setTimeout(() => successEl.remove(), 5000);
}