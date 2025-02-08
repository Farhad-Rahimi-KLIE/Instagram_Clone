const express = require("express");
const router = express.Router();
const upload = require("../Middlewares/Multer.Middleware");
const Posts_Controller = require("../Controller/Main_Data/Main_Data.Controller");
const Authentication = require("../Controller/Authentication/Authentication.Controller");
const Middlewares = require("../Middlewares/Authentication.Middlewares");

// Authentication Routes
router.post("/register", Authentication.Register_User);
router.post("/login", Authentication.login_User);
router.post("/logout", Authentication.logout_User);

// Main Data Routes
router.post("/createPost",upload.single("image") ,Middlewares, Posts_Controller.Add_Post);
router.get("/getall", Posts_Controller.getAll_Post);
router.post("/:id/like", Middlewares, Posts_Controller.Like_Post);
router.post("/:id/comment", Middlewares, Posts_Controller.Comment_Post);

module.exports = router;