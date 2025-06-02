const { Router } = require("express");
const postsController = require("../controllers/postsController");
const postSchema = require("../validations/postsValidation");
const validate = require("../middlewares/validateMiddleware");
const upload = require("../middlewares/upload");

const router = Router();

router.get("/", postsController.index);
router.get("/:id", postsController.show);
router.post("/", upload.single("imagem"), validate(postSchema), postsController.store);
router.put("/:id", upload.single("imagem"), validate(postSchema), postsController.update);
router.delete("/:id", postsController.destroy);

module.exports = router;
