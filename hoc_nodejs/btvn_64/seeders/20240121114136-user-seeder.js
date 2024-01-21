"use strict";

const bcrypt = require("bcrypt");
const { faker } = require("@faker-js/faker");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    const data = [];
    for (let i = 0; i < 50; i++) {
      const salt = bcrypt.genSaltSync(10);
      const seedData = {
        fullname: faker.internet.displayName(),
        email: faker.internet.email(),
        password: bcrypt.hashSync("123456", salt),
        status: faker.datatype.boolean(),
        created_at: new Date(),
        updated_at: new Date(),
      };
      data.push(seedData);
    }
    await queryInterface.bulkInsert("users", data, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("users", null, {});
  },
};
