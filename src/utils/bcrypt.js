import { genSaltSync, hashSync } from "bcrypt";

const hashPassword = (password) => {
  const saltHash = genSaltSync(10);

  return hashSync(password, saltHash);
};

export default hashPassword;
