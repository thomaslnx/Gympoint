import WorkoutSubscriptionPlans from '../models/WorkoutSubscriptionPlans';

class WorkoutPlansController {
  // Listagem dos planos da academia.
  async index(req, res) {
    const workoutsPlans = await WorkoutSubscriptionPlans.findAll();

    return res.json(workoutsPlans);
  }

  // Criação dos planos da academia.
  async store(req, res) {
    const workoutPlans = await WorkoutSubscriptionPlans.create(req.body);
    return res.json(workoutPlans);
  }

  // Update dos planos da academia.
  async update(req, res) {
    const { id } = req.params;
    const { title, duration, price } = req.body;
    const workouts = await WorkoutSubscriptionPlans.findByPk(id);

    if (!(await workouts)) {
      return res.status(401).json({ error: 'Workout plan does not exists' });
    }

    if (title !== workouts.title) {
      const { title } = await workouts.update(req.body);
    }

    if (duration !== workouts.duration) {
      const { duration } = await workouts.update(req.body);
    }

    if (price !== workouts.price) {
      const { price } = await workouts.update(req.body);
    }

    return res.json(workouts);
  }

  // Deleção dos planos da academia.
  async delete(req, res) {
    const { id } = req.params;

    const workouts = await WorkoutSubscriptionPlans.destroy({
      where: {
        id,
      },
    });

    if (!workouts) {
      return res.json({ message: 'Workout Plan do not found' });
    }

    return res.json({ message: 'Workout Plan removed successufuly' });
  }
}

export default new WorkoutPlansController();
