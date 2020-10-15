const upload = require("../config/upload.config");
const LembagaRouter = require("../controllers/lembaga.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post("/des2/", upload.single("profilFile"), LembagaRouter.upload);
  app.get("/des2/", LembagaRouter.getAll);
  app.get("/des2/:id", LembagaRouter.getData);
  app.delete("des2/:id", LembagaRouter.getDestroy);
  app.put("/des2/", upload.single("profilFile"), LembagaRouter.update);
};
