const { Router } = require("express");
const categoriasController = require("../controllers/categoriasController");

const router = Router();

router.get("/", categoriasController.index);
router.get("/:id", categoriasController.show);
router.post("/", categoriasController.store);
router.put("/:id", categoriasController.update);
router.delete("/:id", categoriasController.destroy);

module.exports = router;
