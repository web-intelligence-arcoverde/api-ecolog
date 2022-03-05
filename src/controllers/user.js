import userService from "../services/user";

export default {
  async create(req, res) {
    try {
      const { email, password } = req.body;

      const user = await userService.create(email, password);

      return res.status(201).send(user);
    } catch (error) {
      return res.status(400).send({
        message: "Error on create user",
      });
    }
  },

  async findById(req, res) {
    try {
      const { id } = req.params;

      const user = await userService.findUser(id);

      return res.status(200).send({
        email: user.email,
        id: user.id,
      });
    } catch (error) {
      return res.status(401).send(error);
    }
  },
};
