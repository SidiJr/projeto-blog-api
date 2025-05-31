const { Router } = require("express");
const usuariosController = require("../controllers/usuariosController");

const router = Router();

router.get("/", usuariosController.index);
router.get("/:id", usuariosController.show);
router.post("/", usuariosController.store);
router.put("/:id", usuariosController.update);
router.delete("/:id", usuariosController.destroy);

module.exports = router;
