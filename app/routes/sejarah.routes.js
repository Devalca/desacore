const upload = require("../config/upload.config");
const SejarahRouter = require("../controllers/sejarah.controller");
const db = require("../models/sejarah");
const Webdes = db.webdes;

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/des4/", SejarahRouter.getAll);
  app.post("/des4/", upload.single("profilFile"), SejarahRouter.upload);
  app.get("/des4/:id", SejarahRouter.getData);
  app.delete("/des4/:id", SejarahRouter.getDestroy);
  app.put("/des4/", upload.single("profilFile"), SejarahRouter.update);
};
