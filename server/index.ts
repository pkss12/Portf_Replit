import express from "express";
import path from "path";

const app = express();
const PORT = process.env.PORT || 3000;

// Caminho absoluto para o currículo
const curriculoPath = "C:\\Users\\Administrador\\Downloads\\Portf_Replit\\public\\curriculo.pdf";

// Servir arquivos estáticos da pasta public
app.use(express.static(path.join(__dirname, "../public")));

// Rota para abrir o currículo
app.get("/curriculo", (req, res) => {
  res.sendFile(curriculoPath, (err) => {
    if (err) {
      console.error("Erro ao abrir o currículo:", err);
      res.status(500).send("Erro ao abrir o currículo.");
    }
  });
});

// Página inicial
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
