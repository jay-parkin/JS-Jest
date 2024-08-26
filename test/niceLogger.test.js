//Import a specific fucntion from the file
const { niceLogger, messageRepeater } = require("../src/niceLogger.js");

// Import the file
const niceLoggerFile = require("../src/niceLogger.js");
// Import a specific function from the file
const niceLoggerFunction = niceLoggerFile.niceLogger;

describe("niceLogger fucntion tests", () => {
  test("niceLogger returns Hello world!", () => {
    expect(niceLogger()).toBe("Hello world!");
  });

  test("niceLogger returns Hello world!", () => {
    expect(niceLogger()).toBe("Hello world!");
  });

  test("niceLogger returns Hello world!", () => {
    expect(niceLogger()).toBe("Hello world!");
  });

  test("niceLogger returns Hello world!", () => {
    expect(niceLogger()).toBe("Hello world!");
  });
});

describe("messageRepeater function tests", () => {
  test.skip("messageRepeater repeats words correctly", () => {});
  test.skip("messageRepeater repeats numbers correctly", () => {});
  test.skip("messageRepeater repeats arrays correctly", () => {});
  test.skip("messageRepeater repeats null or white spaces correctly", () => {});
});
