"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.changeColumn(
          "users",
          "name",
          {
            type: Sequelize.DataTypes.STRING(50),
          },
          { transaction: t }
        ),
        queryInterface.renameColumn("users", "name", "fullname", {
          transaction: t,
        }),
      ]);
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.changeColumn(
          "users",
          "fullname",
          {
            type: Sequelize.DataTypes.STRING(30),
          },
          { transaction: t }
        ),
        queryInterface.renameColumn("users", "fullname", "name", {
          transaction: t,
        }),
      ]);
    });
  },
};
