// routes/userRoutes.js
const express = require("express");
const router = express.Router();
const UserController = require("../controllers/userController");

router.post("/users/register", UserController.registerUser);
router.post("/users/login", UserController.loginUser);
router.get("/users/search", UserController.searchUsers);
router.post("/permutations", UserController.permutation);

module.exports = router;
