const Album = require('./album')
const Music = require('./music')
const User = require('./user')

// Associações
Music.belongsTo(Album, { foreignKey: "albumId" });
Album.hasMany(Music, { foreignKey: "albumId" });

module.exports = {Album, Music, User};