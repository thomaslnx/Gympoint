import * as Yup from 'yup';
import User from '../models/User';

class UserController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string()
        .required()
        .min(6),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(401).json({ error: 'Validation fails.' });
    }

    const user = await User.findOne({
      where: {
        name: req.body.name,
      },
    });

    if (user) {
      return res.status(401).json({ error: 'Admin user alread exists' });
    }

    const admin = await User.create(req.body);

    return res.json(admin);
  }
}

export default new UserController();
