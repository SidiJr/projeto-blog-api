const { Router } = require("express");
const authController = require("../controllers/authController");
const validate = require("../middlewares/validateMiddleware");
const loginSchema = require("../validations/loginValidation");

const router = Router();

router.post("/login",  validate(loginSchema), authController.login);

module.exports = router;