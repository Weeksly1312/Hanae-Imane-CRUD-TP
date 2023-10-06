const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    });

    console.log(`Connected to MongoDB: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1); // Exit the process if unable to connect
  }
};

module.exports = connectDB;

// useNewUrlParser: true,

// useNewUrlParser est une option qui indique à Mongoose d'utiliser le nouveau parseur d'URL du pilote MongoDB. 
// Le pilote MongoDB pour Node.js a été mis à jour, et utiliser cette option garantit l'utilisation du parseur mis à jour. 
// C'est particulièrement important lors de travaux avec des versions plus récentes de MongoDB.
// useUnifiedTopology: true,

// useUnifiedTopology est une option qui indique à Mongoose d'utiliser le nouveau moteur de découverte et de surveillance du serveur
//  du pilote MongoDB. Cette option est recommandée lors de travaux avec les versions mises à jour du pilote MongoDB pour Node.js 
//  et est définie sur true pour utiliser le nouveau moteur.
// });

// Ferme l'objet d'options passé à mongoose.connect.
