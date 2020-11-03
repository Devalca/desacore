module.exports = (sequelize, Sequelize) => {
  const Saran = sequelize.define(
    "Saran",
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      kategori: {
        type: Sequelize.STRING,
      },
      proses: {
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

  return Saran;
};
