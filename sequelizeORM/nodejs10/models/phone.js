"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Phone extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Phone.belongsTo(models.User, {
        foreignKey: "user_id",
      });
    }
  }
  Phone.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      phone: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Phone",
      tableName: "phones",
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );
  return Phone;
};
