# Fundación Leonidas Ortega Moreira (FLOM)

Este proyecto es una aplicación web moderna para la Fundación Leonidas Ortega Moreira, desarrollada con Angular 19, TailwindCSS y Flowbite. La aplicación cuenta con Server-Side Rendering (SSR) para optimizar SEO y tiempo de carga inicial.

## 📋 Características

- **Tecnologías**: Angular 19, TailwindCSS 4, Flowbite
- **Renderizado**: Server-Side Rendering (SSR)
- **Responsive Design**: Adaptable a cualquier dispositivo
- **Interactividad**: Efectos de scroll, sliders dinámicos, mapas interactivos
- **SEO Optimizado**: Gracias al SSR, la aplicación es compatible con motores de búsqueda
- **Componentes Reutilizables**: Header, Footer y otros componentes modulares

## 🚀 Secciones principales

- **Home**: Slider dinámico con efecto fade, programas sociales, información institucional y testimonios
- **Nosotros**: Historia, misión, visión y valores de la fundación
- **Educación**: Programas educativos y servicios ofrecidos por la fundación

## 🔧 Instalación

```bash
# Clonar el repositorio
git clone https://github.com/Dafesanc/AppFundacionFlom.git

# Navegar al directorio del proyecto
cd AppFundacionFlom/Frontend

# Instalar dependencias
npm install --legacy-peer-deps
```

## ⚙️ Ejecución local

```bash
# Modo desarrollo con hot-reload
npm start

# Compilar para producción
npm run build

# Ejecutar el servidor SSR
npm run serve:ssr:Frontend
```

## 📝 Configuración de despliegue

### Para Cloudflare Pages:

1. **Build command**:
   ```
   npm install --legacy-peer-deps && npm run build
   ```

2. **Build output directory**:
   ```
   dist/frontend/browser
   ```

3. **Variables de entorno**:
   - `NODE_VERSION`: `18.16.0` (o compatible)

### Solución a errores comunes:

Si encuentras errores de dependencias entre Angular y @angular/google-maps, puedes:

1. Crear un archivo `.npmrc` en la raíz de Frontend con el siguiente contenido:
   ```
   legacy-peer-deps=true
   ```

2. O actualizar la versión de @angular/google-maps en package.json para que sea compatible con tu versión de Angular.

## 🧱 Estructura del proyecto

```
Frontend/
├── src/
│   ├── app/
│   │   ├── components/       # Componentes reutilizables
│   │   │   ├── header/
│   │   │   └── footer/
│   │   ├── pages/            # Páginas principales
│   │   │   ├── home/
│   │   │   ├── nosotros/
│   │   │   └── educacion/
│   │   ├── services/         # Servicios de la aplicación
│   │   └── app.routes.ts     # Configuración de rutas
│   ├── assets/               # Recursos estáticos internos
│   └── public/               # Recursos estáticos públicos
├── angular.json              # Configuración de Angular
└── tailwind.config.js        # Configuración de TailwindCSS
```

## 📄 Licencia

© 2025 Fundación Leonidas Ortega Moreira - Todos los derechos reservados

## 🤝 Desarrolladores

- David Sánchez - Desarrollo Frontend