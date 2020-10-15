const multer = require("multer");
const path = require("path");
const uploadDir = "/img/";
const crypto = require("crypto");

var storage = multer.diskStorage({
  destination: "./public" + uploadDir,
  filename: function (req, file, cb) {
    crypto.pseudoRandomBytes(16, function (err, raw) {
      if (err) return cb(err);

      cb(null, raw.toString("hex") + path.extname(file.originalname));
    });
  },
});

var upload = multer({ storage: storage, dest: uploadDir });

module.exports = upload;