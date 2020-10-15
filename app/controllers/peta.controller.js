// const fs = require("fs");

const db = require("../models/peta");
const Webdes = db.webdes;

exports.getAll = (req, res) => {
  Webdes.findAll().then((webdes) => {
    res.json(webdes);
  });
};

exports.getData = (req, res) => {
  Webdes.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then(function (webdes) {
      if (webdes == null) {
        return res.json("Not Found");
      }

      return res.json(webdes);
    })
    .catch(function (err) {
      console.log(err);
    });
};


exports.upload = (req, res) => {
  Webdes.create({
    ptid: req.body.ptid,
    kategori: req.body.kategori,
    jenis: req.body.jenis,
    keterangan: req.body.keterangan,
    fileData: req.file === undefined ? "" : req.file.filename,
  }).then((webdes) => {
    try {
      res.json({
        status: "success",
        message: "Upload berhasil",
        data: webdes,
      });
    } catch (e) {
      console.log(e);
      res.json({ err: e });
    }
  });
};

exports.update = (req, res) => {
  const update = {
    kategori: req.body.kategori,
    jenis: req.body.jenis,
    keterangan: req.body.keterangan,
    fileData: req.file === undefined ? "" : req.file.filename,
  };
  Webdes.update(update, { where: { ptid: req.body.ptid } })
    .then((webdes) => {
      return Webdes.findOne({ where: { ptid: req.body.ptid } });
    })
    .then((webdes) => {
      res.json({
        status: "success",
        message: "Data Berhasil di update",
        data: webdes,
      });
    });
};

exports.getDestroy = (req, res) => {
  Webdes.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then(function (webdes) {
      if (webdes == null) {
        return res.json("Not Found");
      }
      return webdes.destroy();
    })
    .then(function (job) {
      return res.json("Data telah di hapus!");
    })
    .catch(function (err) {
      console.log(err);
    });
};

