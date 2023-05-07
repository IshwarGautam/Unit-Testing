import { getToken, setToken, TOKEN } from "./ch-4";

describe("Valid Authentication", () => {
  test("it should return onSuccess callback with available token", () => {
    //Arrange
    const mockSuccess = jest.fn();
    //Act
    getToken(mockSuccess, () => {});
    //Assert
    expect(mockSuccess).toHaveBeenCalledWith(TOKEN);
  });

  test("it should call onSuccess callback only once", () => {
    //Arrange
    const mockSuccess = jest.fn();
    //Act
    getToken(mockSuccess, () => {});
    //Assert
    expect(mockSuccess).toHaveBeenCalledTimes(1);
  });

  test("it should return onSuccess callback with only one argument", () => {
    //Arrange
    const mockSuccess = jest.fn();
    //Act
    getToken(mockSuccess, () => {});
    //Assert
    expect(mockSuccess.mock.calls[0].length).toBe(1);
  });

  test("it should call onError callback when token is invalid", () => {
    //Arrange
    setToken({});
    const mockError = jest.fn();
    //Act
    getToken(() => {}, mockError);
    //Assert
    expect(mockError).toHaveBeenCalledWith(new Error("Invalid Token"));
  });

  test("it should call onError callback only once", () => {
    //Arrange
    setToken({});
    const mockError = jest.fn();
    //Act
    getToken(() => {}, mockError);
    //Assert
    expect(mockError).toHaveBeenCalledTimes(1);
  });

  test("it should call onError callback with only one argument", () => {
    // Arrange
    setToken({});
    const mockError = jest.fn();
    //Act
    getToken(() => {}, mockError);
    //Assert
    expect(mockError.mock.calls[0].length).toBe(1);
  });

  test("it should return error when token is string but not having 10 characters.", () => {
    //Arrange
    setToken("jdhfjd");
    const mockError = jest.fn();
    //Act
    getToken(() => {}, mockError);
    //Assert
    expect(mockError).toHaveBeenCalledWith(new Error("Invalid Token"));
  });
});
