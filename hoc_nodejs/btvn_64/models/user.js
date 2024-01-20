"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      status: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "User",
      // timestamps: true,
      tableName: "users",
      createdAt: "created_at",
      updatedAt: "updated_at",
      // kích hoạt xóa mềm
      /**
       * khi code chức năng xóa mềm -> nên xử lý bằng trường time
       * để khi filter
       */
      paranoid: true,
      deletedAt: "deleted_at",
    }
  );
  return User;
};
