const express = require('express');
const router = express.Router();
const {createUser} = require('../Controllers/cUtilisateur')

router.post('/utilisateur', createUser);

module.exports = router;