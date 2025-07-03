const { Router } = require("express");
const usuariosController = require("../controllers/usuariosController");
const validate = require("../middlewares/validateMiddleware");
const usuarioSchema = require("../validations/usuariosValidation");
const autenticarToken = require("../middlewares/authMiddleware");

const router = Router();

router.get("/", usuariosController.index);
router.get("/:id", usuariosController.show);
router.post("/", validate(usuarioSchema), usuariosController.store);
router.put(
  "/:id",
  autenticarToken,
  validate(usuarioSchema),
  usuariosController.update
);
router.delete("/:id", autenticarToken, usuariosController.destroy);

module.exports = router;
