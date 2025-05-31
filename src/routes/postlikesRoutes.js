const { Router } = require("express");
const postlikesController = require("../controllers/postLikesController");

const router = Router();

router.get("/", postlikesController.index);
router.get("/:id", postlikesController.show);
router.post("/", postlikesController.store);
router.put("/:id", postlikesController.update);
router.delete("/:id", postlikesController.destroy);

module.exports = router;
