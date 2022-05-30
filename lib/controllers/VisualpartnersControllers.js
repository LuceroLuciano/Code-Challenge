// El cotroller es para crear los ednpoints
const Reader = require("../utils/Reader")

class VisualpartnersController {
    static getListVisualpartners(){
        const readFileJSON = Reader.readJsonFile("visualpartners.json")
        console.log(`\n Total Visualparners: ${readFileJSON.length}`)
        return readFileJSON        
    }
}

module.exports = VisualpartnersController;