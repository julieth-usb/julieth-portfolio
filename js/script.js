// ========== Navegación y Menú Hamburguesa ==========

const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Abrir/Cerrar menú hamburguesa
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Cerrar menú al hacer clic en un enlace
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ========== Navegación Activa ==========

// Actualizar enlace activo cuando se hace scroll
window.addEventListener('scroll', () => {
    let current = '';

    // Obtener las secciones
    const sections = document.querySelectorAll('.section');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    // Actualizar la clase activa
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-section') === current) {
            link.classList.add('active');
        }
    });
});

// ========== Formulario de Contacto ==========

const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Obtener valores del formulario
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Validaciones básicas
    if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
        alert('Por favor completa todos los campos');
        return;
    }

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Por favor ingresa un correo válido');
        return;
    }

    // Simulación de envío (en producción, usar un servicio como EmailJS)
    console.log({
        nombre: name,
        email: email,
        asunto: subject,
        mensaje: message,
        fecha: new Date().toLocaleString('es-ES')
    });

    // Mensaje de éxito
    alert('¡Mensaje enviado con éxito! Te contactaré pronto.');

    // Limpiar formulario
    contactForm.reset();

    // Opcional: Enviar por correo usando EmailJS
    // sendEmailWithEmailJS(name, email, subject, message);
});

// ========== Efecto de Scroll Suave ==========

// La navegación suave ya está configurada en el HTML con scroll-behavior: smooth

// ========== Funcionalidad adicional: Animación al aparecer elementos ==========

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observar tarjetas de proyectos
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Observar tarjetas de habilidades
const skillCards = document.querySelectorAll('.skill-card');
skillCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// ========== Función para enviar correo con EmailJS (Opcional) ==========
/*
Para usar EmailJS, primero instala:
npm install @emailjs/browser

Luego descomenta el código de abajo y configura tus credenciales:

import emailjs from '@emailjs/browser';

emailjs.init('TU_PUBLIC_KEY'); // Obtén esto de tu dashboard de EmailJS

function sendEmailWithEmailJS(name, email, subject, message) {
    emailjs.send('tu_service_id', 'tu_template_id', {
        from_name: name,
        from_email: email,
        to_email: 'tu-email@ejemplo.com',
        subject: subject,
        message: message
    }).then(() => {
        console.log('Correo enviado exitosamente');
    }, (error) => {
        console.error('Error al enviar correo:', error);
    });
}
*/

// ========== Configuración de teclas de acceso rápido ==========

// Presionar 'T' para cambiar tema
document.addEventListener('keydown', (e) => {
    if (e.key.toLowerCase() === 't') {
        document.getElementById('themeToggle').click();
    }
});

// ========== Prevenir comportamiento por defecto en enlaces sin destino ==========

document.querySelectorAll('a[href="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        console.log('Este enlace necesita ser configurado');
    });
});

// ========== Cargar datos dinámicamente (Ejemplo con fetch) ==========

// Función para cargar proyectos desde una API (si es necesario)
/*
async function loadProjects() {
    try {
        const response = await fetch('api/proyectos');
        const projects = await response.json();
        renderProjects(projects);
    } catch (error) {
        console.error('Error cargando proyectos:', error);
    }
}

function renderProjects(projects) {
    const projectsGrid = document.querySelector('.projects-grid');
    projectsGrid.innerHTML = '';

    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.classList.add('project-card');
        projectCard.innerHTML = `
            <div class="project-image">
                <div class="project-placeholder">${project.emoji}</div>
            </div>
            <div class="project-content">
                <h3>${project.titulo}</h3>
                <p>${project.descripcion}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                <div class="project-links">
                    <a href="${project.enlace_proyecto}" class="link-btn">Ver Proyecto</a>
                    <a href="${project.enlace_codigo}" class="link-btn">Código</a>
                </div>
            </div>
        `;
        projectsGrid.appendChild(projectCard);
    });
}

// Llamar cuando la página cargue
document.addEventListener('DOMContentLoaded', loadProjects);
*/

// ========== Log de inicialización ==========
console.log('%c🎉 ¡Portfolio cargado correctamente! 🎉', 'color: #6c5ce7; font-size: 16px; font-weight: bold;');
console.log('%cAutor: Julieth Andrea Cubides', 'color: #6c5ce7; font-size: 14px;');
