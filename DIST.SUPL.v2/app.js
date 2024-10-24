require("dotenv").config();

const http = require("http");
const { neon } = require("@neondatabase/serverless");

const sql = neon(process.env.DATABASE_URL);

const requestHandler = async (req, res) => {
  if (req.method === "GET" && req.url === "/categories") {
    try {
      // Consulta para obter as categorias
      const result = await sql`SELECT * FROM categories`;
      
      // Verifica se existem categorias
      if (result.length === 0) {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "No categories found." }));
        return;
      }

      // Responde com os dados das categorias
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(result));
    } catch (error) {
      console.error("Erro ao executar a consulta:", error);
      res.writeHead(500, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Internal server error." }));
    }
  } else {
    // Responde com 404 para outras rotas
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Route not found");
  }
};


const port = require('./conection/server(PORT)')
const PORT = port.port
http.createServer(requestHandler).listen(3000, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});