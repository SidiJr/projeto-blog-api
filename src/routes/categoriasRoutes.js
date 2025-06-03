const { Router } = require("express");
const categoriasController = require("../controllers/categoriasController");
const validate = require("../middlewares/validateMiddleware");
const categoriaSchema = require("../validations/categoriasValidation");
const autenticarToken = require("../middlewares/authMiddleware");

const router = Router();

router.get("/", categoriasController.index);
router.get("/:id", categoriasController.show);
router.post("/", autenticarToken, validate(categoriaSchema), categoriasController.store);
router.put("/:id", autenticarToken, validate(categoriaSchema), categoriasController.update);
router.delete("/:id", autenticarToken, categoriasController.destroy);

module.exports = router;
