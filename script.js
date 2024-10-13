function toggle(el) {
  const element = document.getElementById(el);
  if (element.style.display === 'block') {
      element.style.display = 'none';
  } else {
      element.style.display = 'block';
  }
}

function abrirFormulario() {
  window.open('https://docs.google.com/forms/d/e/1FAIpQLSc_Un9gOOgdoD7qdfRLD6d-9vAkmYWXOJDpi2ZxRIf_m8oqEw/viewform?usp=sf_link', '_blank');
}

function menuShow() {
  let menuMobile = document.querySelector('.mobile-menu');
  if (menuMobile.classList.contains('open')) {
      menuMobile.classList.remove('open');
      document.querySelector('.icon').src = "./img/img/menu_white_36dp.svg";
  } else {
      menuMobile.classList.add('open');
      document.querySelector('.icon').src = "./img/img/close_white_36dp.svg";
  }
}
