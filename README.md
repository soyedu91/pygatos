galeria-gatuna/
│
├── html/                     ← Carpeta principal del proyecto (servida por Nginx)
│   ├── index.html            ← Página principal
│   ├── css/
│   │   └── style.css         ← Estilos personalizados (opcional)
│   └── js/
│       ├── app.js            ← Lógica principal (inicia la app)
│       ├── api.js            ← Comunicación con la API de gatos
│       └── ui.js             ← Funciones de interfaz (render, errores)
├── Dockerfile                ← Instrucciones para armar la imagen Docker
└── README.md                 ← Documentación con pasos de uso