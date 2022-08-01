const Router = require("@koa/router");
const router = new Router();
const { LoginController } = require("../controller/login.js");

router.post("/login", LoginController);
module.exports = {
  router,
};
