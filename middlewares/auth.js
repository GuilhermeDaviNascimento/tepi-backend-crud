const jwt = require("jsonwebtoken");
require("dotenv").config();

const secretKey = process.env.SECRET;  // Recomendação: Armazene a chave secreta em um arquivo .env

// Middleware para verificar o JWT
const verifyToken = (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ message: "Acesso negado. Token não fornecido." });
  }

  try {
    const decoded = jwt.verify(token, secretKey);
    req.user = decoded;  // Armazenando informações do usuário no objeto da requisição
    next();  // Se o token for válido, segue para o próximo middleware ou rota
  } catch (error) {
    return res.status(400).json({ message: "Token inválido." });
  }
};

module.exports = verifyToken;
