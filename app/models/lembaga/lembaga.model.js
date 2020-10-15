const uploadDir = "/doc/";

module.exports = (sequelize, Sequelize) => {
  const Lembaga = sequelize.define(
    "Lembaga",
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      rnid: {
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

  return Lembaga;
};
