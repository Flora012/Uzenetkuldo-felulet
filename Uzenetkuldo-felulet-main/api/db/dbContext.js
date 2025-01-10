const { Sequelize, DataTypes } = require("sequelize");
require("dotenv").config();

// Adatbázis kapcsolat inicializálása
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT,
        logging: false,
    }
);
try
{
    sequelize.authenticate();

    console.log("Database Connected Successfully!");
}
catch(err)
{
    console.error("Database connection failed!");
}

const db = {};

// Sequelize és az adatbázis kapcsolat elmentése
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Modellek importálása
db.toys = require("../models/toy")(sequelize,);

db.játékosok = Játékos;
db.csapatok = Csapat;
db.logók = Logó;
db.szurkolók = Szurkoló;


// Adatbázis szinkronizálás
db.sequelize.sync({ force: true }) // A `force: true` minden indításnál újra létrehozza a táblákat

module.exports = db;








