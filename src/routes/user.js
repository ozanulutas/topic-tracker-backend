const router = require("express").Router();
const { user } = require("../controllers");
const { user: validation } = require("../middlewares/validations");


router.get("/", user.getAll);
router.post("/register", validation.register, user.register);
router.post("/login", validation.login, user.login);
// router.put("/:id", user.update);
router.delete("/:id", user.remove);


module.exports = router;
