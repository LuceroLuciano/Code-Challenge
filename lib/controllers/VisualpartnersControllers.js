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
        const readFileJSON = Reader.readJsonFile("visualpartners.json");
        const filterEmailsByHaveCertificationTrue = VisualparnertsService.getEmailsWhereHaveCertificationIsTrue(readFileJSON, haveCertification);
        return filterEmailsByHaveCertificationTrue;                         
    }

    static getStudentsByCreditsMore500(credits){
        const readFileJSON = Reader.readJsonFile("visualpartners.json")
        const filterStudentsWhereCreditsMore500 = VisualparnertsService.getCreditsOfVisualpartners(readFileJSON, credits)
        return filterStudentsWhereCreditsMore500;
    }
}

module.exports = VisualpartnersController;