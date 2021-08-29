const express = require('express');
const userData = require('../models/userData')
const route = express.Router()

route.post('/saveuserData', (req,res,next)=>{

    console.log(req.body, "In the Api")
    userData.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            console.log(data)
            res.json(data)
        }
    })
});


route.put('/update/:id',(req, res, next) => {
    // console.log("in the update Method",req.params.id )
    // console.log(req.body)
    userData.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error);
            console.log(error)
        } else {
            res.json(data)
            console.log('User updated successfully !')
        }
    })
    
})



module.exports = route;