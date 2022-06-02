// hacer las peticiones endpoints http
const Reader = require("./../lib/utils/Reader");
const VisualpartnersController = require("./../lib/controllers/VisualpartnersControllers");
 
const express = require("express");
const { response } = require("express");

const app = express();
app.use(express.json());

const port = 3000;

app.get("/v1/visualpartners", (request, response) => {
    const readingFileVisualpartners = VisualpartnersController.getListVisualpartners();
    response.json(readingFileVisualpartners);

});

app.get("/v1/visualpartners/emails/:haveCertification", (request, response) => {
    const haveCertification = (request.params.haveCertification === "true");
    const getAllEmails = VisualpartnersController.getEmailsStudents(haveCertification);
    response.json({haveCertification: request.params.haveCertification, email: getAllEmails});    
});

app.get("/v1/visualpartners/students/:credits", (request, response) => {
    const credits = parseInt(request.params.credits);
    const getAllStudentsFilterByCreditsMore500 = VisualpartnersController.getStudentsByCreditsMore500(credits);
    response.json({Credits: parseInt(request.params.credits), Students: getAllStudentsFilterByCreditsMore500});
});

app.listen(port, () => {
    console.log(`Code challenge API is running in localhost: ${port}`);
});