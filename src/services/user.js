import connection from "../database/connection";
import addressService from "./address";
export default {
  async create(user) {
    try {
      const { address, name, email, cpf, phone } = user;

      const addresId = await addressService.create(address);

      console.log("addres id ", addresId);
      if (addresId) {
        const userSaved = await connection
          .table("users")
          .returning(["id", "email"])
          .insert({
            name,
            email,
            cpf,
            phone,
            address_id: addresId,
          });

        return userSaved;
      }
    } catch (error) {
      throw error;
    }
  },

  async findUserById(id) {
    try {
      const user = await connection
        .table("users")
        .innerJoin("address", "address.id", "=", "users.address_id")
        .where("users.id", id)
        .select([
          "users.*",
          "address.city",
          "address.street",
          "address.zip_code",
          "address.number",
        ])
        .first();
      return user;
    } catch (error) {
      throw error;
    }
  },

  async updateUser(id, user) {
    try {
      const { name, email, cpf, phone, address } = user;

      const userSaved = await connection.table("users").where("id", id).update({
        name,
        email,
        cpf,
        phone,
      });

      if (address) {
        await addressService.updateAddress(address.id, address);
      }

      return userSaved;
    } catch (error) {
      throw error;
    }
  },
};
