import { Context, Next } from "koa";

const errorHandle = async (ctx: Context, next: Next) => {
  try {
    await next();
  } catch (error) {
    ctx.status = error.status || 400;
    ctx.body = { msg: error.toString() };
  }
};

export default errorHandle;
