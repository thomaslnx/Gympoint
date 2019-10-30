import * as Yup from 'yup';
import Students from '../models/Students';

class StudentsController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      idade: Yup.number()
        .required()
        .positive()
        .integer(),
      peso: Yup.number()
        .required()
        .integer()
        .positive(),
      altura: Yup.number()
        .required()
        .positive(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(401).json({ error: 'Validation fails.' });
    }

    const userExists = await Students.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (userExists) {
      return res.json({ error: 'O usuário já é aluno da academia' });
    }

    const students = await Students.create(req.body);

    return res.json(students);
  }
}

export default new StudentsController();
