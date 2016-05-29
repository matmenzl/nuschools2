var express = require('express');
var router  = express.Router();

var usersController = require('../controllers/usersController');
var groupsController = require('../controllers/groupsController' );
var authenticationsController = require('../controllers/authenticationsController');

router.post('/login', authenticationsController.login);
router.post('/register', authenticationsController.register);

router.route('/')
  .get(usersController.usersIndex);

router.route('/users')
  .get(usersController.usersIndex);

router.route('/groups')
  .get(groupsController.groupsIndex);

router.route('/users/:id')
  .get(usersController.usersShow)
  .patch(usersController.usersUpdate)
  .delete(usersController.usersDelete);

router.route('/groups/:id')
  .get(groupsController.groupsShow)
  .patch(groupsController.groupsUpdate)
  .delete(groupsController.groupsDelete);

module.exports = router;
