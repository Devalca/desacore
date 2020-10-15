const uploadDir = "/img/";

module.exports = (sequelize, Sequelize) => {
  const Peta = sequelize.define(
    "Peta",
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      ptid: {
        type: Sequelize.STRING,
      },
      fileData: {
        type: Sequelize.STRING,
        //Set custom getter for book image using URL
        get() {
          const image = this.getDataValue("fileData");
          return uploadDir + image;
        },
      },
      kategori: {
        type: Sequelize.STRING,
      },
      jenis: {
        type: Sequelize.STRING,
      },
      keterangan: {
        type: Sequelize.STRING,
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
    },
    {
      freezeTableName: true,
    }
  );

  return Peta;
};
