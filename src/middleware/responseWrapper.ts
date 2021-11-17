import { Next, DefaultContext } from "koa";
import { SuccessResponse, ErrorResponse } from "../utils/response";

const responseWrapper = async (ctx: DefaultContext, next: Next) => {
  try {
    await next();
    if (typeof ctx.body !== "string" && !ctx.body?.swagger) {
      ctx.body = SuccessResponse(ctx.body);
    }
  } catch (error) {
    ctx.body = ErrorResponse(error);
  }
};

export default responseWrapper;
