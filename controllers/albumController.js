const { Album } = require("../models/index");
const express = require("express");
const router = express.Router(); // Instanciar o Router

router.get('/', async (req, res) => {
  try {
    const albums = await Album.findAll();
    res.json(albums);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar álbuns." });
  }
});

router.post('/', async (req, res) => {
  try {
    const album = await Album.create(req.body);
    res.status(201).json(album);
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar álbum." });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const album = await Album.findByPk(req.params.id);
    if (album) {
      await album.update(req.body);
      res.json(album);
    } else {
      res.status(404).json({ error: "Álbum não encontrado." });
    }
  } catch (error) {
    res.status(500).json({ error: "Erro ao atualizar álbum." });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const album = await Album.findByPk(req.params.id);
    if (album) {
      await album.destroy();
      res.json({ message: "Álbum excluído com sucesso." });
    } else {
      res.status(404).json({ error: "Álbum não encontrado." });
    }
  } catch (error) {
    res.status(500).json({ error: "Erro ao excluir álbum." });
  }
});

module.exports = router;
