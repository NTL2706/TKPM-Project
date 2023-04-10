require("dotenv").config({});

module.exports = {
  urlMongo: process.env.URL_MONGO,
  urlMongoLocal: process.env.URL_MONGO_LOCAL,
  dataBaseOwner: process.env.DATABASE_OWNER,
  dataBaseImg: process.env.DATABASE_IMG,
  imgBucket: process.env.IMG_BUCKET,
  port: process.env.PORT,
  salt: process.env.SALT,
  urlImg: process.env.URL_IMG,
};
