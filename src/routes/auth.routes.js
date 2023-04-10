const { Router } = require("express");
const { userLogin, verifyEmail } = require("../controllers/auth.controller");

const router = Router();

router.post("/auth/register", verifyEmail);

router.post("/auth/login", userLogin);

module.exports = router;
