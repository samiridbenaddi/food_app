const Produit = require("../models/Produit");

// Sélectionner le produit
const getProduits = async (req, res) => {
    const allProducts = await Produit.find();
    return res.json(allProducts);
}

// Sélectionner le produit par ID
const getProduitID = async (req, res) => {
    const id = req.params.id;
    const aProduct = await Produit.findById(id);
    return res.json(aProduct);
};

module.exports = {getProduits, getProduitID};