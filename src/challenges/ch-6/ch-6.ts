/**
 * Asynchronous function.
 *
 * @returns Promise
 */
export function asyncFunc(condition: boolean) {
  if (condition === true) {
    return new Promise((accept, _) => {
      setTimeout(() => accept("Accepted!"), 50);
    });
  } else {
    return new Promise((_, reject) => {
      setTimeout(() => reject(new Error("Rejected!")), 50);
    });
  }
}
