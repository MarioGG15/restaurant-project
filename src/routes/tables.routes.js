const { Router } = require("express");
const {
  createTable,
  getTableById,
  changeAvailability,
  deleteTable,
} = require("../controllers/tables.controllers");
const auth = require("../middlewares/auth.midleware");
const { isAdmin, hasRoles } = require("../middlewares/role.middleware");

const router = Router();
router.post("/tables", auth, hasRoles("ADMIN"), createTable);

router
  .route("/tables/:id")
  .get(auth, hasRoles("USER", "SELLER", "ADMIN"), getTableById)
  .put(auth, hasRoles("SELLER", "ADMIN"), changeAvailability)
  .delete(auth, isAdmin, deleteTable);

module.exports = router;
