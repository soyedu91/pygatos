## PY Gatos - Html + Docker

-Sitio html que muetra imagenes aleatorias de gatitos.

-Consume la API [TheCatAPI](https://thecatapi.com/)

-Usa Bootstrap

-Incluye el dockerfile para contenerizar usando nginx


#Estructura:
   - Py Gatos/
   - html/                     ← Carpeta principal del proyecto (servida por Nginx)
     -    index.html            ← Página principal
      -  js/
       -    app.js            ← Lógica principal (inicia la app)
        -   api.js            ← Comunicación con la API de gatos
         -  ui.js             ← Funciones de interfaz (render, errores)
     -  Dockerfile                ← Instrucciones para armar la imagen Docker
     - README.md                 ← Documentación con pasos de uso

#Requisitos:
    *Docker (https://www.docker.com/)

#Clonar repositorio:

  git clone https://github.com/soyedu91/pygatos.git
  
 #Correr docker:

  -Asegurate estar en:
    cd pygatos

  -Construir imagen
    docker build -t pygatos .
    
  -Correr imagen
    docker run -d -p 8080:80 --name contenedor-gatos pygatos

  -Abrír:
    http://localhost:8080 


