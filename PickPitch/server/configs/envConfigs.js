require("dotenv").config({});

module.exports = {
  urlMongo: process.env.URL_MONGO,
  urlMongoLocal: process.env.URL_MONGO_LOCAL,
  dataBaseOwner: process.env.DATABASE_OWNER,
  port: process.env.port,
};
