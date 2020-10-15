const upload = require("../config/upload.config");
const StrukturRouter = require("../controllers/struktur.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post("/des5/", upload.single("profilFile"), StrukturRouter.upload);
  app.get("/des5/", StrukturRouter.getAll);
  app.get("/des5/:id", StrukturRouter.getData);
  app.delete("/des5/:id", StrukturRouter.getDestroy);
  app.put("/des5/", upload.single("profilFile"), StrukturRouter.update);
};
