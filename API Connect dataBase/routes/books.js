const router = require("express").Router();
const {
  create,
  findAll,
  findOne,
  update,
  destroy,
} = require("../controllers/books");

router.get("/", findAll);
router.get("/:id", findOne);
router.post("/", create);
router.put("/:id", update);
router.delete("/:id", destroy);

module.exports = router;