const db = require("../db/db.js");

const get = async () => {
  try {
    const result = await db.select().table("test");
    return result;

  } catch (err) {
    throw new Error(err)
  }
}


module.exports = {
  get,
}