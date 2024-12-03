const { Sequelize } = require("sequelize");
require("dotenv").config();

// Configure sua conexão com o banco de dados MySQL
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
  }
);

// Teste a conexão
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log("Conexão com o banco de dados foi bem-sucedida!");
  } catch (error) {
    console.error("Não foi possível conectar ao banco de dados:", error);
  }
}

testConnection();

module.exports = sequelize;
