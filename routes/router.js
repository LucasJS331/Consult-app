const {Router} = require("express");
const router = Router();
const cep_controller = require("../controller/cep-controller");

router.post("/search",cep_controller.Search);
router.get("/", cep_controller.Index);

module.exports = router;