const upload = require("../config/upload.config");
const identifikasiRouter = require("../controllers/identifikasi.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post("/des1/", upload.single("profilFile"), identifikasiRouter.upload);
  app.get("/des1/", identifikasiRouter.getAll);
  app.get("/des1/:id", identifikasiRouter.getData);
  app.delete("/des1/:id", identifikasiRouter.getDestroy);
  app.put("/des1/", upload.single("profilFile"), identifikasiRouter.update);
};
