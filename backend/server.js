const express = require ('express');
const cors = require ('cors');
const cookieParser = require ('cookie-parser');
const dotenv = require ('dotenv').config();
const mongoose = require ('mongoose');
const routes = require ('./routes/routes');

const port = process.env.PORT || 5000;
 const url = process.env.URL;
 //const url = process.env.URLGLOBAL;

const app = express();

app.use (cors ({
    credentials : true,
    origin : 'http://localhost:4200'
}));

app.use (cookieParser ());
app.use (express.json());
app.use (routes);

mongoose.connect(url,{
    useNewUrlParser :true
})
.then(()=>{
    console.log('you are connected to database.');
    app.listen (port, () =>console.log(`server is runing on port ${port}.`))
})

