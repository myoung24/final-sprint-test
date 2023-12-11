const { ObjectId } = require("mongodb");
const dal = require("./mongo_db_auth");

async function getProcedures() {
  if (DEBUG) console.log("procedures.mongo.dal.getProcedures()");
  try {
    await dal.connect();
    const cursor = dal.db("procedures").collection("procedures").find();
    const results = await cursor.toArray();
    return results;
  } catch (error) {
    console.log(error);
  } finally {
    dal.close();
  }
}

module.exports = { getProcedures };
