// importando express e cors
const express = require('express');
const cors = require('cors');

// importando configurações
const port = require('./config/server(PORT)')
const PORT = port.port || 3000;

const app = express();
app.use(express.json());

// Configuração do CORS
app.use(cors({
  origin: '*', // Ajuste conforme necessário
}));




app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
  