import moment from 'moment';
import addDays from 'date-fns/addDays';
import StudentsSubscription from '../models/StudentsSubscription';
import Students from '../models/Students';
import WorkoutSubscriptionPlans from '../models/WorkoutSubscriptionPlans';

class StudentsSubscriptionController {
  async store(req, res) {
    const { start_date, student_id, plan_id } = req.body;

    const student = await Students.findByPk(student_id); // verifica se o id do usuario informado existe no DB.

    if (!student) {
      return res.status(401).json({ error: 'Student do not find on platform' });
    }

    const workoutPlan = await WorkoutSubscriptionPlans.findByPk(plan_id); // verifica se o id do plano informado existe no DB.

    if (!workoutPlan) {
      return res.status(401).json({ error: 'This plan does not exists' });
    }

    const formatedDate = moment(start_date, 'DD/MM/YYYY');
    const planDuration = workoutPlan.duration;

    switch (planDuration) {
      case '1 mês':
        {
          const endDate = addDays(new Date(formatedDate), 30);
          const finalPrice = workoutPlan.price * 1;

          const studentsSubs = await StudentsSubscription.create({
            student_id: student.id,
            plan_id: workoutPlan.id,
            start_date: formatedDate,
            end_date: endDate,
            price: finalPrice,
          });
          return res.json(studentsSubs);
        }
        break;

      case '3 meses':
        {
          const endDate = addDays(new Date(formatedDate), 90);
          const finalPrice = workoutPlan.price * 3;

          const studentsSubs = await StudentsSubscription.create({
            student_id: student.id,
            plan_id: workoutPlan.id,
            start_date: formatedDate,
            end_date: endDate,
            price: finalPrice,
          });
          return res.json(studentsSubs);
        }
        break;

      case '6 meses':
        {
          const endDate = addDays(new Date(formatedDate), 180);
          const finalPrice = workoutPlan.price * 6;

          const studentsSubs = await StudentsSubscription.create({
            student_id: student.id,
            plan_id: workoutPlan.id,
            start_date: formatedDate,
            end_date: endDate,
            price: finalPrice,
          });
          return res.json(studentsSubs);
        }
        break;

      default:
        console.log('Chegou no default');
    }

    //

    return res.json(workoutPlan);
  }
}

export default new StudentsSubscriptionController();
