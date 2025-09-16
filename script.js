const toggle = document.querySelector('.menu-toggle');
const mobilePanel = document.getElementById('mobile-panel');

toggle.addEventListener('click', () => {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!isOpen));
    toggle.classList.toggle('open');
    mobilePanel.classList.toggle('hidden');
});

document.querySelectorAll('#mobile-panel a').forEach(a => {
    a.addEventListener('click', () => {
      toggle.setAttribute('aria-expanded', 'false');
      toggle.classList.remove('open');
      mobilePanel.classList.add('hidden');
    });
  });