import connection from "../database/connection";
import hashPassword from "../utils/bcrypt";
import emailValidation from "../utils/emailValidation";

export default {
  async create(email, password) {
    try {
      const validation = emailValidation(email);
      const user = await connection
        .table("users")
        .returning(["id", "email"])
        .insert({
          email,
          password: hashPassword(password),
        });

      return user;
    } catch (error) {
      throw error;
    }
  },

  async findUser(id) {
    try {
      const user = await connection
        .table("users")
        .where("id", id)
        .first()
        .select();

      return user;
    } catch (error) {
      throw error;
    }
  },
};
