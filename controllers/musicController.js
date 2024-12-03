const { Music } = require("../models/index");
const express = require("express");
const router = express.Router(); // Instanciar o Router

router.get('/', async (req, res) => {
  try {
    const musics = await Music.findAll();
    res.json(musics);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar músicas." });
  }
});

router.post('/', async (req, res) => {
  try {
    const music = await Music.create(req.body);
    res.status(201).json(music);
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar música." });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const music = await Music.findByPk(req.params.id);
    if (music) {
      await music.update(req.body);
      res.json(music);
    } else {
      res.status(404).json({ error: "Música não encontrada." });
    }
  } catch (error) {
    res.status(500).json({ error: "Erro ao atualizar música." });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const music = await Music.findByPk(req.params.id);
    if (music) {
      await music.destroy();
      res.json({ message: "Música excluída com sucesso." });
    } else {
      res.status(404).json({ error: "Música não encontrada." });
    }
  } catch (error) {
    res.status(500).json({ error: "Erro ao excluir música." });
  }
});

module.exports = router;
