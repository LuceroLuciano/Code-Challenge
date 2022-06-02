const Reader = require("./lib/utils/Reader");
const VisualparnersService = require("./lib/services/VisualpartnersService");

const readVisualparners = Reader.readJsonFile("visualpartners.json");
// console.log(readVisualparners) 

// primer metodo: mostrar todos los  datos del visualpartnersService.json

/*console.log("Mostrando todos los visualpartners con sus atributos: ")
const readAndShowVisualparners = VisualparnersService.showAllVisualpartners("visualpartners.json")
console.log(readAndShowVisualparners) */


console.log("Mostrar los emails de los students que tienene certificacion true");
const emailWithHaveCertification = readVisualparners.filter((student) => student.haveCertification === false);
console.log(emailWithHaveCertification);
console.log(emailWithHaveCertification.length);

console.log("**********************************************************");
const haveCertificationIsTrue = readVisualparners.filter((student) => student.haveCertification === true);
const haveCertification = haveCertificationIsTrue.map((student) => student.email);
console.log(haveCertification);
console.log(`Total students emails: ${haveCertification.length}`);


console.log("\n\n**********************************************************");
const creditsMoreThan = readVisualparners.filter((student) => student.credits > 500);
const getAllVisualpartnersByCredits = creditsMoreThan.map((student) => student.name);
console.log(getAllVisualpartnersByCredits);
console.log(getAllVisualpartnersByCredits.length);


console.log("\n\n\n**********************************************************");
const readFile = readVisualparners;

console.log(readFile);
console.log(`Los students de visualpartners son: ${readFile.length}`);


if(readFile.credits > 500){
    console.log(readFile.map((student) => student.name)); 
}else {
    console.log(readFile.map((student) => student.name));
}


console.log("Este es el nuevo ejemplo con condicionl.....");
const student = {name: "Lu", credits: 500};
console.log(VisualparnersService.getAllStudentsFilterByCredits(student));