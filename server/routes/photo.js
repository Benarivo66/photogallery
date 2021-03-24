const { Router } = require('express');
const controllers = require('../controllers/index');
const config = require('../config/index');

const router = Router();
router.get("/", controllers.getPhoto);
router.post("/", config.upload.single("image"), controllers.createPhoto);


module.exports = router;