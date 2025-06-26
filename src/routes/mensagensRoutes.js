const { Router } = require("express");
const mensagensController = require("../controllers/mensagensController");
const autenticarToken = require("../middlewares/authMiddleware");

const router = Router();

router.get("/", autenticarToken, mensagensController.index);
router.post("/", autenticarToken, mensagensController.store);

module.exports = router;
