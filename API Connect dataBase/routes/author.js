const router = require("express").Router();
const {create, findAll, findOne, update, deleteData,} = require("../controllers/author");

router.get("/", findAll);
router.get("/:id", findOne);
router.post("/", create);
router.put("/:id", update);
router.delete("/:id", deleteData);

module.exports = router;