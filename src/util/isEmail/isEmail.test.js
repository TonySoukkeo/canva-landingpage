import isEmail from "./isEmail.js";

describe("isEmail returns correct boolean value on given input", () => {
  test("isEmail returns true on valid email", () => {
    const value = "test@gmail.com";

    expect(isEmail(value)).toBe(true);
  });

  test("isEmail returns false on invalid email", () => {
    const value = "asksdkldd";

    expect(isEmail(value)).toBe(false);
  });
});
