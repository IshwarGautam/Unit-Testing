import { asyncFunc } from "./ch-6";

describe("Test asynchronous function", () => {
  test("it should call async function and accept the value.", async () => {
    // Arrange
    const expectedValue = "Accepted!";
    // Act
    const res = await asyncFunc(true);
    // Assert
    expect(res).toBe(expectedValue);
  });

  test("it should call async function and reject the value.", async () => {
    // Arrange
    const expectedValue = "Rejected!";
    // Act and Assert
    await expect(asyncFunc(false)).rejects.toThrow(expectedValue);
  });
});
