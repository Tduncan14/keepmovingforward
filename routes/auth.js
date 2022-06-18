const express = require('express');
const User = require('../models/UserModel')


router = express.Router()



 router.post('/register', async(req,res) => {

    const {name,email,password} = req.body

    if(!name ){
         res.status(400).json({msg:'add a name to the required field'})
    }


    if(!email){
     res.status(400).json({msg:'add a email to the required field'})
    }


    if(!password){
         res.status(400).json({msg:'add a password to the required feild'})
    }

    try{

        const newUser = new User(req.body)
        await newUser.save()



     
        res.status(200).json({msg:'User successfully sent', newUser
        })

    }

    catch(err){
        res.status(400).json({
            msg:err,
            
        })
    }



 })



 router.post('/login', async (req,res) => {

    const {email,password} = req.body


    if(!email){
         res.status(404).json({msg:'fill in the email'})
    }

    if(!password){
        res.status(404).json({msg:'password need to be filled in'})
    }

     
    try{

        const user = await User.findOne({email:req.body.email})

    if(user){
        user.password = null
        res.status(200).json({msg:'User login successful', data:user})}

    else{
        res.status(404).json({msg:'Login failed',data:null})
    }

 

    }

    catch(err){
        res.status
    }

 })




 module.exports = router