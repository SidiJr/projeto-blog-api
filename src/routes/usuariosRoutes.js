const { Router } = require("express");
const usuariosController = require("../controllers/usuariosController");
const validate = require("../middlewares/validateMiddleware");
const usuarioSchema = require("../validations/usuariosValidation");

const router = Router();

router.get("/", usuariosController.index);
router.get("/:id", usuariosController.show);
router.post("/", validate(usuarioSchema), usuariosController.store);
router.put("/:id", validate(usuarioSchema), usuariosController.update);
router.delete("/:id", usuariosController.destroy);

module.exports = router;
