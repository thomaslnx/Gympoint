import Sequelize, { Model } from 'sequelize';

class StudentsSubscription extends Model {
  static init(sequelize) {
    super.init(
      {
        student_id: Sequelize.INTEGER,
        plan_id: Sequelize.INTEGER,
        start_date: Sequelize.DATE,
        end_date: Sequelize.DATE,
        price: Sequelize.DECIMAL,
      },
      {
        sequelize,
        freezeTableName: true,
        tableName: 'students_subscription',
        underscored: true,
        underscoredAll: true,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Students, {
      foreingKey: 'student_id',
    });
    this.belongsTo(models.WorkoutSubscriptionPlans, {
      foreingKey: 'plan_id',
    });
  }
}

export default StudentsSubscription;
