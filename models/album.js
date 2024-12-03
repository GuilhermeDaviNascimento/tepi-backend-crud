const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Album = sequelize.define("Album", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  composer: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Sincronize o modelo com o banco de dados
async function syncModels() {
  await Album.sync();
}

syncModels();

module.exports = Album;
