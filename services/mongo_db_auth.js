const { MongoClient } = require("mongodb");

const atlasUrl =
  "mongodb+srv://matthewdavis:matthewdavis@procedures.6ezy3p2.mongodb.net/";

// const pool = new MongoClient(uri);
const pool = new MongoClient(atlasUrl);

module.exports = pool;
