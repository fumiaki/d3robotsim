const koa = require("koa");
const app = new koa();
const serve = require("koa-static");
const _ = require("koa-route");


app.use(serve("static"));

app.listen(8080);
console.log("listening on port 8080")
