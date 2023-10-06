const express = require("express");
const expressLayout = require("express-ejs-layouts");
const connectDB = require("./server/config/db");

// Activer express
const app = express();

require("dotenv").config();
const port = process.env.PORT;

connectDB();

// Middleware to parse URL-encoded data // // Middleware pour gérer les données de formulaire HTML
app.use(express.urlencoded({ extended: true }));
// Middleware pour gérer les données JSON
app.use(express.json());

app.use(express.static("public"));

// Activer express-layouts
app.use(expressLayout);
// Définir l'emplacement des fichiers de mise en page (layouts)
app.set("layout", "./layouts/main");
// Définir le moteur de modèle (template engine)
app.set("view engine", "ejs");

// L'entrer de notre app routes.txt
app.use("/", require("./server/routes/user"));

//  Handle 404
app.get("*", (req, res) => {
  res.status(404).render("404", {
    // Pass data to the template
    showAlert: true, // This flag indicates whether to show the SweetAlert
    message: "Page Not Found", // Message you want to display
    alertType: "error", // Type of SweetAlert (e.g., success, error, warning, etc.)
  });
});

app.listen(port, () => {
  console.log(`App listening on ${port}`);
});
