const express = require("express");
const router = express.Router();
// Cette ligne importe le module userController depuis le répertoire controllers
const userController = require("../controllers/userController");

router.get("/", userController.homepage);
router.post("/submit", userController.submit);
router.get("/dataTable", userController.getData);
router.get("/about", userController.about);
router.get("/contact", userController.contact);

// Exportez le router pour l'utiliser dans d'autres parties de l'application
module.exports = router;
