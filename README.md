# 🎨 Portfolio - Julieth Andrea Cubides

Mi página web personal de hoja de vida - un portfolio profesional construido con HTML, CSS y JavaScript puro.

## 🚀 Características

✅ **Diseño Responsivo** - Se adapta perfectamente a dispositivos móviles, tablets y desktops  
✅ **Tema Oscuro/Claro** - Modo tema personalizado con persistencia en localStorage  
✅ **Navegación Fluida** - Scroll suave entre secciones con menú activo dinámico  
✅ **Menú Hamburguesa** - Navegación optimizada para dispositivos móviles  
✅ **Formulario de Contacto** - Validación de formularios y manejo de mensajes  
✅ **Animaciones Suaves** - Efectos visuales atractivos al hacer scroll  
✅ **Accesibilidad** - Estructura semántica y contraste adecuado  
✅ **Sin Dependencias Externas** - Solo HTML, CSS y JavaScript vanilla  

## 📁 Estructura del Proyecto

```
julieth web/
├── index.html           # Archivo principal HTML
├── css/
│   └── styles.css       # Estilos CSS con soporte Dark/Light
├── js/
│   ├── theme.js         # Gestión del tema oscuro/claro
│   └── script.js        # Funcionalidad principal y navegación
├── assets/              # Carpeta para imágenes y recursos
└── README.md           # Este archivo
```

## 🎯 Secciones del Portfolio

### 1. **Inicio (Landing Page)**
- Presentación personal
- Botones de llamada a acción
- Imagen de perfil (placeholder)

### 2. **Acerca de Mí**
- Información personal
- Descripción de mi perfil profesional
- Grid de habilidades principales

### 3. **Mis Proyectos**
- Galería de proyectos realizados
- Descripción de cada proyecto
- Enlaces a proyectos en vivo y códigos fuente
- Tags de tecnologías utilizadas

### 4. **Contáctame**
- Formulario de contacto funcional
- Enlaces de redes sociales
- Información de contacto directo

## 🔧 Instalación y Uso

### Opción 1: Abrir directamente
1. Abre el archivo `index.html` en tu navegador web
2. ¡Listo! El sitio está completamente funcional

### Opción 2: Usar un servidor local (recomendado)
```bash
# Si tienes Python 3 instalado
python -m http.server 8000

# Si tienes Node.js
npx serve

# O con PHP
php -S localhost:8000
```

Luego abre `http://localhost:8000` en tu navegador.

## 🎨 Personalización

### Cambiar Información Personal

Edita `index.html` y busca:
- Nombre en la sección hero
- Descripción en About Me
- Tus proyectos en la sección de Proyectos
- Enlaces de contacto en Contáctame

```html
<!-- Ejemplo: Cambiar nombre -->
<h1 class="hero-title">Hola, soy <span class="highlight">Tu Nombre</span></h1>
```

### Cambiar Colores

En `css/styles.css`, modifica las variables CSS en la raíz:

```css
:root {
    --accent-color: #6c5ce7;      /* Color principal */
    --accent-light: #a29bfe;      /* Color claro */
    --accent-dark: #5f3dc4;       /* Color oscuro */
}
```

### Agregar Proyectos

Copia y pega este bloque en la sección de proyectos:

```html
<div class="project-card">
    <div class="project-image">
        <div class="project-placeholder">🚀</div>
    </div>
    <div class="project-content">
        <h3>Nombre del Proyecto</h3>
        <p>Descripción breve del proyecto</p>
        <div class="project-tags">
            <span class="tag">HTML</span>
            <span class="tag">CSS</span>
            <span class="tag">JavaScript</span>
        </div>
        <div class="project-links">
            <a href="enlace-proyecto" class="link-btn">Ver Proyecto</a>
            <a href="enlace-codigo" class="link-btn">Código</a>
        </div>
    </div>
</div>
```

### Agregar Imagen de Perfil

Reemplaza el placeholder por una imagen real:

```html
<!-- Antes -->
<div class="profile-placeholder">
    <span>📷</span>
</div>

<!-- Después -->
<img src="assets/tu-foto.jpg" alt="Julieth Andrea" class="profile-image">
```

Asegúrate de agregar el CSS:
```css
.profile-image {
    width: 100%;
    max-width: 400px;
    border-radius: 15px;
    object-fit: cover;
}
```

## 📧 Configurar Formulario de Contacto

### Opción 1: EmailJS (Recomendado para producción)

1. Crea una cuenta en [EmailJS](https://www.emailjs.com/)
2. Obtén tu Public Key
3. Descomenta el código en `js/script.js`
4. Configura tus credenciales

### Opción 2: Formspree

1. Ve a [Formspree.io](https://formspree.io/)
2. Crea un nuevo formulario
3. Actualiza el atributo `action` del formulario

```html
<form action="https://formspree.io/f/tu-id" method="POST">
    <!-- campos -->
</form>
```

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Móvil**: 480px - 767px
- **Móvil pequeño**: < 480px

## 🌓 Tema Oscuro/Claro

El tema se almacena en `localStorage` y persiste entre sesiones.

**Tecla de acceso rápido**: Presiona **T** para cambiar tema rápidamente

```javascript
// Preferencias soportadas:
// - localStorage: 'theme' -> 'dark' o 'light'
// - Preferencia del sistema: prefers-color-scheme
```

## 🔑 Teclas de Acceso Rápido

- **T**: Cambiar tema (Dark/Light)
- **Scroll suave**: Navegar entre secciones

## 📊 Optimizaciones

- ✅ Carga rápida (sin dependencias externas)
- ✅ Optimizado para SEO básico
- ✅ Validación de formularios cliente
- ✅ Animaciones fluidas con CSS
- ✅ Código limpio y bien documentado

## 🚀 Despliegue

### Opciones de hosting gratuito:

1. **Vercel**
   ```bash
   npm i -g vercel
   vercel
   ```

2. **Netlify**
   - Arrastra y suelta tu carpeta en netlify.com
   - Conecta tu repositorio GitHub

3. **GitHub Pages**
   ```bash
   git push origin main
   ```
   Habilita en Settings → Pages

4. **Firebase Hosting**
   ```bash
   npm install -g firebase-tools
   firebase deploy
   ```

## 📝 Ejemplo de JSON de Proyectos (para API futura)

```json
[
    {
        "id": 1,
        "titulo": "Gestor de Tareas",
        "descripcion": "App para administrar tareas diarias",
        "emoji": "💻",
        "tags": ["HTML", "CSS", "JavaScript"],
        "enlace_proyecto": "https://ejemplo.com",
        "enlace_codigo": "https://github.com/usuario/proyecto"
    }
]
```

## 🐛 Troubleshooting

### El tema no se guarda
- Verifica que localStorage esté habilitado
- Revisa la consola del navegador (F12)

### Imágenes no cargan
- Asegúrate de usar rutas relativas correctas
- Coloca las imágenes en la carpeta `assets`

### Formulario no envía
- Usa EmailJS o Formspree para funcionalidad real
- En local solo funciona en modo "test"

## 📚 Recursos Útiles

- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS Tricks](https://css-tricks.com/)
- [JavaScript.info](https://javascript.info/)
- [Responsively](https://responsively.app/) - Prueba responsive

## 🎓 Mejoras Futuras

- [ ] Agregar animaciones con AOS.js
- [ ] Implementar blog
- [ ] Agregar certificados
- [ ] Integración con GitHub API
- [ ] Soporte multiidioma
- [ ] Progressive Web App (PWA)
- [ ] Dark mode automático según hora

## 📄 Licencia

Este proyecto es de código abierto. Siéntete libre de usarlo, modificarlo y compartirlo.

## 👨‍💻 Autor

**Julieth Andrea Cubides Herreño**  
Estudiante de Ingeniería de Sistemas - 7º Semestre  
📧 tu-email@ejemplo.com  
🔗 LinkedIn: https://linkedin.com  
🔗 GitHub: https://github.com  

---

Hecho con 💜 y JavaScript • 2024
