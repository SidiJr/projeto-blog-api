const { Router } = require("express");
const postsController = require("../controllers/postsController");
const postSchema = require("../validations/postsValidation");
const validate = require("../middlewares/validateMiddleware");
const upload = require("../middlewares/upload");
const autenticarToken = require("../middlewares/authMiddleware");

const router = Router();

router.get("/", postsController.index);
router.get("/:id", postsController.show);
router.post("/", autenticarToken, upload.single("imagem"), validate(postSchema), postsController.store);
router.put("/:id", autenticarToken, upload.single("imagem"), validate(postSchema), postsController.update);
router.delete("/:id", autenticarToken, postsController.destroy);

module.exports = router;
