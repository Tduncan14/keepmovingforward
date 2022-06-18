const express = require('express');


router = express.Router()



 router.post('/register', (req,res) => {


    try{

    }

    catch(err){
        res.status(400).json({
            msg:err,
            
        })
    }



 })




 module.exports = router