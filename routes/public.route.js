const express = require("express");
const { WALLET_PREFIX, METAMASK_PREFIX } = require("../config/public.config");
const metamaskRoute = require("../routes/metamask.route");
const walletRoute = require("../routes/wallet.route");

const app = express();

app.use(METAMASK_PREFIX, metamaskRoute);
app.use(WALLET_PREFIX, walletRoute);

module.exports = app;
