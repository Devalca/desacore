// const fs = require("fs");

const db = require("../models/saran");
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
    kategori: req.body.kategori,
    proses: req.body.proses,
    keterangan: req.body.keterangan,
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

exports.update = (req, res) => {
  const update = {
    id: req.body.id,
    keterangan: req.body.keterangan,
    proses: req.body.proses,
    kategori: req.body.kategori
  };
  Webdes.update(update, { where: { id: req.body.id } })
    .then((webdes) => {
      return Webdes.findOne({ where: { id: req.body.id } });
    })
    .then((webdes) => {
      res.json({
        status: "success",
        message: "Data Berhasil di update",
        data: webdes,
      });
    });
};
