const express = require('express');
const cors = require('cors');
//const sqlite3 = require('sqlite3').verbose(); //testando sqllite 3

const product = require('./data/product')
const port = require('./server(PORT)')

const app = express();
const PORT = port.port;

// Cria ou abre um banco de dados SQLite
//const db = new sqlite3.Database('loja');

app.use(express.json());
// Configuração do CORS
app.use(cors({
  origin: '*', // Ajuste conforme necessário
}));


// Route to get all items
app.get('/api/product', (req, res) => {
  res.json(product); // Return the items array as JSON
});

// Rota para um status simples de "alive"
app.get('/', (req, res) => {
  res.send('API está funcionando!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
  