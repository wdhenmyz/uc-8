const express = require('express');
const cors = require('cors');
//const sqlite3 = require('sqlite3').verbose(); //testando sqllite 3

//const product = require('./data/index')
const port = require('./server(PORT)')

const app = express();
const PORT = port.port || 3000;

app.use(express.json());
// Configuração do CORS
app.use(cors({
  origin: '*', // Ajuste conforme necessário
}));


const loja = require('./services/server')

app.use('/loja', loja)

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
  