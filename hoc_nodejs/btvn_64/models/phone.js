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
      //   kết nối bẳng Phone với User
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
      // timestamps: true,
      tableName: "phones",
      createdAt: "created_at",
      updatedAt: "updated_at",
      // kích hoạt xóa mềm
      /**
       * khi code chức năng xóa mềm -> nên xử lý bằng trường time
       * để khi filter
       */
    }
  );
  return Phone;
};
