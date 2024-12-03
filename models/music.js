const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const Album = require("./album"); 

const Music = sequelize.define("Music", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  composer: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  albumId: {
    type: DataTypes.INTEGER,
    references: {
      model: Album, 
      key: 'id',    
    },
  },
});


// Sincronize o modelo com o banco de dados
async function syncModels() {
  await Music.sync();
}

syncModels();

module.exports = Music;
