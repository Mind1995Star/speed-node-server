const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const MetamaskSchema = new Schema({
  address: {
    type: String,
    required: true,
  },
});

module.exports = metamask = mongoose.model("metamaskaddress", MetamaskSchema);
