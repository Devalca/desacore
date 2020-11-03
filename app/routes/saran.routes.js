const upload = require("../config/upload.config");
const SaranRouter = require("../controllers/saran.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post("/saran/", upload.single("profilFile"), SaranRouter.upload);
  app.get("/saran/", SaranRouter.getAll);
  app.get("/saran/:id", SaranRouter.getData);
  app.delete("saran/:id", SaranRouter.getDestroy);
  app.put("/saran/", upload.single("profilFile"), SaranRouter.update);
};
