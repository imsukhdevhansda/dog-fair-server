const jsonServer = require("json-server");
const PORT = process.env.PORT;
const path = require("path");
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname,'db.json'));
const middleware = jsonServer.defaults();
server.use(middleware);
server.use(jsonServer.bodyParser);
server.use(router);
server.listen(PORT,()=> console.log(`Server running on port ${PORT}`));