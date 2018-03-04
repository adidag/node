const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
  ctx.body = 'Hello World and use koa.js';
});

app.listen(3000);
console.log("Listen to 3000")