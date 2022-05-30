// hacer las peticiones endpoints http
const Reader = require('./../lib/utils/Reader')
const VisualpartnersController = require('./../lib/controllers/VisualpartnersControllers')
 
const express = require("express");

const app = express();
app.use(express.json())

const port = 3000;

app.get("/v1/visualpartners", (request, response) => {
    const readingFileVisualpartners = VisualpartnersController.getListVisualpartners();
    response.json(readingFileVisualpartners);

})




app.listen(port, () => {
    console.log(`Code challenge API is running in localhost: ${port}`)
})