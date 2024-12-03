const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const User = sequelize.define("User", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Sincronize o modelo com o banco de dados
async function syncModels() {
  await User.sync({ force: true }); // Use force: true para recriar a tabela
}

syncModels();

module.exports = User;
