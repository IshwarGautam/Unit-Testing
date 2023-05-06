import { convertToLowerCase, convertToUpperCase } from "./ch-2";

describe("UpperCase function", () => {
  test("it should convert our text to uppercase character.", () => {
    // Arrange
    const text = "Unit test";
    const expectedValue = "UNIT TEST";
    // Act
    const upperCase = convertToUpperCase(text);
    // Assert
    expect(upperCase).toBe(expectedValue);
  });

  test("it should return error if the text is not string value.", () => {
    // Arrange
    const text = 123;
    const expectedError = "Can only convert string value to uppercase";
    // Act and Assert
    expect(() => convertToUpperCase(text)).toThrow(expectedError);
  });
});

describe("LowerCase function", () => {
  test("it should convert our text to lowercase character.", () => {
    // Arrange
    const text = "Unit Test";
    const expectedValue = "unit test";
    // Act
    const lowercase = convertToLowerCase(text);
    // Assert
    expect(lowercase).toBe(expectedValue);
  });

  test("it should return error if the text is not string value.", () => {
    // Arrange
    const text = ["Hello World"];
    const expectedError = "Can only convert string value to lowercase";
    // Act and Assert
    expect(() => convertToLowerCase(text)).toThrow(expectedError);
  });
});
