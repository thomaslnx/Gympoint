import Sequelize, { Model } from 'sequelize';

class WorkoutSubscriptionPlans extends Model {
  static init(sequelize) {
    super.init(
      {
        title: Sequelize.STRING,
        duration: Sequelize.STRING,
        price: Sequelize.DECIMAL,
      },
      {
        sequelize,
      }
    );
  }
}

export default WorkoutSubscriptionPlans;
