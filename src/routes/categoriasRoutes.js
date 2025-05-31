const { Router } = require("express");
const categoriasController = require("../controllers/categoriasController");
const validate = require("../middlewares/validate");
const categoriaSchema = require("../validations/categoriasValidation");

const router = Router();

router.get("/", categoriasController.index);
router.get("/:id", categoriasController.show);
router.post("/", validate(categoriaSchema), categoriasController.store);
router.put("/:id", validate(categoriaSchema), categoriasController.update);
router.delete("/:id", categoriasController.destroy);

module.exports = router;
