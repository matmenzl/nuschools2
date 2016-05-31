var express = require('express');
var router  = express.Router();

var usersController           = require('../controllers/usersController');
var groupsController          = require('../controllers/groupsController' );
var authenticationsController = require('../controllers/authenticationsController');
var requestsController        = require('../controllers/requestsController');

router.post('/login', authenticationsController.login);
router.post('/register', authenticationsController.register);

router.route('/')
  .get(usersController.usersIndex);

router.route('/users')
  .get(usersController.usersIndex);

router.route('/groups')
  .get(groupsController.groupsIndex)
  .post(groupsController.groupsCreate);

router.route('/users/:id')
  .get(usersController.usersShow)
  .patch(usersController.usersUpdate)
  .delete(usersController.usersDelete);

router.route('/groups/:id')
  .get(groupsController.groupsShow)
  .patch(groupsController.groupsUpdate)
  .post(groupsController.groupsCreate)
  .delete(groupsController.groupsDelete);

router.route("/requests")
  .get(requestsController.requestsIndex)
  .post(requestsController.requestsCreate);

router.route("/requests/:id/accept")
  .post(requestsController.requestsAccept) 
  
router.route("/requests/:id/reject")
  .post(requestsController.requestsAccept) 

module.exports = router;
