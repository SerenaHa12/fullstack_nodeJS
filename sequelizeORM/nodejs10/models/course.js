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
      Course.hasMany(models.User, {
        foreignKey: "course_id",
        as: "users",
      });

      Course.belongsToMany(models.User, {
        through: "users_courses",
        foreignKey: "course_id",
        as: "users",
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
    },
    {
      sequelize,
      modelName: "Course",
      tableName: "course",
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );
  return Course;
};
