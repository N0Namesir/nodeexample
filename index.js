const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mini API</title>
  <style>
    body { font-family: sans-serif; max-width: 600px; margin: 60px auto; padding: 0 20px; color: #333; }
    h1 { color: #2d6a4f; }
    a { color: #40916c; text-decoration: none; margin-right: 16px; }
    a:hover { text-decoration: underline; }
    .routes { background: #f0fdf4; border-radius: 8px; padding: 16px 24px; margin-top: 24px; }
    code { background: #d8f3dc; padding: 2px 6px; border-radius: 4px; font-size: 0.9em; }
  </style>
</head>
<body>
  <h1>Bienvenido a Mini API</h1>
  <p>Servidor Express corriendo en el puerto <strong>${PORT}</strong>.</p>
  <div class="routes">
    <p>Rutas disponibles:</p>
    <p><a href="/api/hora"><code>GET /api/hora</code></a> — hora actual del servidor</p>
    <p><a href="/api/info"><code>GET /api/info</code></a> — información del alumno</p>
  </div>
</body>
</html>`);
});

app.get('/api/hora', (req, res) => {
  res.json({ hora: new Date().toISOString() });
});

app.get('/api/info', (req, res) => {
  res.json({
    nombre: 'Eduardo Rivas',
    descripcion: 'Alumno de desarrollo web — proyecto Mini API con Express'
  });
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
