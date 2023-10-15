const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

// Création du schema
const produit = new mongoose.Schema({
  Titre: {
    type: String,
    required: true,
  },
  Description: {
    type: String,
    required: true,
  },
  Photo: {
    type: String,
    default:
      "https://hs-mm.org/wp-content/uploads/2015/06/photo-not-available.jpg",
  },
  Prix: {
    type: Number,
    required: true,
  },
  Quantite: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Produit", produit);
