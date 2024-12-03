const express = require("express");
const app = express();

const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger-output.json');

// Controladores
const userController = require("./controllers/userController");
const albumController = require("./controllers/albumController");
const musicController = require("./controllers/musicController");

// Middleware para JSON
app.use(express.json());

// Rotas da aplicação
app.use("/users", userController);
app.use("/albums", albumController);
app.use("/musics", musicController);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

// Iniciar o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
  try {
    console.log(`Servidor rodando na porta ${PORT}`);
  } catch (error) {
    console.error("Erro ao conectar no banco de dados:", error);
  }
});
