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
     await queryInterface.bulkInsert('product_category_masters', [{
      id:1,
       name: 'veg food',
       is_active:1,
       createdAt: new Date(),
       updatedAt:new Date()
      
     },{
      id:2,
       name: 'non food',
       is_active:1,
       createdAt: new Date(),
       updatedAt:new Date()
      
     },{
      id:3,
       name: 'fish',
       is_active:1,
       createdAt: new Date(),
       updatedAt:new Date()
      
     },{
      id:4,
       name: 'rice',
       is_active:1,
       createdAt: new Date(),
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
    await queryInterface.bulkDelete('product_category_masters', null, {});
  }
};
