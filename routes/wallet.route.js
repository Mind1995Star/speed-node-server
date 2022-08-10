const express = require("express");
const WalletController = require("../controllers/wallet.controller");
const { ADD_PREFIX } = require("../config/public.config");

const router = express.Router();

router.post(ADD_PREFIX, WalletController.addAddress);

module.exports = router;
