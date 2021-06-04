const proxy = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    "/api",
    proxy({
      target:
        "https://front-end-task-dot-fpls-dev.uc.r.appspot.com/api/v1/public/",
      changeOrigin: true,
    })
  );
};
