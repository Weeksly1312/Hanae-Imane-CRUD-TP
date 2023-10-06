// controller function that is typically used to handle a specific route (import)
const Person = require("../models/UserData");


// ----------------------------Home page
exports.homepage = async (req, res) => {

  // Définir des données locales à utiliser dans la vue
  const locals = {
    title: "home",
    description: "Free NodeJs User Management System",
  };

  try {
    // Rendre la vue "index" en utilisant les données locales
    res.render("index", { locals });
  } catch (error) {
    console.error(error);
  }
};

// ----------------------------About page
exports.about = async (req, res) => { 
 
  const locals = {
    title: "about",
    description: "Free NodeJs User Management System",
  };
    try {
    // Rendre la vue "about" en utilisant les données locales 
    res.render("submit", { locals });
  } catch (error) {
    console.error(error);
  }
};


// get data
exports.getData = async (req, res) => {
  try {
    // Fetch all persons from the database
    const persons = await Person.find();

    // Render the index page with the fetched data
    res.render('dataTable', { persons });
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};


// ----------------------------Submit page
// userController.js

exports.submit = async (req, res) => {
    try {
      // Extract data from the request body
      const { name, age, city } = req.body;
  
      // Create a new instance of the Person model
      const newPerson = new Person({
        name,
        age,
        city
      });
  
      // Save the new person to the database
      await newPerson.save();
      // Respond with a success message
      res.redirect("/dataTable")
      // res.status(201).json({ message: 'Person added successfully' });
    } catch (error) {
      console.error('Error submitting person:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };

// contact page

exports.getContact = function (req, res) {
  res.render('contact')
}


