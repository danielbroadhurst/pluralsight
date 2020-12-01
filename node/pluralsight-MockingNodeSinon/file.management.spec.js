const { expect } = require("chai");
const fileManagement = require("./file.management");

describe.skip("File Management", () => {
  it("Should create a new file", () => {
    const result = fileManagement.createFile("test.txt");
    expect(result).to.be.undefined;
  });

  it("Should delete the file specified", () => {
    const result = fileManagement.deleteFile("test.txt");
    expect(result).to.be.undefined;
  });
});
