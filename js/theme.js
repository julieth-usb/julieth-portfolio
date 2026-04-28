// ========== Gestión del Tema Dark/Light ==========

// Elementos del DOM
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.querySelector('.theme-icon');
const htmlElement = document.documentElement;
const body = document.body;

// Verificar si existe preferencia guardada del tema
const savedTheme = localStorage.getItem('theme');

// Cargar el tema guardado o detectar preferencia del sistema
function initTheme() {
    if (savedTheme) {
        // Usar el tema guardado
        body.classList.add(savedTheme === 'dark' ? 'dark-theme' : '');
        updateThemeIcon(savedTheme === 'dark');
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        // Detectar preferencia del sistema
        body.classList.add('dark-theme');
        updateThemeIcon(true);
        localStorage.setItem('theme', 'dark');
    } else {
        // Por defecto, tema claro
        localStorage.setItem('theme', 'light');
        updateThemeIcon(false);
    }
}

// Actualizar el icono del tema
function updateThemeIcon(isDark) {
    themeIcon.textContent = isDark ? '☀️' : '🌙';
}

// Alternar tema
function toggleTheme() {
    const isDarkTheme = body.classList.toggle('dark-theme');
    updateThemeIcon(isDarkTheme);
    localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
}

// Event listener para el botón de tema
themeToggle.addEventListener('click', toggleTheme);

// Escuchar cambios en la preferencia del sistema
if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!savedTheme) {
            body.classList.toggle('dark-theme', e.matches);
            updateThemeIcon(e.matches);
        }
    });
}

// Inicializar el tema al cargar la página
initTheme();
