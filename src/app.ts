import * as Koa from "koa";
import routes from "./routes";
import responseMiddleware from "./middleware/response";

async function main(): Promise<void> {
  const app = new Koa();
  app.use(routes());
  app.use(responseMiddleware());
  try {
    const port = process.env.PORT || 4000;
    const server = app.listen(port);
    console.info(`Listening to http://localhost:${port}`);
  } catch (error) {
    console.error(`"\x1b[31m%s\x1b[0m" : "%s"`, error.toString());
  }
}

// eslint-disable-next-line @typescript-eslint/no-floating-promises
main();
