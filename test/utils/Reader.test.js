const Reader = require("../../lib/utils/Reader");

describe("Uniti Testing of Codechallenge", () => {
    test("1. Read file visualpartners.json", () => {
        const filePath = "visualpartners.json";
        const readingFilePath = Reader.readJsonFile(filePath);
        expect(readingFilePath[0].id).toBe("6264d5d89f1df827eb84bb23");
        expect(readingFilePath[0].name).toBe("Warren");
    });
});