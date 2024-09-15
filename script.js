function toggle(el) {
    const element = document.getElementById(el);
    if (element.style.display === 'block') {
        element.style.display = 'none';
    } else {
        element.style.display = 'block';
    }
}
