const express = require('express');
const {Season} = require('./models');
const app = express();


// app.use((req, res, next) => {
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     res.header(
//       "Access-Control-Allow-Headers",
//       "Origin, X-Requested-With, Content-Type, Accept"
//     );
//     next();
//   });

app.use(express.json());
app.get("/seasons" , async (request, response) => {
    try{
        const seasonArray = await Season.find({});
        response.json({seasonArray});

    }
    catch(error){
        response.status(500).send(error);
    }
});

app.listen(3000, () =>{
    console.log("Server is running at port 3000");
})