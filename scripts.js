function showSection(sectionId) {
    // Ocultar todas las secciones
    document.querySelectorAll('.content > div').forEach(section => section.classList.add('d-none'));
    // Mostrar la sección seleccionada
    document.getElementById(sectionId).classList.remove('d-none');
  }
  
  function logout() {
    // Simula el cierre de sesión redirigiendo al login
    alert('Cerrando sesión...');
    window.location.href = 'index.html';
  }
  