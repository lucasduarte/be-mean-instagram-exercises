const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/be-mean-instagram');
const Schema = mongoose.Schema;

//Criação do Schema
const _schema = {
  name: String,
  description: String,
  type: String,
  attack: Number,
  defense: Number,
  height: Number,
  created_at: {type: Date, default: Date.now}
}

const pokemonSchema = new Schema(_schema);

module.exports = pokemonSchema;
