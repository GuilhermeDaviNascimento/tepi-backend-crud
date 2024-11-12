const express = require("express");
const app = express();
const userController = require("./controllers/userController");
const albumController = require("./controllers/albumController");
const musicController = require("./controllers/musicController");

app.use(express.json());

app.post("/users", async (req, res) => {
  userController.create(req, res);
});

//POST NO POSTMAN PARA TESTAR ROTA:
// {
//     "name": "Guilherme",
//     "email": "guilherme@example.com",
//     "password": "21323"
// }

app.get("/users", async (req, res) => {
  userController.list(req, res);
});


app.put("/users/:id", async (req, res) => {
  userController.update(req, res);
});


app.delete("/users/:id", async (req, res) => {
  userController.drop(req, res);
});

//ALBUMS 

app.post("/albums", async (req, res) => {
  albumController.create(req, res);
});

app.get("/albums", async (req, res) => {
  albumController.list(req, res);
});


app.put("/albums/:id", async (req, res) => {
  albumController.update(req, res);
});


app.delete("/albums/:id", async (req, res) => {
  albumController.drop(req, res);
});

//MUSICAS 

app.post("/musics", async (req, res) => {
  musicController.create(req, res);
});

app.get("/musics", async (req, res) => {
  musicController.list(req, res);
});


app.put("/musics/:id", async (req, res) => {
  musicController.update(req, res);
});


app.delete("/musics/:id", async (req, res) => {
  musicController.drop(req, res);
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
