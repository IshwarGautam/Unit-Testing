import { calculateGrade } from "./ch-5.util";
import { findYourGrade, generateRandomString } from "./ch-5";

jest.mock("./ch-5.util");
jest.mock("random-strings", () => ({ human: () => "dhfr8374939rh" }));

describe("Calculate Grade", () => {
  test("it should calculate grade", () => {
    (calculateGrade as jest.Mock).mockReturnValueOnce("B");

    // Arrange
    const expectedValue = "B";
    // Act
    const res = findYourGrade();
    // Assert
    expect(res).toBe(expectedValue);
  });
});

describe("Test Random String generation", () => {
  test("it should generate random UUID.", () => {
    // Arrange
    const expected_value = "dhfr8374939rh";
    // Act
    const result = generateRandomString();
    // Assert
    expect(result).toBe(expected_value);
  });
});
