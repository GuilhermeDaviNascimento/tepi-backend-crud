const express = require("express");
const User = require("./models/user");
const app = express();
app.use(express.json());
const userController = require("./controllers/userController");

// Criar usuário
app.post("/users", async (req, res) => {
  userController.create(req, res);
});

//POST NO POSTMAN PARA TESTAR ROTA:
// {
//     "name": "Guilherme",
//     "email": "guilherme@example.com",
//     "password": "21323"
// }

// Ler todos os usuários
app.get("/users", async (req, res) => {
  userController.list(req, res);
});

// Atualizar usuário
app.put("/users/:id", async (req, res) => {
  userController.update(req, res);
});

// Excluir usuário
app.delete("/users/:id", async (req, res) => {
  userController.drop(req, res);
});

// Iniciar o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
  try {
    console.log(`Servidor rodando na porta ${PORT}`);
  } catch (error) {
    console.error("Erro ao conectar no banco de dados:", error);
  }
});
