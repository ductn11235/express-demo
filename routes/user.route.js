const express = require('express');
const multer = require('multer');

const controller = require('../controllers/user.controller');
const validate = require('../validate/user.validate');
const authMidleware = require('../midlewares/auth.midleware');

const upload = multer({ dest: './public/uploads/' });

const router = express.Router();


router.get('/', authMidleware.requireAuth, controller.index);
router.get('/search', controller.search);
router.get('/create/', controller.create);
router.get('/:id', controller.userId);
router.post('/create', 
    upload.single('avatar'),
    validate.createUser,
    controller.createUser
);


module.exports = router;