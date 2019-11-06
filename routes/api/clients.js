const router = require("express").Router();
const clientsController = require("../../controllers/booksController");

// Matches with "/api/clients"
router.route("/")
  .get(clientsController.findAll)
  .post(clientsController.create)

// Matches with "/api/clients/:id"
router
  .route("/:id")
  .get(clientsController.findById)
  .put(clientsController.update)
  .delete(clientsController.remove);

router
  .route("/SignUp")
  .post(clientsController.createUser);

module.exports = router;
