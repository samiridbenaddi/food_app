const Utilisateur = require("../models/Utilisateur");

// Créer l'uitlisateur s'il n'existe pas
const createUser = async (req, res) => {

  // Récupérer l'utilisateur par Email
  const existsAlready = await Utilisateur.findOne({ Email: req.body.Email });

  // S'il existe on affiche le code status 200
  if (existsAlready) {
    return res.status(200).send(existsAlready);
  }

  // To do : valider l'input, et vérifier les valeurs saisies

  // Sinon, on crée l'utilisateur
  const userToSave = req.body;
  try {
    const createdUser = await Utilisateur.create(new Utilisateur(userToSave));
    return res.status(201).json(createdUser);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

module.exports = { createUser };
