const Users = require ('../models/users')
const UsersModel = new Users();

exports.getUsersList = (req, res) => {
    res.json({
        result: UsersModel.fetchAll(),
    });
}

exports.postUsers = (req, res) => {
    const {id, username, password} = req.body;

    res.json({
       result: {
        id: id,
        username: username,
        password: password,
       }
    });
}