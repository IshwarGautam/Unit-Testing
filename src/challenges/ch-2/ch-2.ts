/**
 * Function to convert text to uppercase.
 * @param text any
 * @returns Error | string
 */
export function convertToUpperCase(text: any) {
  if (typeof text !== "string") {
    throw Error("Can only convert string value to uppercase");
  }

  const upperCase = text.toUpperCase();

  return upperCase;
}

/**
 * Function to convert text to lowercase
 * @param text any
 * @returns Error | string
 */
export function convertToLowerCase(text: any) {
  if (typeof text !== "string") {
    throw Error("Can only convert string value to lowercase");
  }

  const lowerCase = text.toLowerCase();

  return lowerCase;
}
