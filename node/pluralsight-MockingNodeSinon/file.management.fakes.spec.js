const { expect } = require("chai");
const sinon = require("sinon");
const fs = require("fs");
const proxyquire = require("proxyquire");

const fileManagement = require("./file.management");

describe("File Management Stub", () => {
  afterEach(() => {
    sinon.restore();
  });
  it("Should create a new file", () => {
    const writeFake = sinon.fake(fs.writeFileSync);
    sinon.replace(fs, "writeFileSync", writeFake);
    const fileManagement = proxyquire("./file.management", { fs });

    fileManagement.createFile("test.txt");

    expect(writeFake.calledWith("./data/test.txt")).to.be.true;
  });
  it("should thrown an exception when the file already exists", function () {
    const writeFake = sinon.fake.throws(new Error());
    sinon.replace(fs, "writeFileSync", writeFake);

    const fileManagement = proxyquire("./file.management", { fs });

    expect(() => fileManagement.createFile("test.txt")).to.throw();
  });
  it("getAllFiles should return a list of file", function () {
    const readFake = sinon.fake.yields(null, ["test.txt"]);

    sinon.replace(fs, "readdir", readFake);
    const fileManagement = proxyquire("./file.management", { fs });

    fileManagement.getAllFiles((err, data) => {
      expect(data).to.eql(["test.txt"]);
    });
  });
  it("Should delete the file specified", () => {
    const result = fileManagement.deleteFile("test.txt");
    expect(result).to.be.undefined;
  });
});
