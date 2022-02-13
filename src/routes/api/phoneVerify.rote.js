const express = require("express");
const { phoneVerifyController } = require("../../controllers");

const router = express.Router();

router.post('/verify',phoneVerifyController.verifySms);
router.post('/check-code',phoneVerifyController.checkCode);

module.exports = router;
