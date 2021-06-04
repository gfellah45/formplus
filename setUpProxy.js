const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target:
        "https://front-end-task-dot-fpls-dev.uc.r.appspot.com/api/v1/public/task_templates",
      changeOrigin: true,
    })
  );
};
