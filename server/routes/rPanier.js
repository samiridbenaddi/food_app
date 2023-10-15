const express = require("express");
const router = express.Router();


const {
  getPanier,
  validerPanier,
  validerPanierParAdmin,
} = require("../Controllers/cPanier");


router.get("/panier", getPanier);
router.post("/valider-panier", validerPanier);
router.post("/valider-panier-admin", validerPanierParAdmin);

module.exports = router;
