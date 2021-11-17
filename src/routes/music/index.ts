import { SwaggerRouter } from "koa-swagger-decorator";
import path from "path";

const router = new SwaggerRouter();

router.swagger({
  title: "Music Api",
  description: "API DOC",
  version: "1.0.0",
  prefix: "/music",
  swaggerHtmlEndpoint: "/docs",
  swaggerJsonEndpoint: "/json",
  swaggerConfiguration: {
    display: {
      defaultModelsExpandDepth: 4,
      defaultModelExpandDepth: 3,
      docExpansion: "list",
      defaultModelRendering: "model",
    },
  },
});

router.mapDir(path.resolve(__dirname), {
  recursive: true,
  doValidation: true,
});

export default router;
