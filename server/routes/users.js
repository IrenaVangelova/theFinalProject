var express = require("express");
var router = express.Router();
const controller = require("../controllers/users");
const { expressjwt: jwt } = require("express-jwt");
const response = require("../lib/response_handler");
const upload = require("../lib/multer");

require("dotenv").config();

router.use(
  jwt({
    secret: process.env.JWT_SECRET_KEY,
    algorithms: ["HS256"],
  }).unless({
    path: [
      {
        url: "/users/register",
        methods: ["POST"],
      },
      {
        url: "/users/login",
        methods: ["POST"],
      },
      {
        url: "/users/all",
        methods: ["GET"],
      },
    ],
  })
);

router.use((err, req, res, next) => {
  console.log(err.name);
  if (err.name === "UnauthorizedError") {
    response(res, 401, "Unauthorized access");
  }
});

router.get("/all", controller.getAllUsers);
router.post("/register", controller.register);
router.post("/login", controller.login);
router.get("/:id", controller.byId);
router.post("/:id/update", upload.single('image'), controller.update);

module.exports = router;