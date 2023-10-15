const Utilisateur = require("../models/Utilisateur");
const Produit = require("../models/Produit");
const Commande = require("../models/Commande");

// To do: get commands au lieu de getPanier
const getPanier = async (req, res) => {};

// Confirmer la commande
const validerPanier = async (req, res) => {
  const user = await Utilisateur.findById(req.body.UtilisateurId);

  if (!user) {
    return res
      .status(400)
      .send(`User with id ${req.body.UtilisateurId} does not exist`);
  }

  const listOfProducts = req.body.ListeProduits;

  // Check the availability of the desired products in the database
  for (const {Titre, Quantite} of listOfProducts) {
    const prodInDb = await Produit.findOne({ Titre });

    if (prodInDb) {
      const quantityValid = prodInDb.Quantite >= Quantite;

      if (!quantityValid) {
        return res.status(400).send(`Not enough quantity available for ${Titre}`);
      }
    } else {
      return res.status(400).send(`Product ${Titre} does not exist`);
    }
  }

  // If the products are available, update the quantity in the database
  for (const { Titre, Quantite } of listOfProducts) {
    await Produit.updateOne({ Titre }, { $inc: { Quantite: -Quantite } });
  }

  // Create a new order
  const newOrder = new Commande({
    UtilisateurId: user._id,
    ListeProduits: listOfProducts,
  });

  // Save the new order to the database
  try {
    await newOrder.save();
  } catch (error) {
    console.error("Error saving order:", error);
    return res.status(500).json(error);
  }

  return res.status(201).end();
};


// Valider la commande de l'utilisateur  par l'admin
const validerPanierParAdmin = async (req, res) => {
  const orderId = req.body.commandeId;
  const orderFromDb = await Commande.findById(orderId);
  if (orderFromDb === null) {
    return res
      .status(404)
      .send(`La commande avec l'id ${orderId} n'existe pas`);
  }
  const newOrderStatus = req.body.status;
  console.log("NEW ORDER STATUS", newOrderStatus);
  await Commande.findByIdAndUpdate(orderId, {
    Valide: newOrderStatus,
  });

  return res.status(200).end();
};

module.exports = { getPanier, validerPanier, validerPanierParAdmin };
