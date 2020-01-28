const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("mock/db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
server.listen(4000, () => {
  console.log("MOCK SERVER IS RUNNING...");
});
