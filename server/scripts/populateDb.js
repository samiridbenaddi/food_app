const Produit = require("../models/Produit");
const mongoose = require("mongoose");
const Utilisateur = require("../models/Utilisateur");
const Commande = require("../models/Commande");

async function connectToDatabase() {
  try {
    if (mongoose.connection.readyState === 0) {
      // If the connection is closed, open it
      await mongoose.connect("mongodb://mongodb/foodmaroc", {
        // await mongoose.connect("mongodb://127.0.0.1/foodmaroc", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
    }
  } catch (error) {
    console.error("Error connecting to the database:", error);
    process.exit(1); // Exit the script with an error code
  }
}

async function populateDatabase() {
  mongoose.connection.once("open", async () => {
    try {
      await connectToDatabase();
      await Produit.deleteMany({});
      await Commande.deleteMany({});
      //await Utilisateur.deleteMany({});

      const ProductsToStore = [
        {
          Titre: "Couscous Marocain",
          Description:
            "Un plat emblématique composé de grains de couscous cuits à la vapeur, garnis de viandes, de légumes et d'épices savoureuses, offrant une explosion de saveurs et de textures.",
          Prix: 40,
          Photo:
            "https://img.cuisineaz.com/1024x768/2022/02/23/i183013-couscous-marocain.webp",
          Quantite: 15,
        },
        {
          Titre: "R'fissa",
          Description:
            "Un plat traditionnel marocain à base de morceaux de poulet ou de pigeon, de lentilles, et de pain dur trempé dans un bouillon parfumé à l'huile d'argan, aux épices et aux herbes, créant une texture unique et une saveur délicieuse",
          Prix: 30,
          Photo:
            "https://www.couzina.fr/wp-content/uploads/2015/11/92338589_10219083003878336_8309134324586774528_n.jpg",
          Quantite: 15,
        },
        {
          Titre: "Pastilla",
          Description:
            "Un plat marocain composé de poulet cuit avec des épices, enveloppé dans des feuilles de brick croustillantes et saupoudré de sucre glace et de cannelle pour un mélange de saveurs sucrées et salées",
          Prix: 70,
          Photo:
            "https://img.cuisineaz.com/1024x768/2017/05/09/i126060-pastilla-de-pigeon.jpeg",
          Quantite: 15,
        },
        {
          Titre: "Tagine",
          Description:
            "Un plat traditionnel nord-africain cuit dans un plat en argile du même nom, caractérisé par une préparation lente et douce des viandes, des légumes et des épices, créant des saveurs riches et des textures tendres et parfumées",
          Prix: 40,
          Photo:
            "https://res.cloudinary.com/hsxfx8igq/image/upload/t_16x9_recipe_image,f_auto/v1595830629/Chickpeas_Cooked_in_Tagine_goi5jv.jpg",
          Quantite: 15,
        },
      ];
      /*
      const Utilisateurs = [
        {
          Nom: "Laouij",
          Prenom:"Hamza",
          Email: "hamzalaouij@gmail.com",
          Adresse: "Test",
          Ville: "Guelmim",
          CodePostal: 81000,
        }
      ];
*/
      Produit.insertMany(ProductsToStore);
    } catch (error) {
    } finally {
      //   mongoose.connection.close();
    }
  });
}

populateDatabase();
