import { validatePassword } from "./ch-3";

describe("Password Validation Test", () => {
  test("it should return true on successful password validation", () => {
    // Arrange
    const password = "helloWorld";
    const hashedPassword = "jkdjfkdjfkhelloWorldBWT";
    // Act
    const isValidate = validatePassword(password, hashedPassword);
    // Assert
    expect(isValidate).toBeTruthy();
  });

  test("it should throw error on password validation fail.", () => {
    // Arrange
    const password = "helloWorld";
    const hashedPassword = "helloWorld12345";
    const expectedError = "Password Validation Fail.";
    // Act and Assert
    expect(() => validatePassword(password, hashedPassword)).toThrow(
      expectedError
    );
  });
});
