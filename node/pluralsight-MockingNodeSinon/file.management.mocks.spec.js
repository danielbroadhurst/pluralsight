const sinon = require("sinon");
const fs = require("fs");
const proxyquire = require("proxyquire");

describe("File Management Mocks", () => {
  afterEach(() => {
    sinon.restore();
  });

  it("Should call writeFileSync when creating a file", function () {
    const writeMock = sinon.mock(fs);
    writeMock.expects("writeFileSync").once();

    const fileManagement = proxyquire("./file.management", { fs });
    fileManagement.createFile("test.txt");

    writeMock.verify();
  });
  it("createFileSafe should create a file with a number appended", function () {
    const writeMock = sinon.mock(fs);
    writeMock.expects("writeFileSync").withArgs("./data/test.txt").throws();
    writeMock.expects("writeFileSync").withArgs("./data/test1.txt").once();
    writeMock.expects("readdirSync").returns(["test.txt"]).once();
    const fileManagement = proxyquire("./file.management", { fs });
    fileManagement.createFileSafe("test.txt");

    writeMock.verify();
  });
  it("createFile should never call writeFileSync when the file is empty", function () {
    const writeMock = sinon.mock(fs);
    writeMock.expects("writeFileSync").never();
    const fileManagement = proxyquire("./file.management", { fs });
    try {
      fileManagement.createFileSafe();
    } catch (error) {}
    writeMock.verify();
  });
});
