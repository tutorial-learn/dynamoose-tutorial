import { SwaggerRouter } from "koa-swagger-decorator";
import apiRouter from "./music";

const router = new SwaggerRouter();

router.use("/music", apiRouter.routes());

export default router;
