const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require("../models/index");

const router = express.Router();

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email: email } });
    
    if (user) {
        if (await bcrypt.compare(password, user.password)) {
            const token = jwt.sign({ email: user.email }, process.env.SECRET, { expiresIn: '1h' });
            res.status(200).json({ user: user, token: token });
        } else {
            res.status(401).json({ error: "Login not successful." });
        }
    } else {
        res.status(401).json({ error: "Login not successful." });
    }
});


router.post('/register', async (req, res) => {
    const { email, password, name } = req.body;

    const existingUser = await User.findOne({ where: { email: email } });
    if (existingUser) {
        return res.status(400).json({ error: "Email já está em uso." });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    try {
        const newUser = await User.create({
            email: email,
            password: hashedPassword,
            name: name
        });
        const token = jwt.sign({ email: newUser.email }, process.env.SECRET, { expiresIn: '1h' });

        res.status(201).json({
            message: "Usuário registrado com sucesso.",
            user: newUser,
            token: token
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao criar o usuário." });
    }
});

module.exports = router;
