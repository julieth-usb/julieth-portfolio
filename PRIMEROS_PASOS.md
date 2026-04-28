# 🎯 Guía de Primeros Pasos

Bienvenido a tu nuevo portfolio. Aquí te ayudaré a personalizarlo rápidamente.

## ⚡ Pasos Iniciales (5 minutos)

### Paso 1: Abre el proyecto
1. Abre la carpeta `julieth web` en tu editor de código (VS Code recomendado)
2. Abre el archivo `index.html` en tu navegador

### Paso 2: Actualiza tu información personal
Edita `index.html` y busca estas secciones:

#### En el Hero (Sección de inicio)
```html
<h1 class="hero-title">Hola, soy <span class="highlight">Julieth Andrea</span></h1>
<p class="hero-subtitle">Estudiante de Ingeniería de Sistemas • Desarrolladora • Diseñadora • Lectora</p>
```

#### En About Me
```html
<p>
    Mi nombre es <strong>Julieth Andrea Cubides Herreño</strong>, tengo 21 años y soy estudiante 
    de Ingeniería de Sistemas...
</p>
```

#### En el formulario de contacto
```html
<a href="mailto:tu-email@ejemplo.com" class="contact-link">
    <span class="icon">📧</span>
    <span>tu-email@ejemplo.com</span>
</a>
```

### Paso 3: Cambia el color del tema
Edita `css/styles.css` (líneas 3-6):

```css
:root {
    --accent-color: #6c5ce7;      /* Cambiar este color principal */
    --accent-light: #a29bfe;      /* Color claro del tema */
    --accent-dark: #5f3dc4;       /* Color oscuro del tema */
}
```

**Ejemplos de colores bonitos:**
```
Púrpura (actual):     #6c5ce7
Azul:                 #0984e3
Verde:                #00b894
Rojo:                 #d63031
Naranja:              #fd79a8
Turquesa:             #1abc9c
```

### Paso 4: Prueba en tu navegador
1. Guarda los cambios (Ctrl + S)
2. Recarga la página (F5)
3. Cambia el tema con el botón 🌙/☀️
4. Prueba en móvil (F12 → Toggle device toolbar)

## 🎨 Personalización Avanzada

### Cambiar Logo/Marca

En `index.html` línea 31:
```html
<div class="nav-brand">JAC</div>
```

Puedes cambiar "JAC" a lo que prefieras:
```html
<div class="nav-brand">💜 Julieth</div>
<!-- o -->
<div class="nav-brand">JA</div>
```

### Agregar tu foto de perfil

1. Descarga una foto tuya o prepara una imagen
2. Copia la imagen a la carpeta `assets`
3. En `index.html`, busca la línea del hero-image:

```html
<!-- Antes -->
<div class="hero-image">
    <div class="profile-placeholder">
        <span>📷</span>
    </div>
</div>

<!-- Después -->
<div class="hero-image">
    <img src="assets/tu-foto.jpg" alt="Julieth Andrea" class="profile-photo">
</div>
```

4. En `css/styles.css`, agrega estos estilos:

```css
.profile-photo {
    width: 100%;
    max-width: 350px;
    height: 350px;
    border-radius: 20px;
    object-fit: cover;
    box-shadow: var(--shadow-lg);
    border: 3px solid var(--accent-color);
}
```

### Cambiar Habilidades

En `index.html`, encuentra la sección de skills:

```html
<div class="skills-grid">
    <div class="skill-card">
        <h4>Frontend</h4>
        <p>HTML • CSS • JavaScript • React</p>
    </div>
    <!-- Agrega o modifica más tarjetas -->
</div>
```

### Agregar más proyectos

Duplica este bloque tantas veces como proyectos tengas:

```html
<div class="project-card">
    <div class="project-image">
        <div class="project-placeholder">📱</div>
    </div>
    <div class="project-content">
        <h3>Nombre del Proyecto</h3>
        <p>Descripción breve de lo que hace</p>
        <div class="project-tags">
            <span class="tag">Tecnología 1</span>
            <span class="tag">Tecnología 2</span>
        </div>
        <div class="project-links">
            <a href="URL-DEL-PROYECTO" class="link-btn">Ver Proyecto</a>
            <a href="https://github.com/..." class="link-btn">Código</a>
        </div>
    </div>
</div>
```

**Emojis sugeridos para proyectos:**
- 💻 Para aplicaciones web
- 📱 Para aplicaciones móviles
- 🎮 Para juegos
- 🛍️ Para e-commerce
- 🎨 Para proyectos de diseño
- 📊 Para dashboards
- 🔐 Para seguridad
- 🌐 Para redes

## 🔗 Actualizar Enlaces de Contacto

En la sección de contacto, actualiza tus redes sociales:

```html
<a href="https://linkedin.com/in/tu-usuario" target="_blank" class="contact-link">
    <span class="icon">💼</span>
    <span>LinkedIn</span>
</a>
<a href="https://github.com/tu-usuario" target="_blank" class="contact-link">
    <span class="icon">🐙</span>
    <span>GitHub</span>
</a>
<a href="https://twitter.com/tu-usuario" target="_blank" class="contact-link">
    <span class="icon">🐦</span>
    <span>Twitter</span>
</a>
<a href="https://instagram.com/tu-usuario" target="_blank" class="contact-link">
    <span class="icon">📷</span>
    <span>Instagram</span>
</a>
```

## 📧 Configurar Formulario de Contacto Funcional

### Opción A: Usar Formspree (Más fácil)

1. Ve a [formspree.io](https://formspree.io/)
2. Haz clic en "Sign Up"
3. Crea una nueva cuenta
4. Crea un nuevo formulario y copia el ID
5. En `index.html`, reemplaza la línea del formulario:

```html
<!-- Antes -->
<form id="contactForm">

<!-- Después -->
<form action="https://formspree.io/f/TU_ID" method="POST">
```

Ahora elimina el evento de JavaScript para que funcione automáticamente.

### Opción B: Usar EmailJS (Más profesional)

1. Crea cuenta en [emailjs.com](https://www.emailjs.com/)
2. Obtén tu Public Key
3. En `js/script.js`, descomenta el código de EmailJS (busca el comentario)
4. Llena tus credenciales

## 🎨 Cambiar Fuentes

En `css/styles.css`, línea 13:

```css
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    /* Puedes cambiar a otras fuentes disponibles */
}
```

**Opciones de Google Fonts:**
1. Ve a [fonts.google.com](https://fonts.google.com/)
2. Elige una fuente
3. Copia el import
4. Agrégalo al inicio de `styles.css`

Ejemplo:
```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

body {
    font-family: 'Poppins', sans-serif;
}
```

## 📱 Probar en dispositivos móviles

### Navegador
- Abre F12 (Developer Tools)
- Presiona Ctrl + Shift + M
- Prueba diferentes tamaños de pantalla

### Real
1. Sube tu proyecto a Vercel (gratis)
2. Abre el URL en tu teléfono
3. Prueba todas las funciones

## 🚀 Subir a Internet (Gratuito)

### Opción 1: Vercel (Recomendado)
```bash
1. Crea cuenta en vercel.com
2. Arrastra tu carpeta "julieth web"
3. ¡Listo! Tu sitio estará en vivo en minutos
```

### Opción 2: Netlify
```bash
1. Ve a netlify.com
2. Arrastra tu carpeta
3. Obtén un URL público automático
```

### Opción 3: GitHub Pages
```bash
1. Sube tu código a GitHub
2. Ve a Settings → Pages
3. Selecciona "main branch"
4. Tu sitio estará en usuario.github.io/julieth-web
```

## 🎯 Checklist de Personalización

- [ ] Actualicé mi nombre y descripción
- [ ] Cambié el color del tema
- [ ] Agregué mi foto de perfil
- [ ] Actualicé mis habilidades
- [ ] Agregué mis proyectos reales
- [ ] Configuré mis enlaces de contacto
- [ ] Probé el formulario
- [ ] Probé el tema Dark/Light
- [ ] Probé en móvil
- [ ] Subí a internet

## 🆘 Problemas Comunes

### "No veo mis cambios"
→ Presiona Ctrl + Shift + R para hacer refresh completo

### "Las imágenes no cargan"
→ Verifica que estén en la carpeta `assets`
→ Usa rutas relativas: `assets/nombre.jpg`

### "El formulario no envía"
→ Necesitas usar Formspree o EmailJS
→ No funciona en localhost sin configuración

### "El menú móvil no funciona"
→ Verifica que `js/script.js` esté cargado
→ Abre F12 y busca errores en la consola

## 💡 Tips Pro

1. **Usa shortcut T** para cambiar tema rápido
2. **Scroll suave automático** - ya está configurado
3. **Responsive automático** - no necesita ajustes
4. **Dark mode inteligente** - respeta preferencias del sistema
5. **Sin dependencias** - todo con JavaScript vanilla

## 📚 Próximos Pasos

Cuando termines de personalizar:

1. ✅ Sube a Vercel/Netlify/GitHub Pages
2. ✅ Comparte el URL en LinkedIn
3. ✅ Agrega el URL en tu CV
4. ✅ Continúa agregando proyectos
5. ✅ Mantén actualizada tu información

## 🎉 ¡Listo!

Tu portfolio está listo para mostrar al mundo. Recuerda:

- Actualiza regularmente tus proyectos
- Mantén el diseño limpio y profesional
- Haz que sea fácil contactarte
- Sé auténtico y muestra tu personalidad

¡Mucho éxito! 💜

---

¿Preguntas? Revisa el archivo `README.md` para más detalles.
