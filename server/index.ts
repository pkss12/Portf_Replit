import express, { type Request, Response, NextFunction } from "express";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import { registerRoutes } from "./routes";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Middleware de log simples
app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

// Registro de rotas da API
(async () => {
  await registerRoutes(app);

  // Tratamento de erros
  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
  });

  // Servir frontend estático
  app.use(express.static(path.join(__dirname, "public")));

  // Para qualquer rota não-API, serve index.html
  app.get("*", (_req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
  });

  // Porta dinâmica (necessário para Render)
  const port = parseInt(process.env.PORT || "5000", 10);
  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });
})();
