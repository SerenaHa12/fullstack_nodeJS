"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Group extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      //   kết nối Group với User
      // Group.hasMany(models.User, {
      //   foreignKey: "group_id",
      //   as: "users",
      // });
    }
  }
  Group.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: DataTypes.STRING(200),
    },
    {
      sequelize,
      modelName: "Group",
      // timestamps: true,
      tableName: "groups",
      createdAt: "created_at",
      updatedAt: "updated_at",
      // kích hoạt xóa mềm
      /**
       * khi code chức năng xóa mềm -> nên xử lý bằng trường time
       * để khi filter
       */
    }
  );
  return Group;
};
