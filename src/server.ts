import Koa from "koa";
import cors from "koa-cors";
import bodyParser from "koa-bodyparser";
import router from "./routes";
import errorHandle from "./middleware/errorHandle";
import responseWrapper from "./middleware/responseWrapper";
import db from "./model";

const PORT = 8888;

const app = new Koa();

app
  .use(cors())
  .use(bodyParser())
  .use(errorHandle)
  .use(responseWrapper)
  .use(router.routes())
  .use(router.allowedMethods());

const start = () => {
  db();

  app.listen(PORT, () => {
    console.log(`running server on http://localhost:${PORT}`);
    console.log(`swagger server on http://localhost:${PORT}/music/docs`);
  });
};

start();
