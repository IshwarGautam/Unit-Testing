const front = "jkdjfkdjfk";
const back = "BWT";

/**
 * Function to hash password.
 * @param password string
 * @returns hashedPassword string
 */
export function hashedPassword(password: string) {
  const hashedPassword = front + password + back;

  return hashedPassword;
}

/**
 * Function to encrypt password.
 * @param hashedPassword string
 * @returns password string
 */
export function encryptPassword(hashedPassword: string) {
  const password = hashedPassword.replace(front, "").replace(back, "");

  return password;
}
