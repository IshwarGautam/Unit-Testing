import { encryptPassword } from "./ch-3.util";

/**
 * Function to validate your password.
 * @param password string
 * @param hashedPassword string
 *
 * @returns Error | true
 */
export function validatePassword(password: string, hashedPassword: string) {
  const passwordEncrypted = encryptPassword(hashedPassword);

  if (password !== passwordEncrypted) {
    throw Error("Password Validation Fail.");
  }

  return true;
}
