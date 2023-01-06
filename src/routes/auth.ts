import * as compose from "koa-compose";
import * as Router from "koa-router";

const router = new Router({
  prefix: "/api/v1/auth",
});

router.get("/", async (ctx, next: () => void) => {
  console.log("hemlo g");
  ctx.state.data = { message: "Welcome to the auth api" };
  next();
});

const routes = router.routes();
export default () => compose([routes]);
