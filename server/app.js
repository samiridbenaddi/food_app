// Importer les modules nécessaires
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

// Importer les routes
const rProduit = require("./routes/rProduit");
const rUtilisateur = require("./routes/rUtilisateur");
const rPanier = require("./routes/rPanier");

// Importer le script générant la liste des produits au lancement de l'application
require("./scripts/populateDb");

// Initialiser Express
const app = express();

// Utiliser middlewares
app.use(cors());
app.use(bodyParser.json());

mongoose
  .connect("mongodb://mongodb/foodmaroc")
  // .connect("mongodb://127.0.0.1/foodmaroc")
  .then(() => console.log("connected to mongodb"))
  .catch(console.error);

// Utiliser les routes
app.use(rProduit);
app.use(rPanier);
app.use(rUtilisateur);

// Lancer l'application
app.listen(5000, () => {
  console.log("server listening on port 5000");
});
