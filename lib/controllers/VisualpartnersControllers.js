// El cotroller es para crear los ednpoints
const VisualparnertsService = require("../services/VisualpartnersService");
const Reader = require("../utils/Reader")

class VisualpartnersController {
    static getListVisualpartners(){
        const readFileJSON = Reader.readJsonFile("visualpartners.json")
        console.log(`\n Total Visualparners: ${readFileJSON.length}`)
        return readFileJSON        
    }

    static getEmailsStudents(haveCertification){
        const readJSON = Reader.readJsonFile("visualpartners.json");
        const filterEmailsByHaveCertificationTrue = VisualparnertsService.getEmailsWhereHaveCertificationIsTrue(readJSON, haveCertification);
        return filterEmailsByHaveCertificationTrue;
    }
}

module.exports = VisualpartnersController;