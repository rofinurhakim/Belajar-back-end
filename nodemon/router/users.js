

const express = require ('express');

const router = express.Router()



router.post ("/users", (req, res, next) => {
    res.status(200).send('Welcome To Word')
    
  
    

    
  
})







module.exports = router