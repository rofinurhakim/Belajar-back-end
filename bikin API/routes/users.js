const router= require('express').Router();
const UsersController = require('../controller/users')

router.get ('/', UsersController.getUsersList )
router.post ('/', UsersController.postUsers)

module.exports= router;