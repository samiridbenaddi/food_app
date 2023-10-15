const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;


// Création du schema
const commandeDB = new Schema({
  UtilisateurId: {
    type: ObjectId,
    ref: 'Utilisateur',
    required: true,
  },
  ListeProduits: [
    {
      Titre: {
        type: String,
        required: true,
      },
      Quantite: {
        type: Number,
        required: true,
      },
    },
  ],
  Valide: {
    type: Boolean,
    required: true,
    default: false,
  },
});

module.exports = mongoose.model("Commande", commandeDB);
