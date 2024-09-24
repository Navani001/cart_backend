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
    await queryInterface.bulkInsert('product_variants', [{
        id:1,
        product_id:1,
      price:50,
        name:"random 1",
        is_active:1,
        createdAt:new Date(),
        updatedAt:new Date()
       },{
        id:2,
        product_id:2,
      price:50,
        name:"random 2",
        is_active:1,
        createdAt:new Date(),
        updatedAt:new Date()
       },{
        id:3,
        product_id:3,
      price:50,
        name:"random 3",
        is_active:1,
        createdAt:new Date(),
        updatedAt:new Date()
       },{
        id:4,
        product_id:4,
      price:50,
        name:"random 4",
        is_active:1,
        createdAt:new Date(),
        updatedAt:new Date()
       }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('product_variants', null, {});
  }
};
