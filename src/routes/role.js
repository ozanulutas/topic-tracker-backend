const router = require("express").Router();
const { role } = require("../controllers");
// const { role: validation } = require("../middlewares/validations");


router.get("/", role.getAll);


module.exports = router;
