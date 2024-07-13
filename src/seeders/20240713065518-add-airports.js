'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Airports',[
    {
      name:'Jay Prakash Narayan Airport',
      cityId:6,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name:'Chhatrapati Shivaji Maharaj International Airport',
      cityId:8,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name:'Darbhanga Airport',
      cityId:6,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name:'Netaji Subhas Chandra Bose International Airport',
      cityId:4,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ],{});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
