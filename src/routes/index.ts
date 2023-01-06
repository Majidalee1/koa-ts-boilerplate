import * as compose from "koa-compose";
import * as fs from "fs";

const routes: Array<() => void> = [];
fs.readdirSync(__dirname)
  .filter((file) => file !== "index.ts")
  .forEach((file) => {
    const route = require(`./${file}`);
    routes.push(route.default());
  });

export default () => compose(routes);
