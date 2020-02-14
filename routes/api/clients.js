const router = require("express").Router();
const clientsController = require("../../controllers/clientsController");


router.route("/")
  .get(clientsController.findAll)
  .post(clientsController.create)

router.route("/currentJobs")
  .get(clientsController.findAllCurrent)
  .post(clientsController.createCurrent)

router.route("/currentJobs/:id")
  .delete(clientsController.removeCurrentJob);

router.route("/completedJobs")
  .get(clientsController.findAllCompleted)
  .post(clientsController.createCompleted)

router.route("/completedJobs/:id")
  .delete(clientsController.removeCompleted);

router.route("/referredJobs")
  .get(clientsController.findAllReferred)
  .post(clientsController.createReferred)

router.route("/referredJobs/:id")
  .delete(clientsController.removeReferred);



router
  .route("/:id")
  .get(clientsController.findById)
  .put(clientsController.update)
  .delete(clientsController.remove);

router
  .route("/SignUp")
  .post(clientsController.createUser);

router
  .route("/UserLogin")
  .post(clientsController.signIn);
router
  .route("/Verify/:name")
  .get(clientsController.findName);

module.exports = router;
