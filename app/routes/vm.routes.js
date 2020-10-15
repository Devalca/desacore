const upload = require("../config/upload.config");
const VisimisiRouter = require("../controllers/vm.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post("/des6/", upload.single("profilFile"), VisimisiRouter.upload);
  app.get("/des6/", VisimisiRouter.getAll);
  app.get("/des6/:id", VisimisiRouter.getData);
  app.delete("/des6/:id", VisimisiRouter.getDestroy);
  app.put("/des6/", upload.single("profilFile"), VisimisiRouter.update);
};
