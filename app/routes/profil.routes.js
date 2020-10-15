const upload = require("../config/upload.config");
const ProfilRouter = require("../controllers/profil.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post("/des3/", upload.single("profilFile"), ProfilRouter.upload);
  app.get("/des3/", ProfilRouter.getAll);
  app.get("/des3/:id", ProfilRouter.getData);
  app.delete("/des3/:id", ProfilRouter.getDestroy);
  app.put("/des3/", upload.single("profilFile"), ProfilRouter.update);
};
