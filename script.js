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
