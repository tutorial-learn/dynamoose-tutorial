export const SuccessResponseSchema = (resultSchema: any = undefined) => ({
  type: "object",
  properties: {
    success: {
      type: "boolean",
    },
    result: resultSchema,
  },
});

export const SuccessResponse = (result: any) => ({
  success: true,
  result,
});

export const ErrorResponse = (error: any) => ({
  success: false,
  code: error.statusCode || error.status,
  message: error.message,
});
