const Koa = require("koa");
const { router } = require("./src/router/index.js");
const server = new Koa();

server.use(router.routes()).use(router.allowedMethods());

// server.use((ctx) => {
//   ctx.body = "hello";
// });

server.listen(8080);
