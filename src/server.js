const express = require('express');
const app = express();
const port = 3000;

// Middleware para parsear JSON en las solicitudes entrantes
app.use(express.json());

// Ruta para recibir el webhook
app.post('/webhook', (req, res) => {
    // Aquí puedes manejar el evento entrante
    const event = req.body;

    console.log('Evento recibido:', event);

    // Responde al webhook
    res.status(200).json({ message: 'Evento recibido' });
});

// Inicia el servidor
app.listen(port, () => {
    console.log(`Servidor de webhook escuchando en http://localhost:${port}/webhook`);
});
