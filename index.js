const express = require('express')
const app =express();
const bodyParser = require('body-parser')
const mongoose = require ('mongoose')
const PORT = 5000;
const morgan = require('morgan');
const routes = require('./routes/routes')
const cors = require('cors');



const connectionURL = 'mongodb+srv://dbAssignment:U54Y1yH1FeJJEkGK@anikassign.rk1nz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

// app.use(cors());



//connecting mongodb
mongoose.connect(connectionURL, { useNewUrlParser:true, useUnifiedTopology:true})
.then(()=>{
    console.log("Connected to mongod DB");
    app.listen(PORT,()=>{ console.log(`Server running in development mode on port ${PORT}`) })
})
.catch((error)=>{ console.log(error.message)})

app.use(morgan('dev'));
app.use(cors());//


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api',routes);


    