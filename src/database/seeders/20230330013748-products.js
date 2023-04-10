"use strict";

const getTime = (timestamp) => {
  const millis = timestamp * 1000;
  const date = new Date(millis);
  return date.toDateString();
};

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "products",
      [
        {
          name: "Spaghetti",
          description: "spaghetti in tomato sauce",
          price: 8.5,
          img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80",
          createdAt: getTime(Date.now()),
          updatedAt: getTime(Date.now()),
        },
        {
          name: "Hamburger",
          description: "100% beef burger",
          price: 9.25,
          img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80",
          createdAt: getTime(Date.now()),
          updatedAt: getTime(Date.now()),
        },
        {
          name: "Milk shake",
          description: "Different fruit flavors",
          price: 4.75,
          img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80",
          createdAt: getTime(Date.now()),
          updatedAt: getTime(Date.now()),
        },
        {
          name: "Order of tacos",
          description: "Steak or flank steak",
          price: 5.0,
          img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80",
          createdAt: getTime(Date.now()),
          updatedAt: getTime(Date.now()),
        },
        {
          name: "Grilled chicken",
          description: "Also in teriyaki sauce",
          price: 12.5,
          img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80",
          createdAt: getTime(Date.now()),
          updatedAt: getTime(Date.now()),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("products", null, {});
  },
};
