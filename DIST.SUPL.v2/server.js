// importando express e cors
const express = require('express');
const cors = require('cors');

// importando configurações
const pool = require('./config/db')
const port = require('./conection/server(PORT)')

const PORT = port.port || 3000;
const app = express();

app.use(express.json());

// Configuração do CORS
app.use(cors({
  origin: '*', // Ajuste conforme necessário
}));


app.get('/categories', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM categories');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});




app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
  