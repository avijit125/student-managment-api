const express = require('express');
const router = express.Router();

const classesController = require('../controllers/classes')
const isAuth = require('../middleware/is-auth')
const role = require('../middleware/role')

router.get('/',isAuth, classesController.getAllclasses)
router.post('/',isAuth,role,classesController.createClasses)
router.patch('/',isAuth,role,classesController.updateClasses)
router.delete('/', isAuth, role, classesController.deleteClasses)


module.exports = router
