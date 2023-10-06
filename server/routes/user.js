const express = require('express');
const router = express.Router();
// Cette ligne importe le module userController depuis le répertoire controllers
const userController = require('../controllers/userController');

router.get('/', userController.homepage);
router.get('/about', userController.about);
router.post('/submit', userController.submit);
router.get('/dataTable', userController.getData);
router.get('/contact', userController.getContact);

// Exportez le router pour l'utiliser dans d'autres parties de l'application
module.exports = router;
