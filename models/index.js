const sequelize = require('../database/database');

const Director = require('./Director');
const Pelicula = require('./Pelicula');
const Actor = require('./Actor');
const Elenco = require('./Elenco');

Director.hasMany(Pelicula);
Pelicula.belongsTo(Director);

Pelicula.belongsToMany(Actor, { through: Elenco });
Actor.belongsToMany(Pelicula, { through: Elenco });

module.exports = {
    sequelize,
    Director,
    Pelicula,
    Actor,
    Elenco
};
