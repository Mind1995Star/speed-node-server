const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const WalletSchema = new Schema({
  address: {
    type: String,
    required: true,
  },
});

module.exports = wallet = mongoose.model("walletaddress", WalletSchema);
