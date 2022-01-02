const router = require("express").Router();
const { example } = require("../controllers");

router.get("/", example.get);


module.exports = router;
