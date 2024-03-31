// const {createUser, getUser, getUserByEmail} = require('../services/user.service');
const { createUser, getUser, getUserByEmail } = require('../services/user.service');

const createUserController = (req, res) => {
    console.log(req.body)
    createUser(req.body)
    .then((data) => {res.send(data)})
    .catch((error) => res.status(500).send(error))
}
const getUserController = (req, res) => {
    console.log(getUser);
    getUser(req.params.user) //is this id?
    .then((data) => {res.send(data)})
    .catch((error) => res.status(500).send(error))
}
const getUserByEmailController = (req, res) => {
    getUserByEmail(req.params.user) //is this id?
    .then((data) => {res.send(data)})
    .catch((error) => res.status(500).send(error))
}
module.exports = {
    createUserController, getUserController, getUserByEmailController
}