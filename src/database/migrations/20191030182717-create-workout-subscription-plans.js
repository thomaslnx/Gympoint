module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('workout_subscription_plans', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      duration: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      price: {
        type: Sequelize.DECIMAL,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNul: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNul: false,
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('workout_subscription_plans');
  },
};
