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
    await queryInterface.bulkInsert('products', [{
      id:1,
      name: 'riced rice',
      category_id:1,
      img_url:"images/fish.png",
      createdAt: new Date(),
      updatedAt:new Date()
       },{
        id:2,
        name: 'chicken riced rice',
        category_id:2,
        img_url:"images/fricedrice.png",
        createdAt: new Date(),
        updatedAt:new Date()
         },{
          id:3,
          name: 'briyani',
          category_id:2,
          img_url:"images/briyani.png",
          createdAt: new Date(),
          updatedAt:new Date()
           },{
            id:4,
            name: 'fried fish',
            category_id:3,
            img_url:"images/fish.png",
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
    await queryInterface.bulkDelete('products', null, {});
  }
};
