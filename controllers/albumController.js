const Album = require("../models/album");

async function list(req, res) {
  try {
    const albums = await Album.findAll();
    res.json(albums);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar usuários." });
  }
}

async function create(req, res) {
  try {
    const album = await Album.create(req.body);
    res.status(201).json(album);
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar usuário." });
  }
}

async function update(req, res) {
  try {
    const album = await Album.findByPk(req.params.id);
    if (album) {
      await album.update(req.body);
      res.json(album);
    } else {
      res.status(404).json({ error: "Usuário não encontrado." });
    }
  } catch (error) {
    res.status(500).json({ error: "Erro ao atualizar usuário." });
  }
}

async function drop(req, res) {
  try {
    const album = await Album.findByPk(req.params.id);
    if (album) {
      await album.destroy();
      res.json({ message: "Usuário excluído com sucesso." });
    } else {
      res.status(404).json({ error: "Usuário não encontrado." });
    }
  } catch (error) {
    res.status(500).json({ error: "Erro ao excluir usuário." });
  }
}

module.exports = { list, create, update, drop };
