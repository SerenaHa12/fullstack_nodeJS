"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      //   kết nối Course với User
      Course.belongsToMany(models.User, {
        through: "users_courses",
        foreignKey: "course_id",
      });
    }
  }
  Course.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: DataTypes.STRING,
      price: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Course",
      // timestamps: true,
      tableName: "courses",
      createdAt: "created_at",
      updatedAt: "updated_at",
      // kích hoạt xóa mềm
      /**
       * khi code chức năng xóa mềm -> nên xử lý bằng trường time
       * để khi filter
       */
    }
  );
  return Course;
};
