const { example } = require("../services");


const get = async (req, resp) => {
  try {
    const result = await example.get();
    resp.status(200).json({ results: result });

  } catch (err) {
    resp.json({ message: err.message })
  }
}


module.exports = {
  get,
}