const express = require("express");
const MetamaskController = require("../controllers/metamask.controller");
const { ADD_PREFIX } = require("../config/public.config");
// const { GET_PREFIX } = require("../config/public.config");

const router = express.Router();

router.post(ADD_PREFIX, MetamaskController.addAddress);
// router.post(GET_PREFIX, MetamaskController.getAddress);

module.exports = router;
