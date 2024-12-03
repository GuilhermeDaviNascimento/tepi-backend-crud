const { User } = require("../models/index")
const express = require("express");
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar usuários." });
  }
});

router.post('/', async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar usuário." });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (user) {
      await user.update(req.body);
      res.json(user);
    } else {
      res.status(404).json({ error: "Usuário não encontrado." });
    }
  } catch (error) {
    res.status(500).json({ error: "Erro ao atualizar usuário." });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (user) {
      await user.destroy();
      res.json({ message: "Usuário excluído com sucesso." });
    } else {
      res.status(404).json({ error: "Usuário não encontrado." });
    }
  } catch (error) {
    res.status(500).json({ error: "Erro ao excluir usuário." });
  }
});

module.exports = router;
