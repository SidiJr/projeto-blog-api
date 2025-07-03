const { Router } = require("express");
const comentariosController = require("../controllers/comentariosController");

const router = Router();

router.get("/", comentariosController.index);
router.get("/:id", comentariosController.show);
router.post("/", comentariosController.store);
router.put("/:id", comentariosController.update);
router.delete("/:id", comentariosController.destroy);

module.exports = router;
