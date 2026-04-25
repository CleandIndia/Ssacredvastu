(function () {
  const toggle = document.querySelector('.mobile-toggle');
  const nav = document.querySelector('.nav-links');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      const isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(isOpen));
      toggle.textContent = isOpen ? '×' : '☰';
    });

    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.textContent = '☰';
      });
    });
  }

  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('[data-page]').forEach(function (link) {
    if (link.getAttribute('data-page') === currentPage) {
      link.classList.add('active');
    }
  });

  document.querySelectorAll('[data-whatsapp-form]').forEach(function (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();

      const name = form.querySelector('[name="name"]')?.value.trim() || '-';
      const phone = form.querySelector('[name="phone"]')?.value.trim() || '-';
      const city = form.querySelector('[name="city"]')?.value.trim() || '-';
      const service = form.querySelector('[name="service"]')?.value.trim() || '-';
      const message = form.querySelector('[name="message"]')?.value.trim() || '-';
      const source = form.querySelector('[name="source"]')?.value.trim() || 'Website';

      const text =
        'Hello Sshweta Saras,\n\n' +
        'I would like to book a Vastu consultation.\n\n' +
        'Name: ' + name + '\n' +
        'Phone: ' + phone + '\n' +
        'City: ' + city + '\n' +
        'Service Required: ' + service + '\n' +
        'Message: ' + message + '\n\n' +
        'Source: ' + source + '\n' +
        'Powered by Leadbanana.';

      window.open('https://wa.me/919029237230?text=' + encodeURIComponent(text), '_blank');
    });
  });
})();
