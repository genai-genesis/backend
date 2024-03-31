const {createUserController, getUserController, getUserByEmailController} = require('../controllers/user.controller');

const router = require ('express').Router();

router.post('/', createUserController);
router.get('/user', getUserController);
router.get('/email', getUserByEmailController);

module.exports = router;
