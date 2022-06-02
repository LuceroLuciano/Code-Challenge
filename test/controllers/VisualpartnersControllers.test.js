const VisualpartnersController = require("../../lib/controllers/VisualpartnersControllers");

describe("Unit Testing of code challenge", () => {
    test("1. Get List of Visualpartners", () => {
        const readFile = VisualpartnersController.getListVisualpartners();
        expect(readFile[0].name).toBe("Warren");
    });
});