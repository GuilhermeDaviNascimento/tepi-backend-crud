const express = require("express");
const app = express();
const authenticateToken = require('./middlewares/auth');

const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger-output.json');

// Controladores
const userController = require("./routes/user");
const albumController = require("./routes/album");
const musicController = require("./routes/music");
const authController = require("./routes/auth");

// Middleware para JSON
app.use(express.json());

// Rotas da aplicação
app.use("/users", authenticateToken, userController);
app.use("/albums", authenticateToken, albumController);
app.use("/musics", authenticateToken, musicController);
app.use("/", authController);
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
