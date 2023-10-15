const express = require('express');
const router = express.Router();
const { getProduitID, getProduits } = require('../Controllers/cProduit');

router.get('/produits', getProduits);
router.get('/produit/:id', getProduitID);

module.exports = router;