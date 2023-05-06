import { calculateAreaOfRectangle } from "./ch-1";

describe("Calculate Area of Rectangle", () => {
  test("it should return the area with correct parameters provided", () => {
    // Arrange
    const length = 5;
    const breadth = 10;
    const expectedValue = 50;
    // Act
    const areaOfRectangle = calculateAreaOfRectangle(length, breadth);
    // Assert
    expect(areaOfRectangle).toBe(expectedValue);
  });

  test("it should return positive value with positive parameter values provided", () => {
    // Arrange
    const length = 2;
    const breadth = 4;
    // Act
    const areaOfRectangle = calculateAreaOfRectangle(length, breadth);
    // Assert
    expect(areaOfRectangle).toBeGreaterThanOrEqual(0);
  });
});
