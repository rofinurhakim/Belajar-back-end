
const express = require ('express');

const router = express.Router()



router.get ( "/", (req, res, next) => {
    
    // res.status(200).send('<form action="/users/" method="POST"><input style="text-align: center;" type="text" name="username" /><input type="submit" value="Submit" /> ')
    console.log('jalan')
    next()
})


router.get ( "/", (req, res, next) => {
    
    res.status(200).send('<form action="/users" method="POST"><input style="text-align: center;" type="text" name="username" /><input type="submit" value="Submit" /> ')
  
})






module.exports = router