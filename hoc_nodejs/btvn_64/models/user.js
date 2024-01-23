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
      //   kết nối bẳng User với Phone
      // User.hasOne(models.Phone, {
      //   foreignKey: "user_id",
      //   as: "phones",
      // });
      // kết nối User với Group
      // User.belongsTo(models.Group, {
      //   foreignKey: "group_id",
      //   as: "group",
      // });
      // kết nối User với course
      // User.belongsToMany(models.Course, {
      //   through: "users_courses",
      //   foreignKey: "user_id",
      //   as: "courses",
      // });

      User.belongsTo(models.Provider, {
        foreignKey: "provider_id",
        as: "provider",
      });
    }
  }
  User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      fullname: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      status: DataTypes.BOOLEAN,
      provider_id: DataTypes.INTEGER,
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
      // paranoid: true,
      // deletedAt: "deleted_at",
    }
  );
  return User;
};
