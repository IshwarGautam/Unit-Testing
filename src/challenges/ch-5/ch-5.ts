const rs = require("random-strings");
import { calculateGrade } from "./ch-5.util";

/**
 * User created function.
 *
 * @returns grade string
 */
export function findYourGrade() {
  const grade = calculateGrade();

  return grade;
}

/**
 * Use npm package.
 *
 * @returns random_string string
 */
export const generateRandomString = () => {
  return rs.human(20);
};
