const { example } = require("../data-access");


const get = async () => {
  try {
    const result = await example.get();

    return result;

  } catch (err) {
    throw new Error(err)
  }
}


module.exports = {
  get,
}