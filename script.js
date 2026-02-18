(function () {
  'use strict';

  // Current year in footer
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Event date: do not allow past dates (min = today)
  var eventDateInput = document.getElementById('event-date');
  if (eventDateInput) {
    var today = new Date();
    var y = today.getFullYear();
    var m = String(today.getMonth() + 1).padStart(2, '0');
    var d = String(today.getDate()).padStart(2, '0');
    eventDateInput.setAttribute('min', y + '-' + m + '-' + d);
  }

  // Header background on scroll
  var header = document.querySelector('.site-header');
  if (header) {
    function onScroll() {
      header.classList.toggle('scrolled', window.scrollY > 50);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // Mobile menu toggle
  var menuToggle = document.querySelector('.menu-toggle');
  var nav = document.querySelector('.nav');
  if (menuToggle && nav) {
    menuToggle.addEventListener('click', function () {
      nav.classList.toggle('is-open');
      menuToggle.setAttribute('aria-label', nav.classList.contains('is-open') ? 'Close menu' : 'Open menu');
    });
  }

  // Services: expand/collapse details when "Explore Service" is clicked
  var servicesExploreBtn = document.getElementById('services-explore-btn');
  var servicesDetails = document.getElementById('services-details');
  if (servicesExploreBtn && servicesDetails) {
    servicesExploreBtn.addEventListener('click', function () {
      var isOpen = !servicesDetails.hidden;
      servicesDetails.hidden = isOpen;
      servicesExploreBtn.setAttribute('aria-expanded', !isOpen);
      servicesExploreBtn.textContent = isOpen ? 'Explore Service' : 'Close details';
      if (!isOpen) servicesDetails.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  // Event type "Other" – show/hide specify box
  var eventTypeSelect = document.getElementById('event-type');
  var eventTypeOtherWrap = document.getElementById('event-type-other-wrap');
  if (eventTypeSelect && eventTypeOtherWrap) {
    function toggleOtherSpecify() {
      var isOther = eventTypeSelect.value === 'other';
      eventTypeOtherWrap.hidden = !isOther;
      if (!isOther) {
        var otherInput = document.getElementById('event-type-other');
        if (otherInput) otherInput.value = '';
      }
    }
    eventTypeSelect.addEventListener('change', toggleOtherSpecify);
    toggleOtherSpecify();
    var otherInput = document.getElementById('event-type-other');
    var otherError = document.getElementById('event-type-other-error');
    if (otherInput) {
      otherInput.addEventListener('input', function () {
        if (otherError) otherError.textContent = '';
        otherInput.removeAttribute('aria-invalid');
      });
    }
  }

  // Contact form: validate required fields, then submit or show thank-you
  var form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      // 1. Let browser validate required (name, email, message) first
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      // 2. "Please specify" is required ONLY when dropdown is "Other"; other options do not require it
      var eventTypeSelect = document.getElementById('event-type');
      var eventTypeOtherWrap = document.getElementById('event-type-other-wrap');
      var eventTypeOtherInput = document.getElementById('event-type-other');
      var eventTypeOtherError = document.getElementById('event-type-other-error');
      if (eventTypeSelect && eventTypeSelect.value === 'other') {
        var otherValue = eventTypeOtherInput ? eventTypeOtherInput.value.trim() : '';
        if (otherValue === '') {
          e.preventDefault();
          if (eventTypeOtherWrap) eventTypeOtherWrap.hidden = false;
          if (eventTypeOtherError) eventTypeOtherError.textContent = 'Please specify your event type.';
          if (eventTypeOtherInput) {
            eventTypeOtherInput.focus();
            eventTypeOtherInput.setAttribute('aria-invalid', 'true');
          }
          return;
        }
      }
      if (eventTypeOtherError) eventTypeOtherError.textContent = '';
      if (eventTypeOtherInput) eventTypeOtherInput.removeAttribute('aria-invalid');

      var action = (form.getAttribute('action') || '').trim();
      var isPlaceholder = action === '#' || action === '';

      if (isPlaceholder) {
        e.preventDefault();
        var btn = form.querySelector('button[type="submit"]');
        var originalText = btn ? btn.textContent : '';
        if (btn) {
          btn.textContent = 'Sending…';
          btn.disabled = true;
        }
        setTimeout(function () {
          if (btn) {
            btn.textContent = 'Message sent';
            btn.disabled = false;
          }
          alert("Thanks for your message!\n\nTo get submissions in your email: open FORMSPREE_SETUP.md and follow the steps. Then in index.html change the form action from \"#\" to your Formspree URL.");
          form.reset();
          if (eventTypeOtherWrap) eventTypeOtherWrap.hidden = true;
          if (eventTypeOtherInput) eventTypeOtherInput.value = '';
          if (btn) btn.textContent = originalText;
        }, 800);
      }
    });
  }
})();
