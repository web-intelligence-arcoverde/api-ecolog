import connection from "../database/connection";

export default {
  async create(address) {
    try {
      const addressId = await connection
        .table("address")
        .returning("id")
        .insert(address);

      return addressId[0].id;
    } catch (error) {
      throw error;
    }
  },

  async updateAddress(id, address) {
    try {
      const addressId = await connection
        .table("address")
        .where("id", id)
        .update(address);
      return addressId;
    } catch (error) {
      throw error;
    }
  },
};
