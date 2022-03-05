const { Router } = require("express");
const controller = require("./controller");
const router = Router();

router.get("/", controller.getAllBlogs);
router.get("/:id", controller.getBlogById);

module.exports = router;
