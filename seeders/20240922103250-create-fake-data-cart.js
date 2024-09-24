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
    await queryInterface.bulkInsert('carts', [{
         id:1,
         product_id:1,
         category_id:1,
         quantity:2,
         createdAt:new Date(),
         total_price:50,
         updatedAt:new Date()
       },{
        id:2,
        product_id:2,
        category_id:2,
        quantity:2,
        createdAt:new Date(),
        total_price:50,
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
    await queryInterface.bulkDelete('carts', null, {});
  }
};
