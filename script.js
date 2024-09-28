function toggle(el) {
  const element = document.getElementById(el);
  if (element.style.display === 'block') {
      element.style.display = 'none';
  } else {
      element.style.display = 'block';
  }
}

function abrirFormulario() {
  window.open('https://forms.gle/uJrAhxfpXESP5ygp9', '_blank');
}
