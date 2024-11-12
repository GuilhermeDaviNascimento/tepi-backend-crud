const Music = require("../models/music");

async function list(req, res) {
  try {
    const musics = await Music.findAll();
    res.json(musics);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar usuários." });
  }
}

async function create(req, res) {
  try {
    const music = await Music.create(req.body);
    res.status(201).json(music);
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar usuário." });
  }
}

async function update(req, res) {
  try {
    const music = await Music.findByPk(req.params.id);
    if (music) {
      await music.update(req.body);
      res.json(music);
    } else {
      res.status(404).json({ error: "Usuário não encontrado." });
    }
  } catch (error) {
    res.status(500).json({ error: "Erro ao atualizar usuário." });
  }
}

async function drop(req, res) {
  try {
    const music = await Music.findByPk(req.params.id);
    if (music) {
      await music.destroy();
      res.json({ message: "Usuário excluído com sucesso." });
    } else {
      res.status(404).json({ error: "Usuário não encontrado." });
    }
  } catch (error) {
    res.status(500).json({ error: "Erro ao excluir usuário." });
  }
}

module.exports = { list, create, update, drop };
