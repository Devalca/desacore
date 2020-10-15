const upload = require("../config/peta.config");
const PetaRouter = require("../controllers/peta.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post("/des7/", upload.single("profilFile"), PetaRouter.upload);
  app.get("/des7/", PetaRouter.getAll);
  app.get("/des7/:id", PetaRouter.getData);
  app.delete("/des7/:id", PetaRouter.getDestroy);
  app.put("/des7/", upload.single("profilFile"), PetaRouter.update);
};
