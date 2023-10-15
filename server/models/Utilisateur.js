const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;


// Création du schema
const utilisateurDB = new Schema({
  Nom: {
    type: String,
    required: true,
  },
  Prenom: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
  Adresse: {
    type: String,
    required: true,
  },
  Ville: {
    type: String,
    required: true,
  },
  CodePostal: {
    type: Number,
    required: true,
  },
});


module.exports = mongoose.model("Utilisateur", utilisateurDB);
