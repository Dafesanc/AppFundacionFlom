# Configuración de Google Maps

## Pasos para configurar Google Maps en el proyecto

### 1. Obtener una API Key de Google Maps

1. Ve a [Google Cloud Console](https://console.cloud.google.com/)
2. Crea un nuevo proyecto o selecciona uno existente
3. Habilita la API de Google Maps JavaScript
4. Crea una API Key en "Credenciales"
5. Configura las restricciones de la API Key (opcional pero recomendado)

### 2. Configurar la API Key en el proyecto

#### Opción 1: Reemplazar en index.html (Desarrollo rápido)
En el archivo `src/index.html`, reemplaza `YOUR_API_KEY` con tu API Key real:

```html
<script async defer src="https://maps.googleapis.com/maps/api/js?key=TU_API_KEY_AQUI&libraries=places"></script>
```

#### Opción 2: Usar variables de entorno (Recomendado para producción)
1. Reemplaza `YOUR_API_KEY_HERE` en los archivos de environment:
   - `src/environments/environment.ts`
   - `src/environments/environment.prod.ts`

2. Luego modifica el index.html para usar la variable de entorno (requiere configuración adicional del build)

### 3. Verificar la configuración

Una vez configurada la API Key, el mapa debería mostrarse correctamente. Si tienes problemas:

1. Verifica que la API Key esté correctamente configurada
2. Asegúrate de que la API de Google Maps JavaScript esté habilitada
3. Revisa la consola del navegador para ver si hay errores
4. Verifica que no haya restricciones de dominio en la API Key que bloqueen localhost

### 4. Fallback sin API Key

Si no configuras una API Key, el componente mostrará automáticamente un fallback con:
- Información de ubicación de la fundación
- Enlace directo a Google Maps
- Diseño atractivo que mantiene la estética del sitio

## Personalización

Puedes personalizar la ubicación del mapa modificando las coordenadas en `home.component.ts`:

```typescript
mapCenter: google.maps.LatLngLiteral = {
  lat: -2.1894191, // Latitud de tu ubicación
  lng: -79.8890104 // Longitud de tu ubicación
};
```

También puedes cambiar el nivel de zoom y otras opciones del mapa en el mismo archivo.
