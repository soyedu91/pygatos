# Usamos una imagen oficial de Nginx
FROM nginx:alpine

# Borramos la página por defecto de Nginx
RUN rm -rf /usr/share/nginx/html/*

# Copiamos nuestros archivos HTML al directorio de Nginx
COPY html/ /usr/share/nginx/html/

# Expone el puerto 80 para acceder al sitio
EXPOSE 80