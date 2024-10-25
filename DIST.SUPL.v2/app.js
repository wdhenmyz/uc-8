const http = require("http");
const {categorias, createCategory, categoriasID} = require('./routes/categorias');
const cors = require('cors'); // Importa o middleware cors

const requestHandler = (req, res) => {
  // Habilita CORS
  cors()(req, res, () => {
    if (req.method === "GET" && req.url === "/categories") {
      categorias(req, res);
    } else if (req.method === "POST" && req.url === "/categories") {
      createCategory(req, res);
    } else if (req.method === "GET" && req.url.startsWith("/categories/")) { 
      categoriasID(req, res);
    } else {
      // Responde com 404 para outras rotas
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Route not found");
    }
  });
};



// Define a porta e inicia o servidor
const PORT = 3000;
http.createServer(requestHandler).listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
