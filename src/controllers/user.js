import userService from "../services/user";

export default {
  async create(req, res) {
    try {
      const { email, name, cpf, phone, address } = req.body;

      const user = await userService.create({
        email,
        name,
        cpf,
        phone,
        address,
      });

      return res.status(201).send(user);
    } catch (error) {
      return res.status(400).send({
        message: "Error on create user ",
        ...error,
      });
    }
  },

  async findById(req, res) {
    try {
      const { id } = req.params;

      const user = await userService.findUserById(id);

      if (!user) {
        return res.status(404).send({
          message: "User not found",
        });
      }
      return res.status(200).send(user);
    } catch (error) {
      return res.status(404).send(error);
    }
  },

  async updateUser(req, res) {
    try {
      const { id } = req.params;
      const { email, name, cpf, phone, address } = req.body;

      const userInDb = await userService.findUserById(id);

      if (!userInDb) {
        return res.status(404).send({
          message: "User not found",
        });
      }

      const user = await userService.updateUser(id, {
        email,
        name,
        cpf,
        phone,
        address: { ...address, id: userInDb.address_id },
      });

      if (!user) {
        return res.status(404).send({
          message: "User not found",
        });
      }
      return res.status(201).send();
    } catch (error) {
      return res.status(404).send(error);
    }
  },
};
